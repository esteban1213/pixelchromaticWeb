// Carousel.js
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import styles from "./styles.module.css";

const Carousel = ({ items }) => {
  const controls = useAnimation();

  return (
    <div className={styles.blogCardContainer}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={styles.blogPostCard}
          animate={controls}
          custom={index}
        >
          <h1>{item.title}</h1>
          <div className={styles.separator}></div>

          <p>{item.preview}</p>

          <p className={styles.readButton}>Read</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Carousel;
