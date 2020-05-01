import React from "react";
import "./CardModal.css";
export default function CardModal({
   id,
   name,
   description,
   rarity,
   icon,
   full,
}) {
   return (
      <div
         className="modal fade"
         id={id}
         tabIndex="-1"
         role="dialog"
         aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true"
      >
         <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
               <div className="modal-body">
                  <div className="row">
                     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <img src={full} alt="Full" className="modalImage" />
                     </div>
                     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="info">
                           <h1>{name}</h1>
                           <p>{description}</p>
                           <p>Rarity: {rarity}</p>
                           <button
                              type="button"
                              className="card-btn"
                              data-dismiss="modal"
                           >
                              Close
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

// <div className="modal-header">
//    <h5 className="modal-title" id="exampleModalLongTitle">
//       {name}
//    </h5>
//    <button
//       type="button"
//       className="close"
//       data-dismiss="modal"
//       aria-label="Close"
//    >
//       <span aria-hidden="true">&times;</span>
//    </button>
// </div>
