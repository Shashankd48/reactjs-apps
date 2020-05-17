import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../Colors";
import logo from "../assets/favicon.ico";
export default function Navbar() {
   const theme = useContext(ThemeContext)[0];
   const currentTheme = AppTheme[theme];
   return (
      <nav
         className={`navbar navbar-expand-lg navbar-${currentTheme.navbar} bg-${currentTheme.navbar}`}
      >
         <div className="container">
            <a className="navbar-brand" href="#">
               <img src={logo} alt="Logo" width="33px" />
               <span className="ml-2">Theme</span>
            </a>
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
                     <a className="nav-link" href="#">
                        Home <span className="sr-only">(current)</span>
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">
                        About
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">
                        Service
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">
                        Contact Us
                     </a>
                  </li>
               </ul>
               <form className="form-inline my-2 my-lg-0">
                  <input
                     className="form-control mr-sm-2"
                     type="search"
                     placeholder="Search"
                     aria-label="Search"
                  />
                  <button
                     className="btn btn-outline-success my-2 my-sm-0"
                     type="submit"
                  >
                     Search
                  </button>
               </form>
            </div>
         </div>
      </nav>
   );
}
