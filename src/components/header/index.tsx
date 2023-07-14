import { useState, useRef, useEffect } from 'react'
import { Search, Bell, ShoppingBag } from 'lucide-react'
import { Avatar } from '../avatar'

export function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const searchInput = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutsideSearch(event: MouseEvent) {
      if (
        searchInput.current &&
        !searchInput.current.contains(event.target as Node)
      ) {
        setShowSearch(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutsideSearch)

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideSearch)
    }
  }, [searchInput])

  const handleSearch = () => {
    setShowSearch(!showSearch)
  }

  return (
    <header className='inline-flex items-center justify-end gap-6 fixed top-0 right-0 p-6 text-slate-300 z-20 xl:sticky xl:w-full xl:justify-between xl:px-0'>
      <div
        className={`${
          showSearch
            ? 'opacity-1 visible translate-y-0 ease-in'
            : 'opacity-0 invisible -translate-y-2 ease-out'
        } transition-all duration-300 fixed h-screen top-0 left-0 right-0 z-40 bg-slate-800/20 p-6 backdrop-blur-md xl:visible xl:translate-y-0 xl:opacity-100 xl:relative xl:h-auto xl:p-0 xl:z-0`}
      >
        <div
          className='flex items-center justify-start gap-4 bg-slate-700 px-4 rounded-lg'
          ref={searchInput}
        >
          <label htmlFor='search' className='text-slate-400'>
            <Search strokeWidth={1.25} />
          </label>

          <input
            type='text'
            id='search'
            name='search'
            placeholder='Search...'
            className='flex-1 outline-none bg-transparent h-14 text-slate-100 placeholder:text-slate-400 text-base leading-relaxed tracking-wide'
          />
        </div>
      </div>

      <div className='flex items-center justify-end gap-8 xl:gap-10'>
        <span className='hidden xl:flex xl:flex-row-reverse xl:gap-6 xl:items-center'>
          <Avatar />
        </span>

        <button className='xl:hidden' onClick={handleSearch}>
          <Search strokeWidth={1.25} />
        </button>

        <button className='relative'>
          <span className='absolute -top-1 -right-1 bg-pink-500 w-2 h-2 text-xs flex items-center justify-center rounded-full leading-none' />
          <Bell strokeWidth={1.25} />
        </button>

        <button className='fixed bottom-6 right-6 w-14 h-14 bg-sky-500 flex items-center justify-center rounded-full shadow-button xl:relative xl:bottom-0 xl:right-0 xl:bg-transparent xl:w-auto xl:h-auto'>
          <span className='absolute -top-1 -right-1 bg-pink-500 w-6 h-6 text-xs flex items-center justify-center rounded-full leading-none xl:-top-4 xl:-right-4'>
            2
          </span>
          <ShoppingBag strokeWidth={1.25} />
        </button>
      </div>
    </header>
  )
}
