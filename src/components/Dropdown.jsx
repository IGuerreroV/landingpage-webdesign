import { useState } from 'react'
import Proyectos from './Proyectos'
// Icons
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative flex flex-col items-center rounded-lg'>
      <button
        onClick={() => setIsOpen((prev) => !prev)} className='p-4 w-full flex items-center font-normal xl:text-lg xl:rounded-lg tracking-[1px] text-base text-[black] border-4 border-transparent active:border-white active:text-[#B49F5B] justify-between xl:justify-center xl:hover:text-[#B49F5B] duration-0 xl:hover:underline underline-offset-2'
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
        <div className='bg-gray-400 xl:bg-white xl:border-2 border-[#EFECEC] absolute xl:top-[60px] top-[72px] flex-col items-start xl:rounded-lg p-4 text-1xl tracking-widest font-semibold xl:w-[70%] w-full'>
          <Proyectos />
        </div>
      )}
    </div>
  )
}

export default Dropdown
