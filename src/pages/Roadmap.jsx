import React from "react";
import styles from "./Roadmap.module.css";
import {
  FaBook,
  FaListOl,
  FaCogs,
  FaChartLine,
  FaBrain,
  FaCloudUploadAlt,
  FaTools,
  FaProjectDiagram,
  FaUserTie
} from "react-icons/fa";

const steps = [
  {
    title: "Learn Python Basics",
    desc: "Start with Python syntax, variables, loops, and functions.",
    icon: <FaBook className={styles.icon} />,
    link: "https://www.learnpython.org/"
  },
  {
    title: "Learn Data Structures and Algorithms",
    desc: "Understand lists, stacks, queues, trees, and algorithms.",
    icon: <FaListOl className={styles.icon} />,
    link: "https://www.geeksforgeeks.org/data-structures/"
  },
  {
    title: "Learn Python Libraries",
    desc: "Explore NumPy, Pandas, and Matplotlib for data analysis and visualization.",
    icon: <FaCogs className={styles.icon} />,
    link: "https://www.datacamp.com/courses/intro-to-python-for-data-science"
  },
  {
    title: "Learn Machine Learning Basics",
    desc: "Study supervised and unsupervised learning concepts.",
    icon: <FaChartLine className={styles.icon} />,
    link: "https://www.coursera.org/learn/machine-learning"
  },
  {
    title: "Learn Deep Learning",
    desc: "Dive into neural networks, CNNs, and RNNs.",
    icon: <FaBrain className={styles.icon} />,
    link: "https://www.deeplearning.ai/"
  },
  {
    title: "Learn Deployment",
    desc: "Deploy models using Flask, Django, or Streamlit.",
    icon: <FaCloudUploadAlt className={styles.icon} />,
    link: "https://www.youtube.com/results?search_query=deploy+model+on+huggingface"
  },
  {
    title: "Learn Tools",
    desc: "Get comfortable with Git, Linux, SQL, and APIs.",
    icon: <FaTools className={styles.icon} />,
    link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/"
  },
  {
    title: "Work on Real Projects",
    desc: "Apply your skills on Kaggle or GitHub projects.",
    icon: <FaProjectDiagram className={styles.icon} />,
    link: "https://www.kaggle.com/"
  },
  {
    title: "Resume, Portfolio, Interview Prep",
    desc: "Prepare your resume, build a portfolio, and practice interviews.",
    icon: <FaUserTie className={styles.icon} />,
    link: "https://www.interviewbit.com/"
  }
];

export default function RoadmapPage() {
  return (
    <div className={styles.roadmapContainer}>
      <h2 className={styles.heading}>Roadmap to AI Engineer</h2>
      <ul className={styles.timeline}>
        {steps.map((step, idx) => (
          <li key={idx} className={styles.step}>
            <div className={styles.iconBox}>{step.icon}</div>
            <div className={styles.content}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
              {step.link && (
                <a href={step.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Resource
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}