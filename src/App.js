import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// React routers
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// Firebase
import firebase from "firebase";
import "firebase/auth";

//Our Components
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";

// User Context goes here
import { UserContext } from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/header";
import firebaseConfig from "./config/firebaseConfig";

//init Firebase
firebase.initializeApp(firebaseConfig);

export default function App() {
   const [user, setUser] = useState(null);
   return (
      <Router>
         <ToastContainer />
         <UserContext.Provider value={{ user, setUser }}>
            <Header />
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/signin" component={Signin} />
               <Route exact path="/signup" component={Signup} />
               <Route path="*" component={PageNotFound} />
            </Switch>
            <Footer />
         </UserContext.Provider>
      </Router>
   );
}
