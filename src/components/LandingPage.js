import React from "react";
import "../styleSheet/LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
   return (
      <div className="landingImage text-white">
         <div className="row">
            <div className="col-lg-6 offset-lg-2 col-md-7 offset-md-2 col-sm-8 offset-sm-2 col-xs-8 mt-5 pt-5 px-5">
               <h1>Build Your Fortnite</h1>
               <p
                  className="mt-4"
                  style={{ textAlign: "justify", lineHeight: "26px" }}
               >
                  Imagine a place where you make the rules, filled with your
                  favorite things and your favorite people. Claim your own
                  personal island and start creating!
               </p>
               <div className="mt-5">
                  <Link className="btn-products" to="/products">
                     Products
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
