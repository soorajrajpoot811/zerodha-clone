import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Awards from './Awards';
import Education from './Education';
import Pricing from './Pricing';



import OpenAccount from "../../OpenAccount";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
function HomePage() {
  return ( 
    <>
   
    <Hero />
    <Stats />
    <Awards />
    <Education />
    <Pricing />
    <OpenAccount />
  
    </>
   
   );
} 
export default HomePage;