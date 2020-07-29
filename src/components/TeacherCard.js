import React from "react";

export default function TeacherCard({ profilePic, name, profession }) {
   return (
      <div class="card" style={{ width: "18rem" }}>
         <img src={profilePic} class="card-img-top" alt="..." />
         <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{profession}</p>
            <a href="#" class="btn btn-primary">
               About Me
            </a>
         </div>
      </div>
   );
}
