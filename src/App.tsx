import { Sidebar } from './components/sidebar'
import { Header } from './components/header'
import { ShoppingBag, Star } from 'lucide-react'

import './global.css'

export function App() {
  return (
    <main className='w-full min-h-screen bg-slate-800 text-slate-100 xl:flex xl:gap-10'>
      <Sidebar />

      <div className='w-full flex-1'>
        <Header />

        <section className='w-full'>
          <div className='w-full h-full bg-gradient-to-b from-sky-950 to-slate-800 flex flex-col items-center justify-center gap-4 py-10'>
            <div className='w-72 aspect-square bg-gradient-radial from-sky-200/20 to-50% to-sky-200/0 flex items-center justify-center'>
              <img src='/images/products/headphone.png' className='w-64' />
            </div>

            <div className='w-full flex flex-col items-center justify-center gap-6 mt-4 px-6 text-slate-200'>
              <div className='w-full flex items-center justify-center gap-2'>
                <Star strokeWidth={1.25} />
                <Star strokeWidth={1.25} />
                <Star strokeWidth={1.25} />
                <Star strokeWidth={1.25} />
                <Star strokeWidth={1.25} />
              </div>

              <h1 className='text-center text-3xl leading-tight tracking-wide font-bold'>
                Headphones
              </h1>

              <p className='text-center opacity-80 leading-relaxed tracking-wider'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                maiores quibusdam suscipit rerum tenetur ipsa quidem
              </p>

              <button className='flex items-center justify-center gap-4 bg-sky-500 shadow-button rounded-full text-sky-100 px-6 py-3 tracking-wider leading-tight '>
                Order Now <ShoppingBag strokeWidth={1.25} />
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2>Our Products</h2>
        </section>
      </div>
    </main>
  )
}
