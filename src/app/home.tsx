"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { Yanone_Kaffeesatz } from "next/font/google";
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

// FONTS
const logoFont = Yanone_Kaffeesatz({ subsets: ["latin"] });

export default function Home() {
  const iconStyle = { height: "30px", width: "30px" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={styles.page}
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
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
              }}
            >
              <Image className={styles.logo} src={xLogo} alt="xLogo" />
            </motion.div>
            <motion.p
              variants={fadeUp}
              transition={{ delay: 1 }}
              className={logoFont.className}
              style={{
                letterSpacing: 0.1,
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              pixelchromatic
            </motion.p>
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
          <motion.p className={styles.button}>Subscribe Now!</motion.p>
          <p className={styles.linkText}>Learn More</p>
        </div>
        <br />
        <br />
      </div>

      <Explore />
    </motion.div>
  );
}
