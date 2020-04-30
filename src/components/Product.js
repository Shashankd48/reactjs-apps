import React, { useState, useEffect } from "react";
import { upCommingItems, getItemsFromShop } from "../helper/apicalls";

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
                     className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
                     key={index}
                     style={{ margin: "0", padding: "20px 3px" }}
                  >
                     <div className="card text-dark" style={{ width: "15rem" }}>
                        <img
                           src={item.images.background}
                           className="card-img-top"
                           alt="..."
                        ></img>
                        <div className="card-body">
                           <h5 className="card-title">{item.name}</h5>
                           <p className="card-text">{item.description}</p>
                           <a href="#" className="btn btn-primary">
                              Go somewhere
                           </a>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
}
