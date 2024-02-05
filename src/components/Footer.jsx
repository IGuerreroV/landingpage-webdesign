// Icon
import { FaInstagram, FaFacebookF, FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='flex h-[150px] w-full text-white '>
        <button className='flex items-center justify-center gap-4 py-10 w-full '>
          <a href='https://www.instagram.com/transformar_espacios?utm_source=qr&igsh=MWZkOXAxYXVpd2I3aw==' target='_blank' rel='noreferrer'>
            <FaInstagram className='hover:scale-110' />
          </a>
          <FaFacebookF className='hover:scale-110' />
        </button>
      </div>
      <div>
        <p className='flex h-20 items-center justify-center w-full text-white text-[10px]'>
          <FaRegCopyright />2024
        </p>
      </div>
    </div>
  )
}

export default Footer
