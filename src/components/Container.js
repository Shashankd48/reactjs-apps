import React, { useContext } from "react";
import AppTheme from "../Colors";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import ThemeContext from "../context/ThemeContext";

export default function Container() {
   const theme = useContext(ThemeContext)[0];
   const currentTheme = AppTheme[theme];
   return (
      <div
         className={`container-fluid containerBg-${currentTheme.containerBg} `}
      >
         <Navbar />
         <div className="container d-flex justify-content-center align-items-center">
            <HeroSection />
         </div>
      </div>
   );
}
