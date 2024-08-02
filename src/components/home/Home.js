import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './home.css'
import About from '../about/About'
import Posation from '../posation/Posation'
import New from '../new/New'
import Service from '../service/Service'

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <About />
      <Posation />
      <New />
      <Service />
      <Footer />
    </div>
  )
}
