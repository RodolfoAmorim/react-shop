import { ChevronRightCircle } from 'lucide-react'
import { moneyFormatter } from '../../helpers/moneyFormatter'

interface CategoryFeaturedProps {
  name: string
  description: string
  price: number
  image: string
  type: string
}

export function CategoryFeatured({
  description,
  image,
  name,
  price,
  type,
}: CategoryFeaturedProps) {
  return (
    <div className='group w-full border-4 border-slate-600 p-6 rounded-xl flex flex-col items-start justify-between overflow-hidden relative transition-all duration-200 xl:hover:bg-sky-600 xl:hover:border-sky-600'>
      <div className='flex flex-col items-start justify-start gap-2 mb-10 relative z-10 2xl:gap-4'>
        <small className='text-sm tracking-wider text-slate-500 xl:group-hover:text-sky-50/80 2xl:text-base'>
          Starting From
        </small>

        <strong className='text-sky-400 text-lg font-bold tracking-wide xl:group-hover:text-sky-50 2xl:text-2xl'>
          {moneyFormatter(price)}
        </strong>

        <h3 className='text-2xl font-bold tracking-wide leading-relaxed 2xl:text-4xl'>
          {name}
        </h3>

        <p className='text-sm tracking-wide leading-relaxed text-slate-400 xl:group-hover:text-sky-50 2xl:text-base 2xl:max-w-md'>
          {description}
        </p>
      </div>

      <button className='group flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 uppercase mt-4 z-10 relative xl:group-hover:text-sky-50 2xl:text-sm'>
        <ChevronRightCircle
          strokeWidth={1.25}
          size={20}
          className='text-sky-400 xl:group-hover:text-sky-50'
        />
        Go to catalog
      </button>

      <span className='font-extrabold text-[5rem] uppercase tracking-widest absolute z-0 text-slate-700/80 bottom-2 -left-14 xl:group-hover:text-sky-100/10 2xl:text-[8rem] 2xl:text-slate-700/50'>
        {type}
      </span>

      <img
        src={`/images/products/${image}`}
        className='absolute top-0 bottom-0 -right-1/2 object-cover opacity-20 z-0 2xl:object-contain 2xl:right-0 2xl:translate-x-1/2 2xl:h-full 2xl:opacity-100'
      />
    </div>
  )
}
