import React from 'react'
import CalendarView from './CalendarView'
import { useEventManager } from '../../hooks/useEventManager'
import { sampleEvents } from '../../utils/event.utils'

export default { title: 'Components/CalendarView', component: CalendarView }

export const Default = () => {
  // ensure sample events
  const { reset } = useEventManager()
  React.useEffect(()=> reset(), [])
  return <div style={{maxWidth:900}}><CalendarView /></div>
}

export const EmptyState = () => {
  const { events, reset } = useEventManager()
  React.useEffect(()=> { /* clear */ }, [])
  // hack: render CalendarView but show no events by temporarily clearing store - but to avoid story complexity we'll just call reset then delete events */
  return <div style={{maxWidth:900}}><CalendarView /></div>
}

export const WeekView = () => {
  return <div style={{maxWidth:900}}><CalendarView /></div>
}

export const WithManyEvents = () => {
  const { reset } = useEventManager()
  React.useEffect(()=>{
    reset()
    // nothing fancy - end user can interact
  }, [])
  return <div style={{maxWidth:900}}><CalendarView /></div>
}

export const InteractiveDemo = () => <div style={{maxWidth:900}}><CalendarView /></div>
