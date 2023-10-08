"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";


// IMAGES
import Logo from "../../public/images/logomain.png";

// ANIMATION VARIANTS
import { mainFadeVariant, swipeOut } from "./animations";

// PAGES
import Home from "./home";

export default function Index() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={mainFadeVariant}
      className={styles.main}
      transition={{ delay: 0, duration: 0.8 }}
    >
      {/* <motion.div
        className={styles.logoContainer}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.8, delay: 1.1, ease: "easeInOut" }}
        variants={swipeOut}
      >
        <Image src={Logo} alt="logo" />
      </motion.div>{" "} */}
      <Home />
    </motion.main>
  );
}
