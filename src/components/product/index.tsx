import { PlusCircle } from 'lucide-react'

export function Product() {
  return (
    <div className='group bg-slate-700/40 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 text-center transition-all duration-150 xl:hover:bg-slate-700/60 xl:hover:cursor-pointer'>
      <div className='w-36 h-36 object-cover drop-shadow-xl -mt-8 transition-all duration-150 2xl:w-40 2xl:h-40 2xl:mb-4 2xl:group-hover:-translate-y-2'>
        <img src='/images/products/headphone_blue.png' className='' />
      </div>

      <h4 className='text-sm font-semibold text-slate-200 tracking-wide leading-relaxed w-full block whitespace-nowrap overflow-hidden text-ellipsis 2xl:text-base'>
        Rapoo V52S - Rapoo
      </h4>

      <span className='text-xs tracking-widest text-slate-500 leading-relaxed xl:text-sm'>
        Keyboard
      </span>

      <strong className='text-sky-400 text-lg font-bold tracking-wide 2xl:text-xl'>
        19.50$
      </strong>

      <button className='group flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 uppercase mt-4 transition-colors xl:hover:text-slate-100'>
        <PlusCircle
          strokeWidth={1.25}
          size={20}
          className='text-sky-400 transition-all duration-150 group-hover:text-sky-300 group-hover:scale-110'
        />
        Add to Cart
      </button>
    </div>
  )
}
