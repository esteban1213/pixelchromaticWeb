"use client";
import Image from "next/image";
import styles from "./page.module.css";

import { motion } from "framer-motion";
import { Yanone_Kaffeesatz, Comfortaa } from "next/font/google";
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
import Letters from "./letters";

// ANIMATION VARIANTS
import { fadeUp, mainFadeVariant, swipeOut } from "./animations";

// FONTS
const logoFont = Yanone_Kaffeesatz({ subsets: ["latin"] });
const mainFont = Comfortaa({ subsets: ["latin"] });

const arrowVariants = {
  animate: {
    y: [0, 10, 0, 10, 0], // Bouncing effect along the y-axis
    transition: {
      repeat: 1, // Repeat the animation indefinitely
      duration: 1, // Total duration of one animation loop
      ease: "easeInOut", // You can adjust the easing function
    },
  },
};

export default function Home() {
  const iconStyle = { height: "30px", width: "30px" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`${styles.page} ${mainFont.className}`}
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
            <motion.div variants={fadeUp} transition={{ delay: 0.8 }}>
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
          <motion.p
            className={styles.statement}
            variants={fadeUp}
            transition={{ delay: 0.7 }}
          >
            Intuitive software to crush your productivity, personal image, and
            success.
          </motion.p>
          <motion.p
            variants={fadeUp}
            transition={{ delay: 0.6 }}
            className={styles.subStatement}
          >
            Intuitive software makes life easier, if there is something holding
            you back, there is a very good chance that software can boost your
            success.
          </motion.p>
        </div>
        <div className={styles.sectionDiv}>
          <motion.p
            variants={fadeUp}
            transition={{ delay: 0 }}
            className={styles.button}
            whileHover={{ scale: 1.2 }}
          >
            Join Free!
          </motion.p>
          <motion.p variants={fadeUp} transition={{ delay: 1 }}>
            Scroll to start exploring!
          </motion.p>
          <motion.div
            className="scroll-arrow"
            variants={arrowVariants}
            animate="animate"
          >
            ▼
          </motion.div>
        </div>
        <br />
        <br />
      </div>
      <br />
      <br />
      <Explore />
      <Letters />
      <motion.div
        className={styles.footer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <p style={{ fontWeight: 200, color: "black", textAlign: "center" }}>
          © 2023 Pixelchromatic®. <br /> All rights reserved.
        </p>
      </motion.div>
    </motion.div>
  );
}
