import React from 'react'
import { weekRange, format } from '../../utils/date.utils'
import { CalendarEvent } from '../../utils/event.utils'
import clsx from 'clsx'

export default function WeekView({ cursor, eventsByDate, onOpen }:
  { cursor: Date, eventsByDate: Record<string, CalendarEvent[]>, onOpen: (d: Date)=>void }){
  const days = weekRange(cursor)
  return (
    <div>
      <div className="grid grid-cols-7 gap-1">
        {days.map(d => <div key={d.toISOString()} className="border p-2">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">{format(d,'EEE dd')}</div>
            <button className="text-xs text-gray-500" onClick={()=>onOpen(d)}>+ add</button>
          </div>
          <div className="mt-2 space-y-1">
            {(eventsByDate[d.toISOString().slice(0,10)]||[]).map(ev => (
              <div key={ev.id} className={clsx('text-xs px-2 py-0.5 rounded', ev.color||'bg-slate-200')}>{ev.title}</div>
            ))}
          </div>
        </div>)}
      </div>
    </div>
  )
}
