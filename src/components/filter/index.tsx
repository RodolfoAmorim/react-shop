import { ReactNode } from 'react'

interface FilterProps {
  children: ReactNode
}

export function Filter({ children }: FilterProps) {
  return (
    <button className='inline-bllock px-4 py-2 font-normal tracking-wider text-sm text-slate-300 border border-slate-50/40 rounded-full'>
      {children}
    </button>
  )
}
