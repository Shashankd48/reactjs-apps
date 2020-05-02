import React from "react";
import "./Card.css";
import CardModal from "./CardModal";

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
            <button
               type="button"
               className="card-btn"
               data-toggle="modal"
               data-target={`#${item.id}`}
            >
               Know More
            </button>
            <CardModal
               id={item.id}
               name={item.name}
               description={item.description}
               rarity={item.rarity}
               icon={item.images.icon}
               full={item.images.background}
            />
         </div>
      </div>
   );
}
