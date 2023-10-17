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
      <div className={styles.sectionContainerMain}>
        <Image className={styles.statements} src={hanress} alt="statement" />
        <div className={styles.quickLinksContainer}></div>
      </div>
      <div className={styles.sectionContainerMain}>
        <Image className={styles.statements} src={vision} alt="statement" />
        <div className={styles.visionInfo}>
          <Image className={styles.icon} src={bulb} alt="bulb" />
          <p>
            Here at Pixelchromatic, we understand that every idea is unique.
            Every solution we make for you goes hand in hand with your goals.{" "}
          </p>
        </div>
      </div>
      <div className={styles.sectionContainerMain}>
        <Image className={styles.statements} src={boost} alt="statement" />
        <div className={styles.visionInfo}>
          {/* <Image className={styles.icon} src={rocket} alt="bulb" />
          <p> </p> */}
        </div>
      </div>
    </motion.main>
  );
}
