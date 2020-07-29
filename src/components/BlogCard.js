import React from "react";

export default function BlogCard({ pic, heading }) {
   return (
      <div className="blogCard">
         <div className="blogImg">
            <img src={pic} className="img-fluid" alt="" />
         </div>
         <div className="blogText">
            <h5>{heading}</h5>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
               magni nostrum mollitia quam enim ipsam, nesciunt repellendus
               magnam repellat illo.
            </p>
            <a href="#blog" className="btn btn-primary">
               Read More
            </a>
         </div>
      </div>
   );
}
