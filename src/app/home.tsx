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
      <div className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          <div style={{ flex: 1 }}></div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <Image className={styles.logo} src={xLogo} alt="xLogo" />
            <p
              style={{
                letterSpacing: 0.1,
                fontSize: "1.2rem",
                fontWeight: "200",
              }}
            >
              PIXELCHROMATIC
            </p>
          </div>
          <div
            style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
          ></div>
        </div>
        <div className={styles.sectionDiv}>
          <p className={styles.statement}>
            A blog that tackles real problems with software.
          </p>
          <span className={styles.subStatement}>
            Intuitive software makes life easier, if there is something holding
            you back, there is a very good chance that software can boost your
            success.
          </span>
        </div>
        <div className={styles.sectionDiv}>
          <p className={styles.button}>Subscribe Now!</p>
          <p className={styles.linkText}>Learn More</p>
        </div>
        <br />
        <br />
      </div>

      <Explore />
    </motion.main>
  );
}
