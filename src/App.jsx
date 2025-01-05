import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Activity from './components/Activity/Activity'
import Footer from './components/Footer/Footer'
import Trust from './components/Trust/Trust'
import Faq from './components/Faq/Faq'
import Services from './components/services/Services'
import Why from './components/Why/Why'
import Solutions from './components/Solutions/Solutions'
import PhoneNav from './components/PhoneNav/PhoneNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <NavBar />
      <Header></Header>
      <Activity></Activity>
      <Services></Services>
      <Solutions></Solutions>
      <Why></Why>
      <Trust></Trust>
      <Faq></Faq>
      <Footer></Footer>
      <PhoneNav></PhoneNav>
    </div>
  )
}

export default App
