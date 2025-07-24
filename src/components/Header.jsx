import React from "react";
import styles from "./Header.module.css";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Python logo SVG */}
        <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#306998"/>
          <path d="M24 10c-3.3 0-6 2.7-6 6v2h12v-2c0-3.3-2.7-6-6-6zm-6 8h-4c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4h4v-4h-4v-4h4v-4zm6 12c3.3 0 6-2.7 6-6v-2H18v2c0 3.3 2.7 6 6 6zm6-8h4c2.2 0 4-1.8 4-4v-4c0-2.2-1.8-4-4-4h-4v4h4v4h-4v4z" fill="#FFD43B"/>
        </svg>
        <span>
          Python to <span className={styles.highlight}>AI Engineer</span> Roadmap
        </span>
      </div>
      {/* // ...existing imports... */}
      <nav className={styles.nav}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/roadmap"}>Roadmap</NavLink>
        <NavLink to={"/resources"}>Resources</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
    </header>
  );
}