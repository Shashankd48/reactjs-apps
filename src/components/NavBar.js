import React from "react";
import { Link } from "react-router-dom";
import fortniteLogo from "../images/fortniteBlackLogo.png";
export default function NavBar() {
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container">
            <Link className="navbar-brand" to="/">
               <img
                  src="https://d.newsweek.com/en/full/1255897/epic-games-logo.png?w=1600&h=900&q=88&f=7dc5d111a2e50bc246ed88ce5cba931c"
                  alt="Fortnite Logo"
                  width="auto"
                  height="40"
               ></img>
               <img
                  src={fortniteLogo}
                  alt="Fortnite Logo"
                  width="auto"
                  height="30"
               ></img>
            </Link>
            <button
               className="navbar-toggler"
               type="button"
               data-toggle="collapse"
               data-target="#navbarNavDropdown"
               aria-controls="navbarNavDropdown"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                     <Link className="nav-link" to="/">
                        Home <span className="sr-only">(current)</span>
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/products">
                        Products
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/about">
                        About
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}
