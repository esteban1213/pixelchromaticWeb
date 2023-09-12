

import Image from "next/image";
import styles from "./page.module.css"

// IMAGES


import {easeIn, easeInOut, easeOut, motion} from "framer-motion"

//COMPONENTS
import Button from "./components/button";
import Menu from "./empty";



export default function Home() {



  const fadeInSlideUpVariants = {
    hidden: { opacity: 0, y: 100 }, // Initial position and opacity
  
    visible: { opacity: 1, y: 0, transition: { duration: .5, ease: "easeOut" } }, // Final position and opacity
  };
  

  return (
    <motion.main 
      className={styles.home} 
      initial="hidden"
      animate="visible"
      variants={fadeInSlideUpVariants}  
    >
      <p className={styles.statementText}>Boost Your Success with <span style={{color:"#C474FF"}}>Unique</span> & <span style={{color:"#6CC1FF"}}>Intuitive</span> Solutions</p>
      
       
        
   
    
    </motion.main>
  );
}

