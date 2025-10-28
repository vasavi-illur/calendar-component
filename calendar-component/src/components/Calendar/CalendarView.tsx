import React from 'react'
import useCalendar from '../../hooks/useCalendar'
import MonthView from './MonthView'
import WeekView from './WeekView'
import EventModal from './EventModal'
import { useEventManager } from '../../hooks/useEventManager'
import { fmt } from '../../utils/date.utils'
import Button from '../primitives/Button'
import Select from '../primitives/Select'

export default function CalendarView(){
  const { cursor, view, setView, next, prev, goToday } = useCalendar(new Date())
  const { events, addEvent, updateEvent, deleteEvent, reset } = useEventManager()
  const [openDate, setOpenDate] = React.useState<Date|null>(null)
  const [editing, setEditing] = React.useState<any>(null)

  const eventsByDate = React.useMemo(()=> {
    const map: Record<string, any[]> = {}
    events.forEach(e=>{
      map[e.date] = map[e.date] || []
      map[e.date].push(e)
    })
    return map
  }, [events])

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Button onClick={prev} variant="ghost">&lt;</Button>
          <Button onClick={goToday} variant="ghost">Today</Button>
          <Button onClick={next} variant="ghost">&gt;</Button>
          <div className="ml-4 text-lg font-semibold">{cursor.toLocaleString('default',{month:'long', year:'numeric'})}</div>
        </div>
        <div className="flex items-center gap-2">
          <Select value={view} onChange={(v:any)=>setView(v)} options={[{label:'Month', value:'month'},{label:'Week', value:'week'}]} />
          <Button onClick={()=>{ setOpenDate(new Date()); setEditing(null); }} variant="primary">Add Event</Button>
          <Button onClick={()=>reset()} variant="ghost">Reset</Button>
        </div>
      </div>

      <div>
        {view === 'month' ? <MonthView cursor={cursor} eventsByDate={eventsByDate} onOpen={(d)=>{ setOpenDate(d); setEditing(null);} } />
        : <WeekView cursor={cursor} eventsByDate={eventsByDate} onOpen={(d)=>{ setOpenDate(d); setEditing(null);} } />}
      </div>

      <EventModal
        open={!!openDate}
        date={openDate}
        existing={editing}
        onClose={()=>setOpenDate(null)}
        onSave={(e)=>{ if(editing) updateEvent(editing.id,e); else addEvent(e)}}
        onDelete={(id)=> deleteEvent(id)}
      />
    </div>
  )
}
