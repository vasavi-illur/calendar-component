import React from 'react'
import clsx from 'clsx'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary'|'ghost' }
export default function Button({ variant='primary', className, children, ...rest }: Props){
  return (
    <button {...rest} className={clsx('px-3 py-1 rounded-md text-sm focus:outline-none', {
      'bg-indigo-600 text-white hover:bg-indigo-700': variant === 'primary',
      'bg-transparent text-gray-700 hover:bg-gray-100': variant === 'ghost'
    }, className)}>
      {children}
    </button>
  )
}
