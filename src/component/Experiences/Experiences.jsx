import React from "react";
import styles from "./Experiences.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experiences = () => {
  const skillsElement = skills.map((skill, id) => (
    <div key={id} className={styles.skillItem}>
      <img 
        src={getImageUrl(skill.imageSrc.split('/')[0],
                         skill.imageSrc.split('/')[1]   )} 
        alt={skill.title}
        className={styles.skillIcon}
      />
      <span>{skill.title}</span>
    </div>
  ));

  const historyElement = history.map((historyItem, id) => (
    <div key={id} className={styles.experienceCard}>
    <img 
        src={getImageUrl(historyItem.imageSrc.split('/')[0],
          historyItem.imageSrc.split('/')[1])} 
        alt={historyItem.title}
        className={styles.skillIcon}
      />
      <div className={styles.experienceHeader}>
        <h3>{historyItem.role}</h3>
        <p className={styles.company}>{historyItem.organisation}</p>
        <div className={styles.duration}>
          {historyItem.startDate} - {historyItem.endDate}
        </div>
      </div>
      <ul className={styles.responsibilities}>
        {historyItem.experiences.map((experience, idx) => (
          <li key={idx}>{experience}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.sectionTitle}>EXPERIENCE</h2>
      
      <div className={styles.skillsSection}>
        <h3 className={styles.subtitle}>Technical Skills</h3>
        <div className={styles.skillsGrid}>
          {skillsElement}
        </div>
      </div>

      <div className={styles.experienceSection}>
        <h3 className={styles.subtitle}>Professional Experience</h3>
        <div className={styles.experienceList}>
          {historyElement}
        </div>
      </div>
    </section>
  );
};