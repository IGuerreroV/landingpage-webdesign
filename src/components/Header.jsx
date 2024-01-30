import { useState } from 'react'
import Dropdown from './Dropdown'
// Icons
import { RiAlignJustify, RiCloseFill } from 'react-icons/ri'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div>
      <div className='flex bg-[#B49F5B] justify-center font-semibold text-white text-[10p20px] w-full h-9 pt-1'>
        <a>Agenda tu cita por Whatsap! Haz click AQUI!</a>
      </div>
      <header className='flex xl:flex-col justify-between xl:justify-start items-center w-full xl:h-[44vh] h-[16vh] bg-[white] z-50 pt-2'>
        <div className='container flex flex-1 justify-center items-center pl-10 pt-10 xl:p-0'>
          <img src='Hero.png' className='xl:w-80 xl:h-80 w-40 h-55' />
        </div>
        <nav className={`fixed bg-white w-[70%] md:w-[40%] xl:w-[19%] xl:h-auto rounded-lg h-full
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
