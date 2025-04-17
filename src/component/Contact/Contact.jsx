// Contact.jsx
import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Get in Touch</h2>
      <div className={styles.content}>
        <div className={styles.contactInfo}>
          {/* Contact items remain same */}
        </div>
        
        <form className={styles.form} action="https://formspree.io/f/mdkaqddj" method="POST">
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className={styles.input}
              aria-label="Your name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className={styles.input}
              aria-label="Your email"
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            required
            className={styles.textarea}
            aria-label="Your message"
          ></textarea>
          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};