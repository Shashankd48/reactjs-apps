import React, { useState, useEffect } from "react";
import { upCommingItems, getItemsFromShop } from "../helper/apicalls";
import { Link } from "react-router-dom";
import Card from "./reusable/Card";

export default function Product() {
   const [items, setItems] = useState([]);
   // const items
   const preload = () => {
      upCommingItems().then((data) => {
         if (data.error) {
            console.log(data.error);
         } else {
            setItems(data.items);
         }
      });
      getItemsFromShop().then((data) => {
         if (data.error) {
            console.log(data.error);
         } else {
            console.log(data);
         }
      });
   };
   useEffect(() => {
      preload();
   }, []);

   const waitFiveSec = () => {
      setTimeout(() => {}, 5000);
   };
   const showInfo = () => {
      console.log(items);
      console.log(items[0]);
   };
   showInfo();
   return (
      <div className="container" style={{ height: "100%" }}>
         <h1 className="text-white text-center">Hello</h1>
         <div className="row  justify-content-center align-items-center">
            {items.slice(0, 8).map((item, index) => {
               // waitFiveSec();
               return (
                  <div
                     className="d-flex justify-content-center"
                     key={index}
                     style={{ margin: "0", padding: "20px 0px" }}
                  >
                     <Card item={item} />
                  </div>
               );
            })}
         </div>
      </div>
   );
}
