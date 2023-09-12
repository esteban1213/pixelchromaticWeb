"use client"; // This is a client component 👈🏽

import Image from "next/image";
import styles from "./page.module.css";
import useWindowDimensions from "./Dimensions";
import { Routes, Route, } from "react-router-dom";



import { useState, useEffect } from "react";


// IMAGES
import Logo from "../../public/images/logo.png";
import Rocket from "../../public/images/buttons/rocket.png";
import LogoGray from "../../public/images/logogray.png";

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

 


  
  

  
  // Use this to determine if page needs mobile view
  const { width, height, isMobile } = useWindowDimensions();

 



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
