import React from 'react'
import { monthRange } from '../../utils/date.utils'
import CalendarCell from './CalendarCell'
import { CalendarEvent } from '../../utils/event.utils'

export default function MonthView({ cursor, eventsByDate, onOpen }:
  { cursor: Date, eventsByDate: Record<string, CalendarEvent[]>, onOpen: (d: Date)=>void }){
  const days = monthRange(cursor)
  return (
    <div className="grid grid-cols-7 gap-1">
      {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(h=>(
        <div key={h} className="text-xs text-center font-medium py-1">{h}</div>
      ))}
      {days.map(d => {
        const key = d.toISOString().slice(0,10)
        return <CalendarCell key={key} date={d} events={eventsByDate[key]||[]} onOpen={onOpen} />
      })}
    </div>
  )
}
