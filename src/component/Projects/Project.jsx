import React, { useState } from "react";
import styles from "./Project.module.css";
import { getImageUrl } from "../../utils";
import projects from "../../data/project.json";


export const Project = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div>
        {projects.map((project, id) => {
          return (
            <div key={id}>
              <img src={getImageUrl(project.imageSrc)} alt={`image of ${project.title}`} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.skills.map((skill, id) => {
                  <li key={id}>{skill}</li>;
                })}
              </ul>
              <div>
              <a href={project.demo}>Demo</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
