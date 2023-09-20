"use client"
import Image from "next/image";
import styles from "./page.module.css";




// IMAGES


//PAGES

import HomeScreen from "./homescreen";


//COMPONENTS
import Navbar from "./components/navbar"
import Footer from "./components/footer";


// PROPS



export default function Home() {

 


  
  

  

 



  return (

    
    
      <main className={styles.main}>
    
      <Navbar/>
     
      <HomeScreen />
       <Footer />
   
      
     

     
    </main>
   
    
  );
}
