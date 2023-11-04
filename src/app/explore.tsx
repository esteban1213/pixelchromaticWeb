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
import {
  fadeUp,
  mainFadeVariant,
  swipeOut,
  slideUp,
  fadeInOut,
  scaleIn,
} from "./animations";

export default function Home() {
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
      <br />
      <motion.div
        initial={{ scale: 0.8 }} // Initial scale is set to 0
        whileInView={{ scale: 1 }} // Final scale is set to 1
        transition={{ duration: 0.3 }} // Animation duration is 0.3 seconds
        className={mainStyles.interactiveClickContainer}
      >
        <p></p>
      </motion.div>
      <p className={mainStyles.headings}>
        Experience interactive & intuitive software with every read!
      </p>
      <br />
      <br />
    </motion.main>
  );
}
