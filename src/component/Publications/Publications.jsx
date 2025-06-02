// Publications.jsx
import React from 'react';
import styles from "./Publications.module.css";
import { getImageUrl } from "../../utils";

export const Publications = () => {
  const researchPapers = [
    {
      title: "A Review of Natural Language Processing Tools for Sinhala Language",
      authors: "Piyumi Weerarathna, et al.",
      conference: "International Conference on Computational Linguistics, 2023",
      summary: "Comprehensive analysis of existing NLP tools and resources for Sinhala language processing, identifying key challenges and proposing future directions.",
      links: {
        researchGate: "https://www.researchgate.net/publication/388281269_A_Review_of_Natural_Language_Processing_Tools_for_Sinhala_Language",
        pdf: "/publications/sinhala-nlp-review.pdf"
      },
      badges: ["NLP", "ML", "Linguistics", "AI Research"]
    },
    {
      title: "Applying Machine Learning to Agriculture in Sri Lanka: Challenges and Outcomes",
      authors: "Piyumi Weerarathna",
      
      summary: "Explores ML applications in Sri Lankan agriculture with case studies on crop disease detection, yield prediction, and resource optimization. Includes implementation of CNN for potato disease classification.",
      links: {
        researchGate: "https://www.researchgate.net/publication/392032815_Applying_Machine_Learning_to_Agriculture_Review_for_Challenges_and_Outcome",
        pdf: "/publications/agriculture-ml-sri-lanka.pdf"
      },
      badges: ["Machine Learning", "Agriculture", "CNN", "Sri Lanka"]
    }
  ];

  const articles = [
    {
      title: "Building Multilingual NLP Pipelines: Challenges and Solutions",
      medium: "https://medium.com/...",
      date: "March 2024",
      excerpt: "Exploring practical approaches to developing NLP systems for low-resource languages...",
      readTime: "5 min read"
    },
    {
      title: "Data Augmentation Techniques for Sinhala Text Processing",
      medium: "https://medium.com/...",
      date: "January 2024",
      excerpt: "Implementing effective data augmentation strategies for Sinhala NLP models...",
      readTime: "4 min read"
    }
  ];

  return (
    <section className={styles.container} id="publications">
      <h2 className={styles.sectionTitle}>RESEARCH & PUBLICATIONS</h2>
      
      <div className={styles.researchGrid}>
        {researchPapers.map((paper, index) => (
          <div key={index} className={styles.researchCard}>
            <div className={styles.badgeContainer}>
              {paper.badges.map((badge, idx) => (
                <span key={idx} className={styles.researchBadge}>{badge}</span>
              ))}
            </div>
            <h3 className={styles.researchTitle}>{paper.title}</h3>
            <div className={styles.metaInfo}>
              <span className={styles.authors}>{paper.authors}</span>
              <span className={styles.conference}>{paper.conference}</span>
            </div>
            <p className={styles.abstract}>{paper.summary}</p>
            <div className={styles.ctaContainer}>
              <a 
                href={paper.links.researchGate} 
                className={styles.primaryCta}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src={getImageUrl("publication", "view.png")} 
                  alt="ResearchGate" 
                  className={styles.icon}
                />
                View on ResearchGate
              </a>
              <a 
                href={getImageUrl(paper.links.pdf)} 
                className={styles.secondaryCta}
                download
              >
                <img 
                  src={getImageUrl("publication", "pdf.png")} 
                  alt="PDF" 
                  className={styles.icon}
                />
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>

      <h3 className={styles.articlesTitle}>Featured Articles</h3>
      <div className={styles.articlesGrid}>
        {articles.map((article, index) => (
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