"use client";


 // This is a client component 👈🏽
 import { BrowserRouter  } from "react-router-dom";
 import Home from "./index"; // Make sure this is the correct import path


 
 // ...
 
 export default function App() {
  
   return (
     
       <BrowserRouter>
         <Home />
       </BrowserRouter>
    
   );
 }
 