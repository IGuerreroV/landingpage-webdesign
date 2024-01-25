// Icon
import { FaInstagram, FaFacebookF, FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div className='flex h-[150px] bg-[#B49F5B] w-full text-white '>
        <button className='flex items-center justify-center gap-4 py-10 w-full '>
          <FaInstagram />
          <FaFacebookF />
        </button>
      </div>
      <div>
        <p className='flex h-20 items-center justify-center bg-[#B49F5B] w-full text-white text-[10px]'>
          <FaRegCopyright />2024
        </p>
      </div>
    </div>
  )
}

export default Footer
