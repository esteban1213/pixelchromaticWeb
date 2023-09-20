import Image from "next/image";
import styles from "./contactCard.module.css";
// IMAGES
import Logo from "../../public/images/logoBig.png";


export default function Contact() {






  return(
    <div className={styles.contactCardMain}>
      <Image className={styles.logo} src={Logo} alt="logo" />
      <p className={styles.name}>Esteban Aguirre</p>
    </div>
  )
  
}
