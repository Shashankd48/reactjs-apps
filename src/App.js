import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./sections/Home";
import Courses from "./sections/Courses";
import Teacher from "./sections/Teacher";

export default function App() {
   return (
      <div>
         <Nav />
         <Home />
         <Courses />
         <Teacher />
      </div>
   );
}
