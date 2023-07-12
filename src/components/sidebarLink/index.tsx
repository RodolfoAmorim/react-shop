import { ElementType } from 'react'

interface SidebarLinkProps {
  icon: ElementType
  text: string
  tag?: string
}

export function SidebarLink({ text, tag, icon: Icon }: SidebarLinkProps) {
  return (
    <li className='flex w-full items-center justify-start gap-4 text-sky-200 font-normal tracking-wide leading-relaxed xl:text-slate-400 xl:hover:text-slate-100 xl:hover:cursor-pointer'>
      <Icon size={20} strokeWidth={1.75} />
      {text}
      {tag && (
        <span className='bg-sky-800 py-2 px-3 rounded-full text-xs leading-none font-semibold text-viole-300 xl:text-slate-300 tracking-wider'>
          {tag}
        </span>
      )}
    </li>
  )
}
