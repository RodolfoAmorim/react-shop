import { Sidebar } from './components/sidebar'
import { Header } from './components/header'
import { Banners } from './components/banners'
import { CategoryFeatured } from './components/categoryFeatured'
import { Products } from './components/products'
import { Footer } from './components/footer'

import './global.css'
import { Games } from './components/games'

export function App() {
  return (
    <main className='w-full min-h-screen bg-slate-800 text-slate-100 xl:flex'>
      <Sidebar />

      <div className='w-full flex-1 xl:h-screen xl:overflow-y-auto'>
        <div className='p-0 xl:px-10 2xl:pr-20 2xl:pl-10'>
          <Header />

          <Banners />

          <Products />

          <section className='w-full px-6 py-6 space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-6 2xl:gap-10'>
            <CategoryFeatured />
            <CategoryFeatured />
          </section>

          <Games />
        </div>

        <Footer />
      </div>
    </main>
  )
}
