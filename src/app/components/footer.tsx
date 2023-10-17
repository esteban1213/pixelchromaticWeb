"use client";
import Image from "next/image";
import styles from "../page.module.css";
import { motion } from "framer-motion";
import {
  BiSearchAlt,
  BiBulb,
  BiCategoryAlt,
  BiRadioCircleMarked,
} from "react-icons/bi";

// IMAGES
import xLogo from "../../../public/icons/xLogoWhite.png";

export default function footer() {
  const iconStyle = { height: "30px", width: "30px" };
  return (
    <div className={styles.footer}>
      <Image src={xLogo} alt="xLogo" className={styles.logo} />
    </div>
  );
}
