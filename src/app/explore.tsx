"use client";
import Image from "next/image";
import styles from "./page.module.css";
import mainStyles from "./explore.module.css";
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
import { fadeUp, mainFadeVariant, swipeOut, slideUp } from "./animations";

export default function Home() {
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  // Function to toggle the animation
  const toggleAnimation = () => {
    setIsAnimationActive(!isAnimationActive);
  };

  const iconStyle = { height: "30px", width: "30px" };
  return (
    <motion.main
      initial="initial"
      animate={isAnimationActive ? "animate" : "initial"}
      exit="exit"
      variants={slideUp} // Use your defined animation variants here
      className={mainStyles.page}
      transition={{ delay: 0, duration: 0.3, ease: "easeInOut" }}
    >
      {" "}
      <div>
        <p onClick={toggleAnimation} className={styles.button}>
          {isAnimationActive ? "Close" : "Explore Now!"}
        </p>
      </div>
    </motion.main>
  );
}
