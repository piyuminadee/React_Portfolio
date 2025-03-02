import React from 'react';
import styles from "./Hero.module.css";
import {getImageUrl} from '../../utils';

export const Hero = () => {

    const heroImgUrl = getImageUrl("hero/me.png");

  return (
    <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nadeesha</h1>
            <p className={styles.description}>Computer Science undergraduate at the University of Kelaniya, specializing in Data Science</p>
            <a className={styles.contactBtn} type='button' href='mailto:piyuminadeesha.22@mail.com'>Contact Me</a>
        </div>
        <img className={styles.heroImg} src={heroImgUrl}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
