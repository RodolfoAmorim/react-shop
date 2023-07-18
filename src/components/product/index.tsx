import { PlusCircle } from 'lucide-react'

export function Product() {
  return (
    <div className='bg-slate-700/40 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 text-center'>
      <div className='w-36 h-36 object-cover drop-shadow-xl -mt-8'>
        <img src='/images/products/headphone_blue.png' />
      </div>

      <h4 className='text-sm font-semibold text-slate-200 tracking-wide leading-relaxed w-full block whitespace-nowrap overflow-hidden text-ellipsis'>
        Rapoo V52S - Rapoo
      </h4>
      <span className='text-xs tracking-widest text-slate-500 leading-relaxed'>
        Keyboard
      </span>
      <strong className='text-sky-400 text-lg font-bold tracking-wide'>
        19.50$
      </strong>
      <button className='flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 uppercase mt-4'>
        <PlusCircle strokeWidth={1.25} size={20} className='text-sky-400' />
        Add to Cart
      </button>
    </div>
  )
}
