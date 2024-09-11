import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Service from './components/services/Service'
import Mywork from './components/mywork/Mywork'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Service></Service>
      <Mywork></Mywork>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App