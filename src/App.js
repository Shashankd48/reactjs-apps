import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./sections/Home";
import Courses from "./sections/Courses";
import Teacher from "./sections/Teacher";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

export default function App() {
   return (
      <div>
         <Nav />
         <Home />
         <Courses />
         <Teacher />
         <About />
         <Blog />
         <Contact />
         <Footer />
      </div>
   );
}
