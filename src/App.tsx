import { Sidebar } from './components/sidebar'
import { Header } from './components/header'

import './global.css'

export function App() {
  return (
    <main className='w-full min-h-screen bg-slate-800 text-slate-100 xl:flex'>
      <Sidebar />

      <div className='w-full flex-1 xl:px-10 2xl:px-20'>
        <Header />

        <section className='w-full px-6 pt-20 xl:p-0'>
          <img
            src='/images/banners/headphones_banner.png'
            className='drop-shadow-xl'
          />
        </section>

        <section>
          <h2>Our Products</h2>
        </section>
      </div>
    </main>
  )
}
