

import styles from "./page.module.css"
import { motion } from "framer-motion";



// ELEMENTS


// ANIMATINO VARIATNS
const fadeInSlideUpVariants = {
  hidden: { opacity: 0, y: 100 }, // Initial position and opacity
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }, // Final position and opacity
};

export default function Explore() {
 
  

 

  return (
    <motion.main
      className={styles.main}
      initial="hidden"
      animate="visible"
      variants={fadeInSlideUpVariants}
    >
      
      
     
  
    </motion.main>
  );
}
