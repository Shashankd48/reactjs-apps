import React from "react";

export default function Nav() {
   return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
         <div className="container">
            <a className="navbar-brand" href="/">
               Navbar
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
                     <a className="nav-link" href="/">
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
