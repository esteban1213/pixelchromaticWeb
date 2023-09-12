import Image from "next/image";
import styles from "./contactCard.module.css";
import { Link } from "react-router-dom";
// IMAGES
import Logo from "../../public/images/logoBig.png";
import Rocket from "../../../public/images/buttons/rocket.png";
import MenuIcon from "../../../public/images/buttons/menu.png";

export default function Contact() {






  return(
    <div className={styles.contactCardMain}>
      <Image className={styles.logo} src={Logo} alt="logo" />
      <p className={styles.name}>Esteban Aguirre</p>
    </div>
  )
  
}
