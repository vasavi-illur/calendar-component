import React from 'react'
import { CalendarEvent } from '../../utils/event.utils'
import clsx from 'clsx'

export default function CalendarCell({ date, events, onOpen }: { date: Date, events: CalendarEvent[], onOpen: (d: Date)=>void }){
  const day = date.getDate()
  const isToday = (new Date()).toDateString() === date.toDateString()
  return (
    <div className="border p-2 min-h-[84px] flex flex-col">
      <div className="flex items-center justify-between">
        <div className={clsx('text-sm font-medium', { 'text-indigo-600': isToday })}>{day}</div>
        <button className="text-xs text-gray-500" onClick={() => onOpen(date)}>+ add</button>
      </div>
      <div className="mt-2 flex-1 space-y-1 overflow-hidden">
        {events.slice(0,3).map(ev => (
          <div key={ev.id} className={clsx('text-xs px-2 py-0.5 rounded truncate', ev.color || 'bg-slate-200')}>
            {ev.title}
          </div>
        ))}
        {events.length > 3 && <div className="text-xs text-gray-400">+{events.length-3} more</div>}
      </div>
    </div>
  )
}
