import React from "react";

export default function CourseCard({ icon, heading, para }) {
   const abc = '<i className="fas fa-store"></i>';
   return (
      <div className="cardCourse">
         <span className="icon">
            <img src={icon} alt="This is Icon" />
         </span>
         <div className="desc">
            <h3>{heading}</h3>
            <p>{para}</p>
         </div>
      </div>
   );
}
