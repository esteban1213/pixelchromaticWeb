"use client";


 // This is a client component 👈🏽
 import { BrowserRouter  } from "react-router-dom";
 import Home from "./index"; // Make sure this is the correct import path
 import { useEffect } from "react";

 
 // ...
 
 export default function App() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      // Your client-side code here
    }
  }, []);
   return (
     
       <BrowserRouter>
         <Home />
       </BrowserRouter>
    
   );
 }
 