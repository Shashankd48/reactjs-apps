import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./sections/Home";
import Courses from "./sections/Courses";

export default function App() {
   return (
      <div>
         <Nav />
         <Home />
         <Courses />
      </div>
   );
}
