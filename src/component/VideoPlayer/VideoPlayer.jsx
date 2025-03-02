import React from 'react';
import styles from './VideoPlayer.module.css';

export const VideoPlayer = ({ source }) => {
  const isExternal = source.startsWith('http');
  
  return (
    <div className={styles.container}>
      {isExternal ? (
        // YouTube/Vimeo Embed
        <iframe
          className={styles.video}
          src={`https://www.youtube.com/embed/${source.split('/').pop()}`}
          title="Project Demo"
          allowFullScreen
        />
      ) : (
        // Local Video File
        <video className={styles.video} controls>
          <source src={source} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};