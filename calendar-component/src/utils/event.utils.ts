import { fmt } from './date.utils'

export type CalendarEvent = {
  id: string
  title: string
  date: string // yyyy-MM-dd
  notes?: string
  color?: string
}

export const sampleEvents = (): CalendarEvent[] => ([
  { id: 'e1', title: 'Design Review', date: fmt(new Date(), 'yyyy-MM-dd'), color: 'bg-blue-400' },
  { id: 'e2', title: 'Interview', date: fmt(new Date(), 'yyyy-MM-dd'), color: 'bg-emerald-400' },
  { id: 'e3', title: 'Release', date: fmt(new Date(new Date().getTime() + 86400000), 'yyyy-MM-dd'), color: 'bg-amber-400' },
])
