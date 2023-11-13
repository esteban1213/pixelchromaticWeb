import React from "react";
import styles from "./styles.module.css";

export default function HomeCard() {
  return (
    <div className={styles.newsCard}>
      <p className={styles.newspaperTitle}>
        The Interactive Software Newsletter
      </p>
      <div className={styles.blackBar}></div>
    </div>
  );
}
