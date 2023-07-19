import { useEffect, useState } from 'react'
import { SidebarGroup } from '../sidebarGroup'
import { SidebarLink } from '../sidebarLink'
import { Avatar } from '../avatar'
import {
  Menu,
  X,
  User2,
  Search,
  Heart,
  Wallet2,
  Mouse,
  Headphones,
  Gamepad2,
  Glasses,
  Keyboard,
  Laptop2,
  Dices,
  Facebook,
  Instagram,
  Twitter,
  Github,
  Linkedin,
  HelpCircle,
  Info,
  FileText,
} from 'lucide-react'

export function Sidebar() {
  const [openSide, setOpenSide] = useState(false)

  // open mobile controls
  const handleOpenSidebar = () => {
    setOpenSide(!openSide)
  }

  // scroll page contro ls
  useEffect(() => {
    const handleBlockPageScroll = () => {
      document.body.classList.add('scroll--block')
    }

    const handleReleasePageScroll = () => {
      document.body.classList.remove('scroll--block')
    }

    if (openSide) {
      handleBlockPageScroll()
    } else {
      handleReleasePageScroll()
    }

    return () => {
      handleReleasePageScroll()
    }
  }, [openSide])

  return (
    <aside className='xl:w-80 xl:bg-slate-900 xl:pt-12 xl:max-h-screen xl:overflow-y-auto xl:flex xl:flex-col'>
      <span className='hidden xl:block xl:px-8 xl:space-y-8 xl:pb-12 2xl:space-y-14'>
        <img src='/images/logo.svg' className='xl:w-28 2xl:w-32' />

        <button className='bg-sky-600 px-6 py-3 font-sm rounded-full font-medium tracking-wider transition-all shadow-button hover:bg-sky-700 hover:shadow-none 2xl:px-8 2xl:py-4'>
          Go to Catalog
        </button>
      </span>

      <button
        className='w-8 h-3 fixed top-6 left-6 z-30 text-slate-300 xl:hidden'
        onClick={handleOpenSidebar}
      >
        <Menu strokeWidth={1.25} size={32} />
      </button>

      <nav
        className={`${
          openSide
            ? 'left-0 translate-x-0 visible opacity-100'
            : '-left-full -translate-x-3 invisible opacity-0'
        } fixed w-11/12 rounded-r-3xl p-8 shadow-xl bg-gradient-to-bl from-sky-500 to-sky-800 top-6 bottom-6 flex flex-col items-start justify-center transition-all duration-500 sm:overflow-auto z-30 sm:justify-start sm:w-4/6 md:top-10 md:bottom-10 xl:bg-transparent xl:relative xl:top-auto xl:left-auto xl:bottom-auto xl:from-slate-900 xl:to-slate-900 xl:rounded-none xl:w-full xl:visible xl:opacity-100 xl:translate-x-0 xl:pt-0 xl:flex-1`}
      >
        <button
          className='w-10 h-10 flex items-center justify-center bg-sky-50/30 text-sky-50 rounded-lg absolute top-8 right-8 xl:hidden'
          onClick={handleOpenSidebar}
        >
          <X strokeWidth={1.25} />
        </button>

        <div className='w-full flex items-center justify-start gap-4 xl:hidden'>
          <Avatar />
        </div>

        <div className='scroll flex-1 w-full overflow-auto flex flex-col items-start justify-start gap-10 px-4 pb-8 mt-12 sm:flex-none md:flex-1 md:pb-0 xl:flex-1 xl:overflow-auto xl:mt-0'>
          <SidebarGroup>
            <SidebarLink text='Profile' icon={User2} />
            <SidebarLink text='Search' icon={Search} />
            <SidebarLink text='Favorites' icon={Heart} />
            <SidebarLink text='Balance' icon={Wallet2} tag='$ 2.300' />
          </SidebarGroup>

          <div className='w-full'>
            <SidebarGroup title='Category'>
              <SidebarLink text='Computer Mouse' icon={Mouse} />
              <SidebarLink text='Game Headphones' icon={Headphones} />
              <SidebarLink text='Gamepads' icon={Gamepad2} />
              <SidebarLink text='VR Glasses' icon={Glasses} />
              <SidebarLink text='Keybords' icon={Keyboard} />
              <SidebarLink text='Computers' icon={Laptop2} />
              <SidebarLink text='Games' icon={Dices} />
            </SidebarGroup>
          </div>
        </div>

        <div className='w-full space-y-4 pt-4 px-4'>
          <div className='flex items-center justify-start gap-6 py-4'>
            <span className='text-sky-300 xl:hover:cursor-pointer xl:hover:text-sky-200'>
              <Facebook strokeWidth={1.25} />
            </span>
            <span className='text-sky-300 xl:hover:cursor-pointer xl:hover:text-sky-200'>
              <Instagram strokeWidth={1.25} />
            </span>
            <span className='text-sky-300 xl:hover:cursor-pointer xl:hover:text-sky-200'>
              <Twitter strokeWidth={1.25} />
            </span>
            <span className='text-sky-300 xl:hover:cursor-pointer xl:hover:text-sky-200'>
              <Github strokeWidth={1.25} />
            </span>
            <span className='text-sky-300 xl:hover:cursor-pointer xl:hover:text-sky-200'>
              <Linkedin strokeWidth={1.25} />
            </span>
          </div>

          <div className='xl:hidden'>
            <SidebarGroup>
              <SidebarLink text='Help' icon={HelpCircle} />
              <SidebarLink text='Conditions' icon={Info} />
              <SidebarLink text='Confidentiality' icon={FileText} />
            </SidebarGroup>
          </div>
        </div>
      </nav>
    </aside>
  )
}
