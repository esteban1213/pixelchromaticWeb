"use client"; // This is a client component 👈🏽

import Image from "next/image";
import styles from "../page.module.css";

// IMAGES
import Logo from "../../../public/images/logo.png"
import LogoMain from "../../../public/images/logomain.png"
import Rocket from "../../../public/images/buttons/rocket.png"

//COMPONENTS
import Button from "../components/button"





//PROPS


export default function Menu() {






  return(
    <div className={styles.header}>
      <div className={styles.headerContent}>

      
      <Image  src={LogoMain} alt="logoMain" className={styles.mainLogoStyle} />
      
     <div className={styles.navigationLinks}>
      
      {/* <Link className={location === "/" ? styles.linkTextActive : styles.linkText} to={"/"} >Home</Link>
      <Link className={location === "/about" ? styles.linkTextActive : styles.linkText} to={"/about"} >About</Link>
      <Link className={location === "/explore" ? styles.linkTextActive : styles.linkText}to={"/explore"} >Explore</Link> */}
      
     </div>
      <p className={styles.thinText}>Pixelchromatic</p>
      </div>

    </div>
  )
  
}
