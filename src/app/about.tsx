"use client"; // This is a client component 👈🏽

import Image from "next/image";
import styles from "./page.module.css"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// IMAGES
import Logo from "../../public/images/logo.png";
import Rocket from "../../public/images/buttons/rocket.png";
import LogoGray from "../../public/images/logogray.png";


//COMPONENTS
import Button from "./components/button";


// ANIMATINO VARIATNS
const fadeInSlideUpVariants = {
  hidden: { opacity: 0, y: 100 }, // Initial position and opacity
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }, // Final position and opacity
};

export default function About() {


  const statement =
    "At Pixelchromatic, we're all about blending eye-catching designs with unforgettable user experiences. We love taking things step by step, focusing on what you, your brand, or your customers need. Whether it's taking your online presence to the next level or creating useful tools for your life or business, we're here to bring your ideas to life. We are your go-to problem solvers. From creating systems that help you run your business smoothly to crafting a captivating online presence, or even crafting custom experiences for your personal brand, events, or home, we've got your back. Let's make your digital world awesome, together with software and design!"
    const teamStatement ="As the proud founder of Pixelchromatic, I'm thrilled to share our journey with you. For over a decade, my passion for solving problems has been intricately woven with the power of software and the artistry of remarkable design. Through countless endeavors, I've witnessed firsthand how this dynamic combination can transform challenges into opportunities and turn ideas into captivating realities. Each day, I draw from this wealth of experience to lead a team that is equally dedicated to crafting digital solutions that resonate, inspire, and drive meaningful impact. It's been an incredible journey, and I'm excited to continue pushing boundaries, crafting innovative experiences, and delivering results that exceed expectations."

 

  return (
    <motion.main
      className={styles.main}
      initial="hidden"
      animate="visible"
      variants={fadeInSlideUpVariants}
    >
     <p className={styles.heading}>
sad
     </p>
  
    </motion.main>
  );
}
