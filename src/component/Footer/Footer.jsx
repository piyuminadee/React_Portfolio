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
            <a href="mailto:your@email.com" className={styles.link}>
              your@email.com
            </a>
          </div>
          <div className={styles.linkColumn}>
            <h3 className={styles.title}>Social</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <img
                  src={getImageUrl("Contact/githubIcon.png")}
                  alt="GitHub icon"
                />
                <span>GitHub</span>
              </a>
              <a href="#" className={styles.socialLink}>
                <img
                  src={getImageUrl("Contact/linkedinIcon.png")}
                  alt="LinkedIn icon"
                />
                <span>LinkedIn</span>
              </a>
              <a href="#" className={styles.socialLink}>
                <img
                  src={getImageUrl("Contact/twitter.png")}
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