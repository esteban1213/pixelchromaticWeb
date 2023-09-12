"use client"; // This is a client component 👈🏽

import Image, { StaticImageData } from "next/image";
import styles from "./components.module.css";
import { Link, useLocation } from "react-router-dom";

type ButtonProps = {
  name: string;
  link: string;
};

export default function Button({ name, link }: ButtonProps) {
  const design = "minimal";

  const location = useLocation()
  const currentPage = location.pathname
 

  return (
    <Link
      to={link}
     style={currentPage === link ? {backgroundColor:"black",color:"white", textDecoration:"none"} : {textDecoration:"none", color:"black"}}
      className={`${styles.button} ${
            design === "minimal"
          ? styles.buttonMinimal
          : design === "material"
          ? styles.buttonMaterial
          : null
      }`}
     
    >
      <p className={styles.buttonText}>{name}</p>
    </Link>
  );
}
