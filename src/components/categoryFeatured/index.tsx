import { ChevronRightCircle } from 'lucide-react'

export function CategoryFeatured() {
  return (
    <div className='w-full border-4 border-slate-600 p-6 rounded-xl flex flex-col items-start justify-between overflow-hidden relative'>
      <div className='flex flex-col items-start justify-start gap-2 mb-10 relative z-10'>
        <small className='text-sm tracking-wider text-slate-500'>
          Starting From
        </small>
        <strong className='text-sky-400 text-lg font-bold tracking-wide'>
          16,00$
        </strong>
        <h3 className='text-2xl font-bold tracking-wide leading-relaxed'>
          Omeng Gaming
        </h3>
        <p className='text-sm tracking-wide leading-relaxed text-slate-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          laudantium odio sit nostrum temporibus qui labore
        </p>
      </div>

      <button className='flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 uppercase mt-4 z-10 relative'>
        <ChevronRightCircle
          strokeWidth={1.25}
          size={20}
          className='text-sky-400'
        />
        Go to catalog
      </button>

      <span className='font-extrabold text-[5rem] uppercase tracking-widest absolute z-0 text-slate-700/80 bottom-2 -left-14'>
        Mouse
      </span>

      <img
        src='/images/products/mouse_blue.png'
        className='absolute top-0 bottom-0 -right-1/2 object-cover opacity-20 z-0'
      />
    </div>
  )
}
