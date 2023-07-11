import { Sidebar } from './components/sidebar'

import './global.css'

export function App() {
  return (
    <main className='w-full min-h-screen bg-slate-800 text-slate-100 xl:flex xl:gap-10'>
      <Sidebar />

      <div className=''>
        <h1>Main Content</h1>
      </div>
    </main>
  )
}
