import React, { useState } from "react";

export default function Navbar() {
   const [navLinks, setNavLinks] = useState(false);
   const [links, setLinks] = useState(false);
   const [hamburger, setHamburger] = useState(false);
   const navToggle = () => {
      setNavLinks(!navLinks);
      console.log(navLinks);
      //   navLinks.classList.toggle("open");
      //   links.forEach((link) => {
      //      link.classList.toggle("fade");
      //   });
      //   hamburger.classList.toggle("nav-toggle");
   };
   return (
      <nav>
         <div className="logo">
            <h1>Navbar</h1>
         </div>
         <div className={"hamburger"} onClick={navToggle}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
         </div>
         <ul className="nav-links" onClick={navToggle}>
            <li>
               <a href="Second.html">Home</a>
            </li>
            <li>
               <a href="#">Courses</a>
            </li>
            <li>
               <a href="#">Teacher</a>
            </li>
            <li>
               <a href="#">About</a>
            </li>
            <li>
               <a href="#">Pricing</a>
            </li>
            <li>
               <a href="#">Blog</a>
            </li>
            <li>
               <a href="#">Contact</a>
            </li>
         </ul>
         <script src="./myscript.js"></script>
      </nav>
   );
}
