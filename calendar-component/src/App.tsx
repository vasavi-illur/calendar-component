import React from 'react'
import CalendarView from './components/Calendar/CalendarView'

export default function App(){
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-semibold mb-4">Calendar Component Demo</h1>
      <CalendarView />
    </div>
  )
}
