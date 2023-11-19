"use client";
import Image from "next/image";
import styles from "./page.module.css";
import mainStyles from "./letters.module.css";
import exploreStyles from "./explore.module.css";
import { motion, transform } from "framer-motion";
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
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className={exploreStyles.letterBox}>
        <Image className={styles.logo} src={xLogo} alt="xLogo" />
        <motion.p className={exploreStyles.headings}>
          "Thank your for checking out the blog! We hope that you found some of
          these tools valuable. Click the button below to subscribe!" <br />{" "}
          <span
            style={{
              textAlign: "right",
              fontSize: "1.5rem",
              marginBottom: "0px",
            }}
          ></span>
        </motion.p>
        <br />
        <motion.p
          variants={fadeUp}
          transition={{ delay: 0 }}
          className={styles.button}
          whileHover={{ scale: 1.2 }}
        >
          Subscribe
        </motion.p>
        <motion.p
          variants={fadeUp}
          transition={{ delay: 1 }}
          className={styles.linkText}
        >
          Back to top
        </motion.p>
      </div>

      {/* <motion.div
        className={mainStyles.footer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image className={styles.logo} src={xLogo} alt="xLogo" />
        <h3 style={{ fontWeight: 200, color: "black" }}>
          Intuitive, Simple, Powerful
        </h3>
      </motion.div> */}
    </motion.main>
  );
}
