const Information = () => {
  return (
    <div className=' bg-[white]'>
      {/* Information */}
      <section>
        <div className='flex flex-col items-center justify-center '>
          <div className='flex flex-col'>
            <button className='bg-[#B49F5B] text-white py-2 px-8 rounded-xl text-xl m-1 hover:scale-[102%] font-normal'>
              Contáctanos por WhatsApp
            </button>
            <button className=' text-black py-2 px-8 rounded-xl text-xl border-gray-500 border-[2px] m-1 hover:border-black hover:scale-[101%] font-normal'>
              Línea de Atención xxxxxxxxx
            </button>
          </div>

          <div className='items-center justify-center'>
            <h1 className='text-center text-2xl font-medium pb-6 pt-1 tracking-[1px]'>Nuestra Empresa</h1>
            <p className='text-center text-gray-500 text-[20px] xl:text-xl xl:leading-[2.5rem] leading-8 xl:px-80 px-10 font-mono'>
              En <span className='text-[#000]'>TRANSFORMAR</span> estamos comprometidos con materializar los sueños de nuestros clientes, creando ESPACIOS únicos que reflejen la utilidad, buen gasto y comodidad. Con nuestro equipo asumimos el compromiso de diseño ejecución y entrega de cada proyecto.
            </p>
          </div>

        </div>
      </section>
      <section>
        <div>
          <p className='font-bold xl:text-4xl p-5 xl:pl-60 pl-12 text-3xl tracking-wider'>Nuestros Proyectos</p>
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
          <div>
            <p className='font-bold text-4xl py-10 xl:text-center xl:tracking-widest tracking-wide'>Nuestros servicios</p>
          </div>
          <div className='flex flex-col xl:flex-row xl:gap-24 md:gap-5 gap-10 rounded-[10px] justify-center items-center'>
            <img className='p-3 bg-[#E7E4E4] xl:h-64 md:h-[550px] h-[70%] w-full ' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80' />
            <img className='p-3 bg-[#E7E4E4] rounded-[10px] xl:h-64 h-[70%] md:h-[550px] w-full' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80' />
            <img className='p-3 bg-[#E7E4E4] rounded-[10px] xl:h-64 h-[70%] md:h-[550px] w-full' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80' />
          </div>
        </div>

      </section>
    </div>
  )
}

export default Information
