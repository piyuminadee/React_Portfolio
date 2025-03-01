import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Frontend icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3> {/* Changed to Full Stack */}
              <p>
                Building responsive web applications with modern frameworks,
                optimizing both client-side and server-side performance
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="AI icon" /> {/* New icon */}
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Engineer</h3> {/* New title */}
              <p>
                Developing intelligent solutions using Python, TensorFlow/PyTorch,
                and deploying ML models for real-world applications
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Backend icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Architect</h3> {/* Enhanced title */}
              <p>
                Designing scalable REST APIs and microservices with focus on
                security and high-performance computing
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UX Engineer</h3> {/* Enhanced title */}
              <p>
                Creating user-centered designs with prototyping tools and
                maintaining design systems for consistency
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
