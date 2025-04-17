// Footer.jsx
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.container} id="footer">
      <div className={styles.content}>
        <div className={styles.socialLinks}>
          <a 
            href="https://github.com/piyuminadee" 
            className={styles.socialLink}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={getImageUrl("contact", "git.png")} alt="GitHub" />
          </a>
          <a 
            href="#" 
            className={styles.socialLink}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={getImageUrl("contact", "link.png")} alt="LinkedIn" />
          </a>
          <a 
            href="https://x.com/piyuminadeesha3" 
            className={styles.socialLink}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={getImageUrl("contact", "twitter-.png")} alt="Twitter" />
          </a>
        </div>
        
        <div className={styles.contact}>
          <a href="mailto:piyuminadeesha.22@gmail.com" className={styles.email}>
            piyuminadeesha.22@gmail.com
          </a>
        </div>
        
        <div className={styles.copyright}>
          © 2025 Piyumi Weerarathna. All rights reserved.
        </div>
      </div>
    </footer>
  );
};