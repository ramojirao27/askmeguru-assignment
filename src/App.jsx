import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Hero from './components/Hero'
import Achievements from './components/Achievements'
import SlideImage from './components/SlideImage'
import Clients from './components/Clients'
import Footer from './components/Footer'

const App = () => {
  return (
    <div >
      <Navbar/>
      <Banner />
      <Hero/>
      <Achievements/>
      <Clients/>
      <Footer />
    </div>
  )
}

export default App