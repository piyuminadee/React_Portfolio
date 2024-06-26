import React, {useState} from 'react';
import styles from "./Navbar.module.css";
import {getImageUrl} from '../../utils';

export const Navbar = () => {

  const imageUrl = getImageUrl("nav/menuIcon.png");
    console.log("Image URL:", imageUrl);

  return (
    <nav className={styles.navbar}>
      <a href='/' className={styles.title} title="Homepage">Portfolio</a>  
    
      <div className={styles.menu}>

      <img className={styles.menuBtn} src={imageUrl} alt="Menu Icon"/>

      <ul className={styles.menuItems}>
        <li><a href='#about'>About</a></li>
        <li><a href='#experiences'>Experiences</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      </div>
      
    </nav>
  )
}
