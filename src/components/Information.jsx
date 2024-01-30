const Information = () => {
  return (
    <div className=' bg-[white]'>
      {/* Information */}
      <section>
        <div className='flex flex-col items-center justify-center '>
          <div className='flex flex-col'>
            <button className='bg-[#B49F5B] text-white py-2 px-8 rounded-xl text-xl m-1'>Contactanos via WhatsApp</button>
            <button className=' text-black py-2 px-8 rounded-xl text-xl border-gray-500 border-[2px] m-1'>
              Linea de Atencion xxxxxxxxx
            </button>
          </div>

          <div className='items-center justify-center'>
            <h1 className='text-center text-2xl font-semibold pb-6'>Nuestra Empresa</h1>
            <p className='text-center text-gray-500 text-[20px] xl:text-xl xl:leading-[2.5rem] leading-8 xl:px-60 px-10'>En TRANSFORMAR estamos comprometidos con materializar los sueños de nuestros clientes, creando ESPACIOS únicos que reflejen la utilidad, buen gasto y comodidad. Con nuestro equipo asumimos el compromiso de diseño ejecución y entrega de cada proyecto.</p>
          </div>

        </div>
      </section>
      <section>
        <div>
          <p className='font-bold xl:text-4xl p-5 xl:pl-60 pl-12'>Nuestros Proyectos</p>
        </div>
        <div className='grid gap-4 items-center justify-center xl:px-60 p-10 pb-20'>
          <div className='grid grid-cols-2 gap-5'>
            <img className='rounded-[10px]' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80' />
            <img className='rounded-[10px]' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80' />
          </div>
          <div className=''>
            <img className='rounded-[10px]' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80' />
          </div>
          <div>
            <img className='rounded-[10px]' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80' />
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <img className='rounded-[10px]' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80' />
            <img className='rounded-[10px]' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80' />
          </div>
          <div>
            <p className='font-bold text-4xl py-10 text-center'>Nuestros servcios</p>
          </div>
          <div className='flex xl:gap-24 md:gap-20 gap-10 rounded-[10px] justify-center '>
            <img className='p-3 bg-[#E7E4E4] xl:h-64 md:h-[150px] h-[70px]  ' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80' />
            <img className='p-3 bg-[#E7E4E4] rounded-[10px] xl:h-64 h-[70px] md:h-[150px]' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80' />
            <img className='p-3 bg-[#E7E4E4] rounded-[10px] xl:h-64 h-[70px] md:h-[150px]' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80' />
          </div>
        </div>

      </section>
    </div>
  )
}

export default Information
