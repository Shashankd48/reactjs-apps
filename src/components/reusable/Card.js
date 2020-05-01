import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
export default function Card({ item }) {
   return (
      <div className="card text-dark">
         <img
            src={item.images.background}
            className="card-img-top"
            alt="..."
         ></img>
         <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <Link to="/product/${item}" className="card-btn">
               Know More
            </Link>
         </div>
      </div>
   );
}
