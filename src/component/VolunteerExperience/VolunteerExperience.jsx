// VolunteerExperience.jsx
import React from 'react';
import styles from "./VolunteerExperience.module.css";
import { getImageUrl } from "../../utils";

export const VolunteerExperience = () => {
  return (
    <section className={styles.container} id="volunteer">
      <h2 className={styles.title}>Volunteer Experience</h2>
      
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h3 className={styles.projectTitle}>
            Best Technical Enhancement Project Winner - Cybershield
          </h3>
          <p className={styles.organization}>
            LEO Club, University of Kelaniya
          </p>
          <p className={styles.description}>
            Spearheaded a technical innovation project focused on cybersecurity awareness on digital safety practices through gamified learning modules.
          </p>
          <div className={styles.achievements}>
            <span className={styles.awardBadge}>🏆 Best Technical Project</span>
            <span className={styles.duration}>2023</span>
          </div>
        </div>

        <div className={styles.photoContainer}>
          <img 
            src={getImageUrl("volunteer","grp.jpg")}
            alt="Cybershield Project Team"
            className={styles.projectPhoto}
          />
          <div className={styles.photoOverlay}>
            <p>Cybershield Project Team 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};