import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../Colors";
import ThemeToggler from "./ThemeToggler";

export default function HeroSection() {
   const theme = useContext(ThemeContext)[0];
   const currentTheme = AppTheme[theme];

   return (
      <div className="heroSection d-flex justify-content-center align-items-center">
         <div
            className="box"
            style={{
               border: `${currentTheme.border}`,
               backgroundColor: `${currentTheme.backgroundColor}`,
               color: `${currentTheme.textColor}`,
            }}
         >
            <h1 className="card-title">Context Api theme toggler</h1>
            <p className="mt-3">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
               quam iusto officia impedit ipsum modi error tempora fugiat
               dolorem similique!
            </p>
            <p className="mt-3">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
               voluptatibus, sint beatae minus amet voluptatem doloremque
               provident fuga, veniam quae porro aspernatur nulla alias
               incidunt? Officia odio ad itaque, numquam non libero quaerat
               earum, aliquid obcaecati quo impedit perferendis ex.
            </p>
            <ThemeToggler />
         </div>
      </div>
   );
}
