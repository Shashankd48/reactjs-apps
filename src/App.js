import React, { useState } from "react";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import Container from "./components/Container";
export default function App() {
   const themeHook = useState("light");
   return (
      <ThemeContext.Provider value={themeHook}>
         <Container />
      </ThemeContext.Provider>
   );
}
