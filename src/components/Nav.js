import React from "react";
import logo from "../assets/logo.png";
export default function Nav() {
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container">
            <div className="navbar-brand">
               <img src={logo} alt="Main Logo" width="90px" />
               <a className="navbar-brand" href="#home">
                  Education
               </a>
            </div>
            <button
               className="navbar-toggler"
               type="button"
               data-toggle="collapse"
               data-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>

            <div
               className="collapse navbar-collapse"
               id="navbarSupportedContent"
            >
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                     <a className="nav-link" href="#home">
                        Home <span className="sr-only">(current)</span>
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#courses">
                        Courses
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#teachers">
                        Teachers
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#about">
                        About
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#blog">
                        Blog
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#contact">
                        Contact
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}
