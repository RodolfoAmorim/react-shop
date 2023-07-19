import { Sidebar } from './components/sidebar'
import { Header } from './components/header'
import { Banners } from './components/banners'
import { Product } from './components/product'
import { CategoryFeatured } from './components/categoryFeatured'
import { Game } from './components/game'
import { Footer } from './components/footer'

import './global.css'
import { TitleSection } from './components/titleSection'

export function App() {
  return (
    <main className='w-full min-h-screen bg-slate-800 text-slate-100 xl:flex'>
      <Sidebar />

      <div className='w-full flex-1 xl:h-screen xl:overflow-y-auto'>
        <div className='p-0 xl:px-10 2xl:pr-20 2xl:pl-10'>
          <Header />

          <Banners />

          <section className='w-full px-6 py-10'>
            <TitleSection title='Our Products' />

            <div className='w-full my-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:gap-6 2xl:grid-cols-6'>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </section>

          <section className='w-full px-6 py-6 space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-6 2xl:gap-10'>
            <CategoryFeatured />
            <CategoryFeatured />
          </section>

          <section className='w-full px-6 py-10'>
            <TitleSection title='Our Games' />

            <div className='w-full my-10 grid grid-cols-2 gap-4 md:grid-cols-4 xl:gap-6 2xl:grid-cols-6'>
              <Game />
              <Game />
              <Game />
              <Game />
              <Game />
              <Game />
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </main>
  )
}
