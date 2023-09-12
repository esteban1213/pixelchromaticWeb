

import Image from "next/image";
import styles from "./page.module.css";

import { Routes, Route, } from "react-router-dom";



// IMAGES


//PAGES

import HomeScreen from "./homescreen";
import About from "./about"
import Contact from "./contact"
import Explore from "./explore";
import ContactCard from "./contactCard"

//COMPONENTS
import Navbar from "./components/navbar"
import Footer from "./components/footer";


// PROPS



export default function Home() {

 


  
  

  

 



  return (

    
    
      <main className={styles.main}>
    
      <Navbar/>
     
      <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/explore" element={<Explore/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
      </Routes>
       <Footer />
   
      
     

     
    </main>
   
    
  );
}
