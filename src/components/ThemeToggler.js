import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
export default function ThemeToggler() {
   const [themeMode, setThemeMode] = useContext(ThemeContext);
   return (
      //   <div className="d-flex my-4">
      <button
         onClick={() => {
            setThemeMode(themeMode === "light" ? "dark" : "light");
            console.log(themeMode);
         }}
         className={`btn btn-${themeMode === "light" ? "dark" : "light"}`}
      >
         {themeMode === "light" ? "Dark Mode" : "Light Mode"}
      </button>
      //   </div>
   );
}
