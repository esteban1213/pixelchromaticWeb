"use client"; // This is a client component 👈🏽

import Image, { StaticImageData } from "next/image";
import styles from "./components.module.css";
import { Link } from "react-router-dom";

type ButtonProps = {
  name: string;
  link: string;
  image: StaticImageData; // Assuming the 'image' prop is a string representing the image URL
};

export default function Button({ name, link, image }: ButtonProps) {
  const design = "minimal";

  return (
    <Link
      to={link}
      className={`${styles.button} ${
            design === "minimal"
          ? styles.buttonMinimal
          : design === "material"
          ? styles.buttonMaterial
          : null
      }`}
      style={{ textDecoration: "none" }}
    >
      <Image
        src={image}
        alt={`${name} Image`}
        width={50}
        height={50}
        className={styles.buttonImage}
      />
      <p className={styles.buttonText}>{name}</p>
    </Link>
  );
}
