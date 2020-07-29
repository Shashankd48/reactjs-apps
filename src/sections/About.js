import React from "react";
import about from "../assets/about.svg";
export default function About() {
   return (
      <section id="about" className="about py-5 container">
         <h3 className="text-center mt-5">About Our School</h3>
         <p className="text-center my-3">
            Dignissimos asperiores vitae velit veniam totam fuga molestias
            accusamus alias autem provident. Odit ab aliquam dolor eius.
         </p>
         <div className="row mt-5">
            <div className="col-md-6 col-sm-12 col-xs-12">
               <img
                  src={about}
                  className="img-fluid"
                  alt="About Illustration"
               />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 aboutText">
               <h3>Information</h3>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  sint assumenda facilis maxime cumque amet accusantium harum
                  praesentium neque aut perferendis veniam tenetur magni,
                  doloremque quos dolore sequi obcaecati. Labore, fugit beatae.
                  Voluptatibus quidem ut saepe praesentium unde adipisci ad.
               </p>
               <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor, quaerat illum! Vitae alias sapiente accusantium modi,
                  repellendus officiis neque quaerat incidunt delectus
                  consectetur perferendis illum ullam sint? Ab, aliquid
                  delectus?
               </p>
               <br />
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia voluptatibus, nostrum reiciendis laudantium a hic.
               </p>
            </div>
         </div>
      </section>
   );
}
