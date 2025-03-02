import React from 'react'
import styles from './App.module.css'
import { Navbar } from './component/Navbar/Navbar'
import { Hero } from './component/Hero/Hero'
import { About } from './component/About/About'
import { Experiences } from './component/Experiences/Experiences'
import { Projects } from './component/Projects/Projects'
import { Footer } from './component/Footer/Footer'
import { Contact } from './component/Contact/Contact'
// import { Projects } from './component/Projects/Projects'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero />
      <About />
      <Experiences/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App