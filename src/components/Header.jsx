import { useState } from 'react'
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
        <nav className={`fixed text-center bg-white w-[60%] md:w-[40%] xl:w-full h-full pb-10 ${
        showMenu ? 'left-0' : '-left-full'
        } top-0 xl:static flex-1 flex xl:flex-row xl:items-center xl:justify-center xl:text-1xl font-bold xl:pl-0 pl-5 transition-all duration-500 z-50`}
        >
          <a href='#'>Nuestros Proyectos</a>
        </nav>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className=' xl:hidden text-2xl p-2 text-center'
        >
          {showMenu ? <RiCloseFill /> : <RiAlignJustify />}
        </button>
      </header>
    </div>
  )
}

export default Header
