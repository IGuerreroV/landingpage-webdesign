const proyectos = [
  {
    id: 1,
    nombre: 'proyecto 1'
  },
  {
    id: 2,
    nombre: 'proyecto 2'
  },
  {
    id: 3,
    nombre: 'proyecto 3'
  }
]

const Proyectos = () => {
  return (
    <div className='flex flex-col w-full rounded-lg z-index: 1 h-[500px] justify-start gap-3 '>
      {proyectos.map((proyecto) => (
        <div
          key={proyecto.id}
          className='hover:bg-gray-300 text-gray-700 hover:text-black cursor-pointer rounded-r-lg border-l-transparent xl:hover:border-l-[#B49F5B] border-l-4 justify-left transition duration-75 ease-out'
        >
          <a href='/proyectos'>{proyecto.nombre}</a>

        </div>
      ))}
    </div>
  )
}

export default Proyectos