// Publications.jsx
import React from 'react';
import styles from "./Publications.module.css";
import { getImageUrl } from "../../utils";

export const Publications = () => {
  const researchUrl = getImageUrl("publication", "paper.pdf");
  const viewchUrl = getImageUrl("publication", "view.png");
    
  const publications = {
    research: {
      title: "A Review of Natural Language Processing Tools for Sinhala Language",
      authors: "Piyumi Weerarathna, et al.",
      conference: "International Conference on Machine Learning (ICML-2023)",
      summary: "Comprehensive analysis of existing NLP tools and resources for Sinhala language processing, identifying key challenges and proposing future directions.",
      links: {
        researchGate: "https://www.researchgate.net/publication/388281269_A_Review_of_Natural_Language_Processing_Tools_for_Sinhala_Language",
        pdf: "/publications/sinhala-nlp-review.pdf"
      },
      badges: ["NLP", "ML", "Linguistics", "AI Research"]
    },
    articles: [
      {
        title: "Building Multilingual NLP Pipelines: Challenges and Solutions",
        medium: "https://medium.com/...",
        date: "March 2024",
        excerpt: "Exploring practical approaches to developing NLP systems for low-resource languages...",
        readTime: ""
      },
      {
        title: "Data Augmentation Techniques for Sinhala Text Processing",
        medium: "https://medium.com/...",
        date: "January 2024",
        excerpt: "Implementing effective data augmentation strategies for Sinhala NLP models...",
        readTime: ""
      }
    ]
  };

  return (
    <section className={styles.container} id="publications">
      <h2 className={styles.sectionTitle}>RESEARCH & PUBLICATIONS</h2>
      
      <div className={styles.researchCard}>
        <div className={styles.badgeContainer}>
          {publications.research.badges.map((badge, index) => (
            <span key={index} className={styles.researchBadge}>{badge}</span>
          ))}
        </div>
        <h3 className={styles.researchTitle}>{publications.research.title}</h3>
        <div className={styles.metaInfo}>
          <span className={styles.authors}>{publications.research.authors}</span>
          <span className={styles.conference}>{publications.research.conference}</span>
        </div>
        <p className={styles.abstract}>{publications.research.summary}</p>
        <div className={styles.ctaContainer}>
          <a 
            href={publications.research.links.researchGate} 
            className={styles.primaryCta}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={viewchUrl} 
              alt="ResearchGate" 
              className={styles.icon}
            />
            View on ResearchGate
          </a>
          <a 
            href={getImageUrl(researchUrl)} 
            className={styles.secondaryCta}
            download
          >
            <img 
              src={getImageUrl("publication","pdf.png")} 
              alt="PDF" 
              className={styles.icon}
            />
            Download PDF
          </a>
        </div>
      </div>

      <h3 className={styles.articlesTitle}>Featured Articles</h3>
      <div className={styles.articlesGrid}>
        {publications.articles.map((article, index) => (
          <article key={index} className={styles.articleCard}>
            <div className={styles.articleHeader}>
              <img
                src={getImageUrl("publications/medium-icon.png")}
                alt="Medium"
                className={styles.platformIcon}
              />
              <div className={styles.articleMeta}>
                <span className={styles.publishDate}>{article.date}</span>
                <span className={styles.readTime}>{article.readTime}</span>
              </div>
            </div>
            <h4 className={styles.articleTitle}>{article.title}</h4>
            <p className={styles.articleExcerpt}>{article.excerpt}</p>
            <a 
              href={article.medium} 
              className={styles.articleLink}
              target="_blank" 
              rel="noopener noreferrer"
            >
              Read on Medium →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};