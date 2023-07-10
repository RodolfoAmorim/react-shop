import { Menu } from 'lucide-react'
import './global.css'

export function App() {
  return (
    <main className='w-full min-h-screen bg-slate-800 text-slate-100'>
      <aside>
        <button className='w-8 h-3 absolute top-6 left-6'>
          <Menu strokeWidth={1.25} size={32} />
        </button>

        <nav className='fixed bg-red-400 w-11/12 rounded-r-3xl p-8 shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500 top-10 bottom-10'>
          <div>
            <ul>
              <li>Profile</li>
              <li>Favorites</li>
              <li>
                Balance <span>$ 2.300</span>
              </li>
            </ul>
          </div>

          <div>
            <strong>Categoy</strong>
            <ul>
              <li>Computer Mouse</li>
              <li>Game Headphones</li>
              <li>Gamepads</li>
              <li>VR Glasses</li>
              <li>Keybords</li>
              <li>Computers</li>
              <li>Games</li>
            </ul>
          </div>

          <div>
            <span>facebook</span>
            <span>instagram</span>
            <span>twitter</span>
          </div>

          <div>
            <strong>Categoy</strong>
            <ul>
              <li>Help</li>
              <li>Conditions</li>
              <li>Confidentiality</li>
            </ul>
          </div>
        </nav>
      </aside>

      <div className=''>
        <h1>Main Content</h1>
      </div>
    </main>
  )
}
