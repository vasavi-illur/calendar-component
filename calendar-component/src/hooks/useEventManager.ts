import create from 'zustand'
import { CalendarEvent, sampleEvents } from '../utils/event.utils'
import { nanoid } from 'nanoid'

type State = {
  events: CalendarEvent[]
  addEvent: (e: Omit<CalendarEvent,'id'>) => void
  updateEvent: (id: string, patch: Partial<CalendarEvent>) => void
  deleteEvent: (id: string) => void
  reset: () => void
}

export const useEventManager = create<State>((set) => ({
  events: sampleEvents(),
  addEvent: (e) => set(state => ({ events: [...state.events, { ...e, id: 'id_' + Math.random().toString(36).slice(2,9) }] })),
  updateEvent: (id, patch) => set(state => ({ events: state.events.map(ev => ev.id === id ? { ...ev, ...patch } : ev) })),
  deleteEvent: (id) => set(state => ({ events: state.events.filter(ev => ev.id !== id) })),
  reset: () => set({ events: sampleEvents() }),
}))
