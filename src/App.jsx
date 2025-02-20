import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Menu from './components/Menu/Menu'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden bg-white2 text-dark'>
      <div className='relative overflow-hidden'>
      <Navbar />
      <Hero />
      </div>
      <Menu />
      <Banner />
      <Footer />
    </div>
  )
}

export default App