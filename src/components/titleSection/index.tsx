import { Filter } from '../filter'

interface TitleSectionProps {
  title: string
}

export function TitleSection({ title }: TitleSectionProps) {
  return (
    <div className='w-full flex items-center justify-center flex-col gap-6 md:flex-row md:justify-start flex:gap-8'>
      <h2 className='text-xl font-bold tracking-wide leading-tight text-slate-200 md:text-2xl'>
        {title}
      </h2>

      <div className='w-full flex items-center justify-center gap-3 md:w-auto'>
        <Filter>Top</Filter>
        <Filter>Popular</Filter>
        <Filter>Most Sold</Filter>
      </div>
    </div>
  )
}
