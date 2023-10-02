"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";

// IMAGES
import Logo from "../../public/images/logo.png";

// ANIMATION VARIANTS
import { fadeUp, mainFadeVariant, swipeOut } from "./animations";

export default function Home() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={mainFadeVariant}
      className={styles.page}
      transition={{ delay: 0, duration: 0.8 }}
    >
      {" "}
      <Image className={styles.logo} src={Logo} alt="logo" />
      <motion.p
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeUp}
        transition={{ delay: 1.6, duration: 0.5 }}
        className={styles.statement}
      >
        Boost Your Success With Unique & Intuitive Solutions!
      </motion.p>
      <h1> </h1>
    </motion.main>
  );
}
