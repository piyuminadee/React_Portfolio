import React from 'react';
import styles from "./Hero.module.css";
import {getImageUrl} from '../../utils';

export const Hero = () => {

    const heroImgUrl = getImageUrl("hero/me.png");

  return (
    <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Piyumi</h1>
            <p className={styles.description}>A Data Science undergraduate at the University of Kelaniya, driven by the art of transforming raw data into impactful stories. My passion lies in decoding complex datasets, crafting predictive models, and designing visualizations that turn numbers into strategic decisions. Proficient in Python, SQL, and machine learning frameworks, I thrive on solving real-world challenges—from optimizing business processes to predicting trends. For me, data isn’t just about patterns; it’s about creating solutions that push industries forward. Let’s build smarter systems, one algorithm at a time.</p>
            <a className={styles.contactBtn} type='button' href='mailto:piyuminadeesha.22@mail.com'>Contact Me</a>
        </div>
        <img className={styles.heroImg} src={heroImgUrl}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
