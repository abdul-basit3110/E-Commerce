import React from 'react'
import NavBar from '../Components/NavBar'
import Header from '../Components/Header'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Testimonials from '../Components/Testimonials'
import Contact from '../Components/Contact'

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Projects/>
      <Testimonials/>
      <Contact />
    </div>
  )
}

export default App
