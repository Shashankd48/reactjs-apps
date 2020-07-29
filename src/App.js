import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./sections/Home";
import Courses from "./sections/Courses";
import Teacher from "./sections/Teacher";
import About from "./sections/About";

export default function App() {
   return (
      <div>
         <Nav />
         <Home />
         <Courses />
         <Teacher />
         <About />
      </div>
   );
}
