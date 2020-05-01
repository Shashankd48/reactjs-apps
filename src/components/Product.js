import React, { useState, useEffect } from "react";
import { upCommingItems } from "../helper/apicalls";
import Card from "./reusable/Card";

export default function Product() {
   const [items, setItems] = useState([]);
   // const items
   const preload = () => {
      upCommingItems().then((data) => {
         if (data.error) {
            console.log(data.error);
         } else {
            console.log(data);
            setItems(data.items);
         }
      });
   };
   useEffect(() => {
      preload();
   }, []);
   return (
      <div className="container pb-5 products" style={{ height: "100%" }}>
         <h1 className="heading text-center mt-4">
            Amazing Upcomming <span style={{ color: "#77b900" }}>Products</span>
         </h1>
         <div className="row  justify-content-center align-items-center">
            {items.slice(0, 9).map((item, index) => {
               return (
                  <div
                     className="d-flex justify-content-left"
                     key={index}
                     style={{ margin: "0", padding: "40px 0px" }}
                  >
                     <Card item={item} />
                  </div>
               );
            })}
         </div>
      </div>
   );
}
