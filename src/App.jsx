import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import ProjectsDetails from './components/ProjectsDetails'
// React Router Dom
import { Route, Routes } from 'react-router-dom'

function App () {
  return (
    <div className='bg-gradient-to-b from-white via-black to-[black]'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectsDetails />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
