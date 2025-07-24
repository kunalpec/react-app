import React from "react";
import styles from "./Home.module.css";
import NavLink from "../components/NavLink";
export default function Home() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            <span className={styles.highlight}>Python</span> to <span className={styles.highlightBlue}>AI Engineer</span> Roadmap
          </h1>
          <p className={styles.heroSubtitle}>
            Start your journey from Python basics to advanced AI engineering.<br />
            Follow a clear, modern roadmap and build real-world skills.
          </p>
          <NavLink to={"/resources"} className={styles.ctaBtn}>Get Started</NavLink>
        </div>
        <div className={styles.heroImageBox}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
            alt="Python Logo"
            className={styles.heroImage}
          />
        </div>
      </div>
      <div className={styles.featuresRow}>
        <div className={styles.featureCard}>
          <h2>Step-by-Step Learning</h2>
          <p>Follow a structured path from Python basics to AI, ML, and deep learning.</p>
        </div>
        <div className={styles.featureCard}>
          <h2>Modern Tools</h2>
          <p>Work with the latest libraries: NumPy, Pandas, scikit-learn, TensorFlow, PyTorch, and more.</p>
        </div>
        <div className={styles.featureCard}>
          <h2>Real Projects</h2>
          <p>Build hands-on projects and a portfolio to showcase your AI skills to employers.</p>
        </div>
      </div>
    </section>
  );
}