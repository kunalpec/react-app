import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactBox}>
      <h2 className={styles.heading}>Contact</h2>
      <p>
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/kunal-93388931b/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          kunal-93388931b
        </a>
      </p>
      <p>
        <strong>Phone:</strong> <span className={styles.phone}>9592951721</span>
      </p>
      <p className={styles.simple}>Always happy to connect!</p>
    </div>
  );
}