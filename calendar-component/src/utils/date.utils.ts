import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, format, addMonths, subMonths, addWeeks, subWeeks } from 'date-fns'

export const fmt = (d: Date, f = 'yyyy-MM-dd') => format(d, f)
export const monthRange = (date: Date) => {
  const start = startOfWeek(startOfMonth(date))
  const end = endOfWeek(endOfMonth(date))
  const days = []
  let cursor = start
  while (cursor <= end) {
    days.push(new Date(cursor))
    cursor = addDays(cursor, 1)
  }
  return days
}
export const weekRange = (date: Date) => {
  const start = startOfWeek(date)
  const end = endOfWeek(date)
  const days = []
  let cursor = start
  while (cursor <= end) {
    days.push(new Date(cursor))
    cursor = addDays(cursor, 1)
  }
  return days
}
export { addDays, addMonths, subMonths, addWeeks, subWeeks, startOfWeek, endOfWeek, format }
