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
import card from "../../public/icons/card.png";

//COMPONENTS
import Carousel from "./components/carousel";

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

  const carouselItems = [
    {
      name: "",
      id: "",
      title: "Welcome Letter",
      preview:
        "This is a preview of the welcome letter The quick brown fox jumps over the lazy dog!",
    },
    {
      name: "",
      id: "",
      title: "How Software Can Boost Your Success",
      preview:
        "This is a preview of the welcome letter The quick brown fox jumps over the lazy dog!",
    },
    {
      name: "",
      id: "",
      title: "Creating Your Digital Card",
      preview:
        "This is a preview of the welcome letter The quick brown fox jumps over the lazy dog!",
    },

    // Add more items as needed
  ];

  return (
    <motion.main
      className={mainStyles.page}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <br />

      <motion.p variants={fadeUp} className={mainStyles.headings}>
        Read the latest!
      </motion.p>
      <br />
      <Carousel items={carouselItems} />

      <br />
      <h1 style={{ textAlign: "center" }}>
        Get access to all the blogs and tools!
      </h1>
      <p className={mainStyles.button}>Join</p>
    </motion.main>
  );
}
