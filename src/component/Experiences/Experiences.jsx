import React from "react";
import styles from "./Experiences.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experiences = () => {
  const skillsElement = skills.map((skill, id) => {
    return (
      <div key={id} className={styles.skill}>
        <div className={styles.skillImageContainer}>
          <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
        </div>
        <p>{skill.title}</p>
      </div>
    );
  });

  const historyElement = history.map((historyItem, id) => {
    return (
      <li key={id} className={styles.historyItem}>
        <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`}/>
        <div className={styles.historyItemDetails}>
        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
        <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
        <ul>
          {historyItem.experiences.map((experience, id) => {
            return <li key={id}>{experience}</li>;
          })}
        </ul>
        </div>
      </li>
    );
  });

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>{skillsElement}</div>
        <ul className={styles.history}>{historyElement}</ul>
      </div>
    </section>
  );
};
