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
        <Image className={styles.logo} src={xLogo} alt="xLogo" />
        <p>Pixelchromatic</p>
      </div>
      <div className={styles.sectionContainer}>
        <Image className={styles.statements} src={hanress} alt="statement" />
      </div>
      <div className={styles.sectionContainer}>
        <Image className={styles.statements} src={vision} alt="statement" />
      </div>
      <div className={styles.sectionContainer}>
        <Image className={styles.statements} src={boost} alt="statement" />
      </div>
    </motion.main>
  );
}
