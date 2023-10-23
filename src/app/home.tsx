"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";
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
// COMPONENTS / PAGES
import Explore from "./explore";

// ANIMATION VARIANTS
import { fadeUp, mainFadeVariant, swipeOut } from "./animations";

export default function Home() {
  const iconStyle = { height: "30px", width: "30px" };
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={mainFadeVariant}
      className={styles.page}
      transition={{ delay: 0, duration: 0.8 }}
    >
      <div className={styles.headerContainer}>
        <p style={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
          Pixelchromatic
        </p>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          {" "}
          <Image className={styles.logo} src={xLogo} alt="xLogo" />
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <p className={styles.button}>Subscribe</p>
        </div>
      </div>
      <div className={styles.sectionDiv}>
        <p className={styles.statement}>
          A repository of intuitive software and ideas.
        </p>
        <span className={styles.subStatement}>
          Life can be pretty tough sometimes, but you know what might make it a
          bit easier? Some nifty software that can handle a lot of these hectic
          tasks.
        </span>
      </div>
      <br />
      <br />
      <Explore />
    </motion.main>
  );
}
