import { Sidebar } from './components/sidebar'
import { Header } from './components/header'
import { Banners } from './components/banners'
import { Products } from './components/products'
import { Footer } from './components/footer'
import { Categories } from './components/categories'
import { Games } from './components/games'

import './global.css'

export function App() {
  return (
    <main className='w-full min-h-screen bg-slate-800 text-slate-100 xl:flex'>
      <Sidebar />

      <div className='w-full flex-1 xl:h-screen xl:overflow-y-auto'>
        <div className='p-0 xl:px-10 2xl:pr-20 2xl:pl-10'>
          <Header />

          <Banners />

          <Products />

          <Categories />

          <Games />
        </div>

        <Footer />
      </div>
    </main>
  )
}
