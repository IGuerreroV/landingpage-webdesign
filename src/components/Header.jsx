import { useState } from 'react'
import Dropdown from './Dropdown'
// Icons
import { RiAlignJustify, RiCloseFill, RiArrowRightLine } from 'react-icons/ri'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='w-full'>
      <div className='flex bg-[#B49F5B] justify-center font-semibold text-white w-full h-9 cursor-pointer hover:bg-[#c4ad65] transition duration-100 items-center gap-2'>
        <a>Agenda tu cita por WhatsApp! Haz clic aquí</a>
        <div className='absolute w-[99%] md:pl-[63%] pl-[91%] lg:pl-[66%] xl:pl-[920px] sm:pl-[75%] ease-in-out hover:translate-x-1 transition duration-100'>
          <RiArrowRightLine />
        </div>
      </div>
      <header className='flex xl:flex-col justify-between xl:justify-start items-center w-full xl:h-[44vh] h-[16vh] bg-[white] z-50 pt-2'>
        <div className='container flex flex-1 justify-center items-center pl-10 pt-10 xl:p-0'>
          <a href='#'>
            <img src='logo/Hero.png' className='xl:w-80 xl:h-80 w-40 h-55' />
          </a>
        </div>
        <nav className={`fixed bg-white w-[70%] md:w-[40%] xl:w-[22%] xl:h-auto rounded-lg h-full
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
            : <RiAlignJustify />}
        </button>
      </header>

    </div>
  )
}

export default Header
