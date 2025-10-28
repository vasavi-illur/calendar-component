import { useState } from 'react'
import { addMonths, subMonths, addWeeks, subWeeks } from '../utils/date.utils'

export default function useCalendar(initial = new Date()) {
  const [cursor, setCursor] = useState<Date>(initial)
  const [view, setView] = useState<'month'|'week'>('month')

  const next = () => setCursor(c => view === 'month' ? addMonths(c, 1) : addWeeks(c, 1))
  const prev = () => setCursor(c => view === 'month' ? subMonths(c, 1) : subWeeks(c, 1))
  const goToday = () => setCursor(new Date())

  return { cursor, view, setView, next, prev, goToday, setCursor }
}
