import Carrusel from './components/Carrusel'
import Header from './components/Header'
import Information from './components/Information'
import Servicios from './components/Servicios'
import Footer from './components/Footer'

function App () {
  return (
    <div className='bg-gradient-to-b from-white via-black to-[black]'>
      <Header />
      <Carrusel />
      <Information />
      <Servicios />
      <Footer />
    </div>
  )
}

export default App
