import { useState } from 'react'
import Dropdown from './Dropdown'
// Icons
import { RiAlignJustify, RiCloseFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='w-full'>
      <header className='flex xl:flex-col justify-between xl:justify-start items-center w-full xl:h-[44vh] h-[16vh]  z-50 pt-2'>
        <div className='container flex flex-1 justify-center items-center pl-10 pt-10 xl:p-0'>
          <Link to='/'>
            <img src='logo/Hero-transformed.png' className='xl:w-[350px] xl:h-[350px] w-40 h-55' />
          </Link>
        </div>
        <nav className={`fixed bg-gray-400 lg:bg-inherit w-[70%] md:w-[40%] xl:w-[22%] xl:h-auto h-full
        ${
        showMenu ? 'left-0' : '-left-full'
        }
        top-0 xl:static xl:flex-row xl:text-1xl font-bold xl:pl-0 transition-all duration-500 z-50`}
        >
          <Dropdown isOpen={showMenu} />

        </nav>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className='text-2xl p-2 text-center '
        >
          {showMenu
            ? <RiCloseFill onClick={() => setShowMenu(!setShowMenu)} />
            : <RiAlignJustify className='xl:hidden' />}
        </button>
      </header>

    </div>
  )
}

export default Header
