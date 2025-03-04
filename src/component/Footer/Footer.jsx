// Footer.jsx
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.container} id="footer">
      <div className={styles.content}>
        <div className={styles.links}>
          <div className={styles.linkColumn}>
            <h3 className={styles.title}>Contact</h3>
            <a href="mailto:piyuminadeesha.22@gmail.com" className={styles.link}>
              piyuminadeesha.22@gmail.com
            </a>
          </div>
          <div className={styles.linkColumn}>
            <h3 className={styles.title}>Social</h3>
            <div className={styles.socialLinks}>
              <a href="https://github.com/piyuminadee" className={styles.socialLink}>
                <img
                  src={getImageUrl("contact/githubIcon.png")}
                  alt="GitHub icon"
                />
                <span>GitHub</span>
              </a>
              <a href="#" className={styles.socialLink}>
                <img
                  src={getImageUrl("contact/linkedinIcon.png")}
                  alt="LinkedIn icon"
                />
                <span>LinkedIn</span>
              </a>
              <a href="https://x.com/piyuminadeesha3" className={styles.socialLink}>
                <img
                  src={getImageUrl("contact/twitter.png")}
                  alt="Twitter icon"
                />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© 2024 Nadeesha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};