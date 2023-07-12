import { Bell, Search, ShoppingBag } from 'lucide-react'
import { Sidebar } from './components/sidebar'

import './global.css'
import { Avatar } from './components/avatar'

export function App() {
  return (
    <main className='w-full min-h-screen bg-slate-800 text-slate-100 xl:flex xl:gap-10'>
      <Sidebar />

      <div className='w-full flex-1'>
        <header>
          <div>
            <Search strokeWidth={1.25} />
            <input type='text' placeholder='Search...' />
          </div>

          <div>
            <span>
              <Avatar />
            </span>
            <span>
              <Bell strokeWidth={1.25} />
            </span>
            <span>
              <ShoppingBag strokeWidth={1.25} />
            </span>
          </div>
        </header>
      </div>
    </main>
  )
}
