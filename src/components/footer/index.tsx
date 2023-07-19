import { Facebook, Instagram, Twitter, Github, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center gap-10 py-8 bg-slate-950 xl:flex-row xl:justify-between xl:pl-20 xl:pr-32'>
      <img
        src='/images/logo-white.svg'
        className='w-40 transition-all duration-150 xl:w-32 xl:opacity-70 xl:hover:opacity-100'
      />

      <span className='text-sm tracking-wider text-slate-500'>
        all rights reserved | &copy;
      </span>

      <div className='flex items-center justify-start gap-6'>
        <span className='text-slate-500 xl:hover:cursor-pointer xl:hover:text-sky-200'>
          <Facebook strokeWidth={1.25} />
        </span>
        <span className='text-slate-500 xl:hover:cursor-pointer xl:hover:text-sky-200'>
          <Instagram strokeWidth={1.25} />
        </span>
        <span className='text-slate-500 xl:hover:cursor-pointer xl:hover:text-sky-200'>
          <Twitter strokeWidth={1.25} />
        </span>
        <span className='text-slate-500 xl:hover:cursor-pointer xl:hover:text-sky-200'>
          <Github strokeWidth={1.25} />
        </span>
        <span className='text-slate-500 xl:hover:cursor-pointer xl:hover:text-sky-200'>
          <Linkedin strokeWidth={1.25} />
        </span>
      </div>
    </footer>
  )
}
