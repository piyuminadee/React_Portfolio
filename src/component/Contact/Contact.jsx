// Contact.jsx
import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <img 
              src={getImageUrl("contact/emailIcon.png")} 
              alt="Email icon" 
              className={styles.icon}
            />
            <div className={styles.details}>
              <h3>Email</h3>
              <a href="mailto:piyuminadeesha.22@gmail.com">piyuminadeesha.22@gmail.com</a>
            </div>
          </div>
          <div className={styles.contactItem}>
            <img 
              src={getImageUrl("contact/linkedinIcon.png")} 
              alt="LinkedIn icon" 
              className={styles.icon}
            />
            <div className={styles.details}>
              <h3>LinkedIn</h3>
              <a href="https://linkedin.com/in/piyumi-weerarathna-36ba26214" target="_blank" >
              piyumi-weerarathna
               </a>
            </div>
          </div>
        </div>
        <form 
          className={styles.form} 
          action="https://formspree.io/f/mdkaqddj" 
          method="POST"
        >
          <div className={styles.formGroup}>
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              required 
              className={styles.input}
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
              className={styles.input}
            />
          </div>
          <textarea 
            name="message" 
            rows="6" 
            placeholder="Message" 
            required 
            className={styles.textarea}
          ></textarea>
          <button type="submit" className={styles.submitBtn}>Send Message</button>
        </form>
      </div>
    </section>
  );
};