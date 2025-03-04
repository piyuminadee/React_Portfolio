import React from "react";
import { useState } from 'react';

import styles from "./ProjectCard.module.css";
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';

import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project }) => {
  const [showVideo, setShowVideo] = useState(false);
  const { title, imageSrc, description, skills, video, source } = project;
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {video ? (
          <button 
            className={styles.linkButton}
            onClick={() => setShowVideo(true)}
          >
            Watch Demo
          </button>
        ) : (
          <span className={styles.comingSoon}>Demo Coming Soon</span>
        )}
        
        <a 
          href={source} 
          className={styles.link}
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Code
        </a>

        {showVideo && (
        <div className={styles.videoModalOverlay}>
          <div className={styles.videoModal}>
            <VideoPlayer source={video} />
            <button 
              className={styles.closeButton}
              onClick={() => setShowVideo(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};