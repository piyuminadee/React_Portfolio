import React, {useState} from 'react';
import styles from "./Navbar.module.css";
import {getImageUrl} from '../../utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const openImgUrl = getImageUrl("nav/menuIcon.png");
  const closeImgUrl = getImageUrl("nav/closeIcon.png");
    console.log("Image URL:", openImgUrl);

  return (
    <nav className={styles.navbar}>
      <a href='/' className={styles.title} title="Homepage">Portfolio</a>  
    
      <div className={styles.menu}>

      <img className={styles.menuBtn} src={
        menuOpen 
        ? closeImgUrl
        :openImgUrl
        } alt="Menu Icon"
          onClick={()=>setMenuOpen(!menuOpen)}
      />

      <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}` }
      onClick={()=> setMenuOpen(false)}>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experiences</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      </div>
      
    </nav>
  )
}
