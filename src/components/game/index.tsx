import { PlusCircle } from 'lucide-react'

export function Game() {
  return (
    <div className='group space-y-4 xl:hover:cursor-pointer'>
      <div className='relative w-full overflow-hidden rounded-xl border border-slate-900 xl:group-hover:shadow-2xl xl:group-hover:shadow-sky-950/50'>
        <span className='absolute top-2 left-2 text-xs bg-sky-700 px-2 py-1 text-slate-300 rounded-md shadow-lg'>
          19,59$
        </span>

        <img src='/images/games/miles_morales.png' />
      </div>

      <div className='flex items-center justify-between gap-2'>
        <div className='flex-1'>
          <h4 className='text-sm font-semibold text-slate-200 tracking-wide leading-relaxed xl:group-hover:text-sky-50 2xl:text-base'>
            Spider-Man Miles Morales
          </h4>
          <span className='text-xs tracking-widest text-slate-500 leading-relaxed 2xl:text-sm'>
            PC Game
          </span>
        </div>

        <span className='text-sky-500'>
          <PlusCircle strokeWidth={1.25} size={28} />
        </span>
      </div>
    </div>
  )
}
