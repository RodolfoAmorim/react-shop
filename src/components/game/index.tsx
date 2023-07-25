import { PlusCircle } from 'lucide-react'
import { moneyFormatter } from '../../helpers/moneyFormatter'

interface GameProps {
  image: string
  title: string
  category: string
  price: number
}

export function Game({ category, image, title, price }: GameProps) {
  return (
    <div className='group space-y-4 xl:hover:cursor-pointer'>
      <div className='relative w-full overflow-hidden rounded-xl border border-slate-900 xl:group-hover:shadow-2xl xl:group-hover:shadow-sky-950/50'>
        <span className='absolute top-2 left-2 text-xs bg-sky-700 px-2 py-1 text-slate-300 rounded-md shadow-lg'>
          {moneyFormatter(price)}
        </span>

        <img src={`/images/games/${image}`} />
      </div>

      <div className='flex items-center justify-between gap-2'>
        <div className='flex-1'>
          <h4 className='text-sm font-semibold text-slate-200 tracking-wide leading-relaxed xl:group-hover:text-sky-50 2xl:text-base'>
            {title}
          </h4>
          <span className='text-xs tracking-widest capitalize text-slate-500 leading-relaxed 2xl:text-sm'>
            {category}
          </span>
        </div>

        <span className='text-sky-500'>
          <PlusCircle strokeWidth={1.25} size={28} />
        </span>
      </div>
    </div>
  )
}
