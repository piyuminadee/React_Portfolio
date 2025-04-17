import React from 'react';
import styles from "./Hero.module.css";
import {getImageUrl} from '../../utils';

export const Hero = () => {
    const heroImgUrl = getImageUrl("hero","piyumi.jpg");

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Piyumi Weerarathna</h1>
                <p className={styles.description}>A <b>Data Science</b> undergraduate at the <b>University of Kelaniya</b>, driven by the art of transforming raw data into impactful stories.
                My passion lies in decoding complex datasets, crafting <b>predictive models</b> and designing visualizations that turn numbers into <b>strategic decisions</b>. Experiences in Backend and <b>machine learning</b> frameworks.
               <hr></hr> For me, data isn’t just about patterns. it’s about creating solutions that push industries forward. <hr></hr>
                </p>
                <div className={styles.btnContainer}>
                    <a className={styles.contactBtn} href='mailto:piyuminadeesha.22@mail.com'>Get in Touch</a>
                    <a 
                        className={`${styles.contactBtn} ${styles.downloadBtn}`} 
                        href="/assests/hero/PIYUMI WEERARATHNA.pdf" 
                        download
                    >
                        Download Resume
                    </a>
                </div>
            </div>
            <img className={styles.heroImg} src={heroImgUrl} alt="Piyumi Weerarathna"/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
}