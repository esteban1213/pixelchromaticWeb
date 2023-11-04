"use client";
import Image from "next/image";
import styles from "./page.module.css";
import mainStyles from "./letters.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  BiSearchAlt,
  BiBulb,
  BiCategoryAlt,
  BiRadioCircleMarked,
} from "react-icons/bi";

// IMAGES
import xLogo from "../../public/icons/x.png";
import hanress from "../../public/icons/statement one.png";
import vision from "../../public/icons/vision.png";
import boost from "../../public/icons/boost.png";
import bulb from "../../public/icons/bulb.png";
import rocket from "../../public/icons/rocket.png";

// ANIMATION VARIANTS
import {
  fadeUp,
  mainFadeVariant,
  swipeOut,
  slideUp,
  fadeInOut,
  scaleIn,
} from "./animations";

export default function Letters() {
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  // Function to toggle the animation
  const toggleAnimation = () => {
    setIsAnimationActive(!isAnimationActive);
  };

  const iconStyle = { height: "30px", width: "30px" };
  return (
    <motion.main
      className={mainStyles.page}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <p></p>
      <motion.div
        className={mainStyles.footer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image className={styles.logo} src={xLogo} alt="xLogo" />
        <h3 style={{ fontWeight: 200 }}>2023</h3>
      </motion.div>
    </motion.main>
  );
}
