import React from 'react'
import styles from './App.module.css'
import { Navbar } from './component/Navbar/Navbar'
import { Hero } from './component/Hero/Hero'
import { About } from './component/About/About'
import { Experiences } from './component/Experiences/Experiences'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero />
      <About />
      <Experiences/>
    </div>
  )
}

export default App