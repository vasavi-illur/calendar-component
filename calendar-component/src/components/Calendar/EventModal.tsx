import React, { useState } from 'react'
import Modal from '../primitives/Modal'
import { CalendarEvent } from '../../utils/event.utils'

export default function EventModal({ open, date, onClose, onSave, existing, onDelete }:
  { open: boolean, date: Date | null, onClose: ()=>void, onSave: (e: Omit<CalendarEvent,'id'>)=>void, existing?: CalendarEvent | null, onDelete?: (id:string)=>void }){
  const [title, setTitle] = useState(existing?.title||'')
  const [notes, setNotes] = useState(existing?.notes||'')
  const colors = ['bg-blue-400','bg-emerald-400','bg-amber-400','bg-pink-300']
  const [color, setColor] = useState(existing?.color||colors[0])

  React.useEffect(()=>{ setTitle(existing?.title||''); setNotes(existing?.notes||''); setColor(existing?.color||colors[0]) }, [existing, open])

  if(!date) return null
  return (
    <Modal open={open} onClose={onClose}>
      <div>
        <h3 className="text-lg font-medium mb-2">{existing ? 'Edit Event':'Add Event'} - {date.toDateString()}</h3>
        <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full border rounded px-2 py-1 mb-2" placeholder="Title" />
        <textarea value={notes} onChange={e=>setNotes(e.target.value)} className="w-full border rounded px-2 py-1 mb-2" placeholder="Notes" />
        <div className="flex gap-2 mb-3">
          {colors.map(c => (
            <button key={c} onClick={()=>setColor(c)} className={\`px-2 py-1 rounded \${c} \${color===c ? 'ring-2 ring-offset-1' : ''}\`}></button>
          ))}
        </div>
        <div className="flex justify-end gap-2">
          {existing && <button className="px-3 py-1 rounded border" onClick={()=>{ onDelete && onDelete(existing.id); onClose(); }}>Delete</button>}
          <button className="px-3 py-1 rounded border" onClick={onClose}>Cancel</button>
          <button className="px-3 py-1 rounded bg-indigo-600 text-white" onClick={()=>{
            if(title.trim()==='') return alert('Title required')
            onSave({ title, notes, date: date.toISOString().slice(0,10), color })
            onClose()
          }}>Save</button>
        </div>
      </div>
    </Modal>
  )
}
