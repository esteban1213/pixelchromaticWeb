"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";

// IMAGES
import Logo from "../../public/images/logomain.png";

// ANIMATION VARIANTS
import { mainFadeVariant, swipeOut } from "./animations";

export default function NAME() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={mainFadeVariant}
      className={styles.page}
      transition={{ delay: 0, duration: 0.8 }}
    ></motion.main>
  );
}
