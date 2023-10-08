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
import Logo from "../../public/images/logo.png";
import bulb from "../../public/icons/bulb.png";
import rocket from "../../public/icons/rocket.png";
import tap from "../../public/icons/tap.png";
import heart from "../../public/icons/heart.png";

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
      {" "}
      <div className={styles.headerCont}>
        <div className={styles.headerLogo}>
          <Image className={styles.logo} src={Logo} alt="logo" />
          <p style={{ padding: 0, fontWeight: 500, color: "white" }}>
            Pixelchromatic
          </p>
        </div>
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeUp}
        transition={{ delay: 1.6, duration: 0.5 }}
        className={styles.statement}
      >
        <div className={styles.statementText}>
          Boost Your Success With Unique & Intuitive Solutions!
        </div>
      </motion.div>
      <div className={styles.visionCards}>
        <div className={styles.visionCont}>
          <Image src={heart} alt={"bulb"} className={styles.icons} />
          <p className={styles.cardTitle}>What we believe in.</p>
          <p className={styles.cardDescription}>
            At Pixelchromatic, we believe in the transformative power of
            intuitive technology and digital tools that drive success. We are
            committed to creating innovative, intuitive solutions, both large
            and small, that address real-world problems and empower people and
            organizations to reach their full potential.{" "}
          </p>
        </div>
        <br />
        <div className={styles.visionCont}>
          <Image src={bulb} alt={"bulb"} className={styles.icons} />
          <p className={styles.cardTitle}>It all starts with your vision</p>
          <p className={styles.cardDescription}>
            We want to make sure we create solutions that align with your goals.
            In a world saturated by templates and tools made for the masses, you
            never get the tools that truly resonate with YOU.
          </p>
        </div>
        <br />
        <div className={styles.visionCont}>
          <Image src={rocket} alt={"rocket"} className={styles.icons} />
          <p className={styles.cardTitle}>Don't get stuck</p>
          <p className={styles.cardDescription}>
            Software is dynamic. In an ever changing world full of trends and
            innovation. You don't have to be stuck. Your solutions are always
            backed by the versatilty of custom software.
          </p>
        </div>
        <br />
        <div className={styles.visionCont}>
          <Image src={tap} alt={"tap"} className={styles.icons} />
          <p className={styles.cardTitle}>It's Intuitive</p>
          <p className={styles.cardDescription}>
            Whatever your goal, our tailored approach guarantees solutions that
            are both intuitive and scalable. Every user will find our offerings
            familiar yet prefectly unique.
          </p>
        </div>
      </div>
      <br />
      <br />
    </motion.main>
  );
}
