import React from 'react'
import styles from './App.module.css'
import { Navbar } from './component/Navbar/Navbar'
import { Hero } from './component/Hero/Hero'
import { About } from './component/About/About'
import { Experiences } from './component/Experiences/Experiences'
import { Project } from './component/Projects/Project'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero />
      <About />
      <Experiences/>
      <Project />
    </div>
  )
}

export default App