import React from "react";
import "../styleSheet/App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import Product from "./Product";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

// <Route path="/" exact component={Home} />
export default function App() {
   return (
      <Router>
         <div className="container-fluid">
            <NavBar />
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/about" component={About} />
               <Route path="/products" component={Product} />
            </Switch>
         </div>
      </Router>
   );
}
