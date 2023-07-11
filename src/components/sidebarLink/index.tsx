import { ElementType } from 'react'

interface SidebarLinkProps {
  icon: ElementType
  text: string
  tag?: string
}

export function SidebarLink({ text, tag, icon: Icon }: SidebarLinkProps) {
  return (
    <li className='flex items-center justify-start gap-4 text-violet-200 font-normal tracking-wide leading-relaxed'>
      <Icon size={20} strokeWidth={1.75} />
      {text}
      {tag && (
        <span className='bg-violet-800 py-2 px-3 rounded-full text-xs leading-none font-semibold text-violet-300 tracking-wider'>
          {tag}
        </span>
      )}
    </li>
  )
}
