import { Sidebar } from './components/sidebar'
import { Header } from './components/header'
import { Banners } from './components/banners'
import { Filter } from './components/filter'
import { Product } from './components/product'
import { CategoryFeatured } from './components/categoryFeatured'
import { Game } from './components/game'

import './global.css'
import { Facebook, Instagram, Twitter, Github, Linkedin } from 'lucide-react'

export function App() {
  return (
    <main className='w-full min-h-screen bg-slate-800 text-slate-100 xl:flex'>
      <Sidebar />

      <div className='w-full flex-1 xl:px-10 2xl:px-20'>
        <Header />

        <Banners />

        <section className='w-full px-6 py-10'>
          <div className='w-full flex items-center justify-center flex-col gap-6'>
            <h2 className='text-xl font-bold tracking-wide leading-tight text-slate-200'>
              Our Products
            </h2>

            <div className='w-full flex items-center justify-center gap-3'>
              <Filter>Top</Filter>
              <Filter>Popular</Filter>
              <Filter>Most Sold</Filter>
            </div>
          </div>

          <div className='w-full my-10 grid grid-cols-2 gap-4'>
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </section>

        <section className='w-full px-6 py-6 space-y-6'>
          <CategoryFeatured />
          <CategoryFeatured />
        </section>

        <section className='w-full px-6 py-10'>
          <div className='w-full flex items-center justify-center flex-col gap-6'>
            <h2 className='text-xl font-bold tracking-wide leading-tight text-slate-200'>
              Our Games
            </h2>

            <div className='w-full flex items-center justify-center gap-3'>
              <Filter>Top</Filter>
              <Filter>Popular</Filter>
              <Filter>Most Sold</Filter>
            </div>
          </div>

          <div className='w-full my-10 grid grid-cols-2 gap-4'>
            <Game />
            <Game />
            <Game />
            <Game />
          </div>
        </section>

        <footer className='flex flex-col items-center justify-center gap-10 py-8 bg-slate-950'>
          <img src='/images/logo-white.svg' className='w-40' />

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
      </div>
    </main>
  )
}
