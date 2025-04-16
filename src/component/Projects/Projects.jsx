// Projects.jsx
import React from "react";
import styles from "./Project.module.css";
import projects from "../../data/project.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>Turning ideas into interactive realities</p>
      </div>
      <div className={styles.projectsGrid}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};