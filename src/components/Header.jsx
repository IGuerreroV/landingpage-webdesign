import { useState } from 'react'
// Icons
import { RiAlignJustify, RiCloseFill } from 'react-icons/ri'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <header className='flex xl:flex-col justify-between xl:justify-start items-center w-full p-4 xl:h-[22vh] h-[15vh] bg-[#EFECEC] z-50'>
      <div className=' text-center'>
        <h1 className='xl:text-2xl text-2xl font-bold xl:pb-7 '>Transformar</h1>
      </div>
      <nav className={`fixed text-center bg-[#EFECEC] w-[60%] md:w-[40%] xl:w-full h-full ${
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
  )
}

export default Header
