import { useState } from 'react'
import Projects from './Projects'
// Icons
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative flex flex-col items-center'>
      <button
        onClick={() => setIsOpen((prev) => !prev)} className=' font-BodoniModa p-4 w-full flex items-center font-normal xl:text-lg xl:rounded-lg tracking-[1px] text-base text-[black] active:bg-[#d1d1d1] xl:active:bg-inherit justify-between xl:justify-center xl:hover:text-[#3d3d3d] duration-0 xl:hover:underline underline-offset-2'
      >
        NUESTROS PROYECTOS
        {!isOpen
          ? (
            <AiOutlineCaretDown className='h-8' />
            )
          : (
            <AiOutlineCaretUp className='h-8' />
            )}
      </button>

      {isOpen && (
        <div className=' font-Oswald bg-gray-400 xl:bg-white xl:border-2 border-[#EFECEC] absolute xl:top-[60px] top-[72px] flex-col items-start xl:rounded-lg p-4 text-1xl tracking-widest font-semibold xl:w-[70%] w-full'>
          <Projects />
        </div>
      )}
    </div>
  )
}

export default Dropdown
