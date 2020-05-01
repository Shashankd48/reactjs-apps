import React from "react";

export default function About() {
   let id = "abc";
   return (
      <div>
         <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target={`#${id}`}
         >
            Launch demo modal
         </button>

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
                  <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLongTitle">
                        Modal title
                     </h5>
                     <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                     >
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div className="modal-body">...</div>
               </div>
            </div>
         </div>
      </div>
   );
}
