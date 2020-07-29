import React from "react";

export default function TeacherCard({ profilePic, name, profession }) {
   return (
      <div className="card" style={{ width: "18rem" }}>
         <img src={profilePic} className="card-img-top" alt="..." />
         <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{profession}</p>
            <a href="#teachers" className="btn btn-primary">
               About Me
            </a>
         </div>
      </div>
   );
}
