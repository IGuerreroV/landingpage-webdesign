// Icons
import { FaWhatsapp } from 'react-icons/fa'

const Information = () => {
  const HandleCall = () => {
    window.location.href = 'tel:1111111'
  }

  return (
    <div className=' w-full'>
      {/* Information */}
      <div className='fixed w-[60px] h-[60px] bg-[#25d366] bottom-10 right-[20px] text-[#fff] rounded-[50%] text-center shadow-[2px_2px_3px_#999] z-50 hover:bg-[#28e56d] '>
        <a
          href='https://api.whatsapp.com/send?phone=573209850691&text=Me%20interesa%20saber%20mas%20sobre...'
          target='_blank' rel='noreferrer'
        >
          <FaWhatsapp className='text-6xl' />
          <span className='fixed right-[90px] bottom-[52px] bg-white text-black p-1.5 rounded-lg font-semibold tracking-wider'>Asesoría Personalizada</span>
        </a>
      </div>
      <section>
        <div className='flex flex-col items-center justify-center '>
          <div className='flex flex-col hover:scale-[102%] duration-200'>
            <a
              className=' text-[] py-2 px-20 rounded-xl text-xl border-gray-500 m-1 hover:border-black font-normal text-center bg-[#B4B4B4]'
              href='tel:1111111'
              onClick={HandleCall}
            >
              Llama ahora
            </a>
          </div>

          <div className='items-center justify-center'>
            <h1 className='text-center text-2xl font-bold pb-6 pt-1 tracking-[1px] text-white'>Nuestra Empresa</h1>
            <p className='text-center text-[white] text-[20px] xl:text-xl xl:leading-[2rem] leading-8 xl:px-80 px-10 font-serif'>
              ¡Haz realidad el espacio de tus sueños con <span className='text-[#f5f5dc]'>Transformar Espacios!</span> Comprometidos con la excelencia y tu satisfacción, nos dedicamos a crear <span className='text-[#f5f5dc]'>espacios</span> que son verdaderas obras de arte en funcionalidad, confort y que sean testimonio de una inversión inteligente. Nuestro equipo experto te acompaña desde el diseño hasta la ejecución, asegurándonos de que cada detalle refleje tu visión y garantizando su entrega puntual. Con nosotros, no solo <span className='text-[#f5f5dc]'>transformas</span> un lugar, ¡creas el escenario perfecto para vivir tus mejores momentos! Confía en <span className='text-[#f5f5dc]'>Transformar,</span> ¡y empieza a disfrutar de los <span className='text-[#f5f5dc]'>Espacios</span> que mereces!

            </p>
          </div>

        </div>
      </section>
      <section>
        <div>
          <p className='font-bold xl:text-4xl p-5 xl:pl-60 pl-12 text-3xl tracking-wider text-white'>Nuestro Portafolio</p>
        </div>
        <div className='grid gap-1 items-center justify-center xl:px-60 p-10 pb-20'>
          <div className='grid grid-cols-3 gap-1'>
            <img className='rounded-[10px] h-full' src='/Centro-de-estudio/b7f3a914-052f-4e09-a4c8-d6eb3ac63423.jpg' />

            <img className='rounded-[10px] row-span-2 col-start-2 col-end-5 h-full justify-center' src='/Centros-de-entretenimiento/48f635be-97a5-431e-95dc-2cac08fe8dd3.jpg' />
            <img className='rounded-[10px] h-full' src='/Centro-de-estudio/c35cd6c0-57af-4a90-b8ae-c26bc675415c.jpg' />

          </div>
          <div>
            <img className='rounded-[10px]' src='/Closet/18466287-70a5-49ab-a89f-71a642b07dbe.jpg' />
          </div>
          <div className='grid grid-cols-3 gap-1'>
            <img className='rounded-[10px] row-span-2 col-start-1 col-end-3 h-full' src='/Centros-de-entretenimiento/ddfaa9f6-a812-44df-a0cd-44e59b97ab72.jpg' />

            <img className='rounded-[10px] h-full' src='/Closet/24cbcabd-9fbc-4e1a-ba5f-b61d4cf34042.jpg' />
            <img className='rounded-[10px] h-full' src='/cocinas/88675123-5ee3-4de0-a3aa-14aeccf7a9f4.jpg' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Information
