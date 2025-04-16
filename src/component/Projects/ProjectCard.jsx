// ProjectCard.jsx
import React, { useState } from 'react';
import styles from "./ProjectCard.module.css";
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project }) => {
  const [showVideo, setShowVideo] = useState(false);
  const { title, imageSrc, description, skills, video, source } = project;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className={styles.image}
          />
          <div className={styles.overlay}>
            {video ? (
              <button 
                className={styles.playButton}
                onClick={() => setShowVideo(true)}
              >
                ▶ Play Demo
              </button>
            ) : (
              <span className={styles.comingSoon}>Demo Coming Soon</span>
            )}
          </div>
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          
          <div className={styles.skills}>
            {skills.map((skill, id) => (
              <span key={id} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>

          <div className={styles.links}>
            <a 
              href={source} 
              className={styles.sourceLink}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg className={styles.linkIcon} viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.226 16.891c-.533 1.24-1.449 2.046-2.385 2.376l-.061.02-.061-.02c-1.469-.501-2.773-1.908-2.774-3.904v-4.292h3.302v-2.083h-3.302v-2.708h-2.147c-.094 0-.188.045-.188.149v9.083c0 3.114 2.383 5.322 5.694 5.322 1.947 0 3.506-1.08 4.001-2.201l-1.286-.766zm-2.226-7.891l3.302 2.708h-3.302v-2.708z"/>
              </svg>
              Source Code
            </a>
          </div>
        </div>
      </div>

      {showVideo && (
        <div className={styles.videoModalOverlay}>
          <div className={styles.videoModal}>
            <VideoPlayer source={video} />
            <button 
              className={styles.closeButton}
              onClick={() => setShowVideo(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};