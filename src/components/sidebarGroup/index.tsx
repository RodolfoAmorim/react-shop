import { ReactNode } from 'react'

interface SidebarGroupProps {
  children: ReactNode
  title?: string
}

export function SidebarGroup({ children, title }: SidebarGroupProps) {
  return (
    <>
      {title && (
        <strong className='uppercase text-sm font-semibold tracking-widest text-sky-200 leading-relaxed mb-6 block xl:text-slate-300/50'>
          {title}
        </strong>
      )}
      <ul className='w-full flex flex-col items-start justify-start gap-5'>
        {children}
      </ul>
    </>
  )
}
