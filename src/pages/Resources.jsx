import React, { useEffect, useState } from "react";
import styles from "./Resources.module.css";

export default function Resources() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchedData = [
      {
        topic: "Learn Python Basics",
        video: "https://www.youtube.com/embed/v9bOWjwdTlg",
      },
      {
        topic: "Data Structures and Algorithms",
        video: "https://www.youtube.com/embed/mGJusQ7iBwc",
      },
      {
        topic: "Python Libraries (NumPy, Pandas, Matplotlib)",
        video: "https://www.youtube.com/embed/gDZ6czwuQ18",
      },
      {
        topic: "Machine Learning Basics-140",
        video:
          "https://www.youtube.com/embed/videoseries?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH",
      },
      {
        topic: "Deep Learning-84",
        video: "https://www.youtube.com/embed/2dH_qjc9mFg",
      },
      {
        topic: "NLP (Natural Language Processing)-8",
        video: "https://www.youtube.com/embed/zlUpTlaxAKI",
      },
      {
        topic: "NLP Projects-10",
        video: "https://www.youtube.com/embed/1xtrIEwY_zY",
      },
      {
        topic: "Deployment (Flask/Django, Streamlit)",
        video:
          "https://www.youtube.com/embed/videoseries?list=PLu71SKxNbfoDOf-6vAcKmazT92uLnWAgy",
      },
      {
        topic: "Tools (Git, Linux, SQL, APIs)",
        video: "https://www.youtube.com/embed/q8EevlEpQ2A",
      },
      {
        topic: "Real Projects (Kaggle, GitHub)",
        video: "https://www.youtube.com/embed/K6GSdn_iv8s",
      },
      {
        topic: "Resume, Portfolio, Interview Prep",
        video: "https://www.youtube.com/embed/Q1EeHessyaE",
      },
    ];

    setVideos(fetchedData);
    setLoading(false);
  }, []);

  return (
    <div className={styles.resourcesContainer}>
      <h2 className={styles.heading}>YouTube Videos Playlist Resources</h2>
      <div className={styles.grid}>
        {loading ? (
          <p>Loading videos...</p>
        ) : (
          videos.map((res, idx) => (
            <div key={idx} className={styles.resourceItem}>
              <h3 className={styles.topic}>{res.topic}</h3>
              <div className={styles.videoWrapper}>
                <iframe
                  src={res.video}
                  title={res.topic}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))
        )}
        <h1 className={styles.comingSoon}>Courses coming soon.....</h1>
      </div>
    </div>
  );
}
