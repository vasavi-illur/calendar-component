import React from 'react'

export default function Select({ value, onChange, options }: { value: string, onChange: (v:string)=>void, options: {label:string, value:string}[] }){
  return (
    <select className="border rounded px-2 py-1" value={value} onChange={e => onChange(e.target.value)}>
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  )
}
