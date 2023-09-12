

import Image from "next/image";
import styles from "./page.module.css"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// IMAGES
import Logo from "../../public/images/logo.png";
import Rocket from "../../public/images/buttons/rocket.png";
import LogoGray from "../../public/images/logogray.png";


//COMPONENTS
import Button from "./components/button";

export default function Contact() {

  const fadeInSlideUpVariants = {
    hidden: { opacity: 0, y: 100 }, // Initial position and opacity
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    }, // Final position and opacity
  };
  return (
    <motion.main
      className={styles.main}
      initial="hidden"
      animate="visible"
      variants={fadeInSlideUpVariants}
    >
     
    </motion.main>
  );
}
