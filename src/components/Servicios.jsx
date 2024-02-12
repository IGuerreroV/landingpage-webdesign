const Servicios = () => {
  return (
    <div>
      <div>
        <p className='font-bold font-BodoniModa xl:text-4xl py-10 xl:text-center xl:tracking-widest sm:text-5xl text-4xl ml-5 xl:ml-0 text-white'>
          Nuestros servicios
        </p>
      </div>
      <div className='flex flex-col xl:flex-row xl:gap-10 md:gap-5 gap-10 rounded-[10px] justify-center items-center mx-[10%] pb-20'>
        <div className='relative'>
          <img className='p-3 pb-0 bg-[#E7E4E4] rounded-[10px] xl:h-[300px] h-[70%] xl:w-[600px] md:h-[550px] w-full' src='/otras/77665eeb-9129-447b-ab4c-359a21168402.jpg' />
          <span className='absolute p-[20px] top-[35%] left-[23%] sm:p-[100px] sm:top-[30%] sm:left-[25%] sm:text-2xl xl:top-[35%] xl:left-[10%] xl:p-[30px] 2xl:left-[15%] bg-gray-900 bg-opacity-50 text-white'>
            Diseno y desarrollo
          </span>
        </div>
        <div className='relative'>
          <img className='p-3 pb-0 bg-[#E7E4E4] rounded-[10px] xl:h-[300px] h-[70%] xl:w-[600px] md:h-[550px] w-full' src='/cocinas/05f4cd69-692b-4835-afda-6469b0200dbe.jpg' />
          <span className='absolute p-[20px] top-[35%] left-[23%] sm:p-[100px] sm:top-[30%] sm:left-[25%] sm:text-2xl xl:top-[35%] xl:left-[10%] xl:p-[30px] 2xl:left-[15%] bg-gray-900 bg-opacity-50 text-white'>
            Diseno y desarrollo
          </span>
        </div>
        <div className='relative'>
          <img className='p-3 pb-0 bg-[#E7E4E4] rounded-[10px] xl:h-[300px] h-[60%] xl:w-[600px] md:h-[550px] w-full' src='/Closet/18466287-70a5-49ab-a89f-71a642b07dbe.jpg' />
          <span className='absolute p-[20px] top-[35%] left-[23%] sm:p-[100px] sm:top-[30%] sm:left-[25%] sm:text-2xl xl:top-[35%] xl:left-[10%] xl:p-[30px] 2xl:left-[15%] bg-gray-900 bg-opacity-50 text-white'>
            Diseno y desarrollo
          </span>
        </div>
      </div>
    </div>
  )
}

export default Servicios
