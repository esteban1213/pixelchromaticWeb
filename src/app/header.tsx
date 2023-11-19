"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";

// IMAGES
import Logo from "../../public/images/logo.png";

// ANIMATION VARIANTS
import { mainFadeVariant, swipeOut, fadeUp } from "./animations";



export default function Header() {
  return (
    <main className={styles.headerMain}>
      <Image className={styles.logo} src={Logo} alt="logo" />
    </main>
  );
}
