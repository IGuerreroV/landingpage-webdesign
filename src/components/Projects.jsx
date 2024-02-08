import { Link } from 'react-router-dom'

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

const Projects = () => {
  return (
    <div className='flex flex-col w-full rounded-lg z-index: 1 h-[500px] justify-start gap-3 '>
      {proyectos.map((proyecto, id) => (
        <Link
          to={`/projects/${proyecto.id}`}
          key={`proyecto-${id}`}
        >
          <h1
            className='hover:bg-[#d1d1d1] text-[#000000] cursor-pointer rounded-r-lg border-l-transparent xl:hover:border-l-[#778899] border-l-4 justify-left transition duration-75 ease-out'
          >
            {proyecto.nombre}
          </h1>
        </Link>
      ))}
    </div>
  )
}

export default Projects
