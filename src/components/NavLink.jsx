import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavLink.module.css";

export default function NavLink({ to, children, className }) {
  return (
    <Link to={to} className={`${styles.link} ${className || ""}`}>
      {children}
    </Link>
  );
}