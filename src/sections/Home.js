import React from "react";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
export default function Home() {
   return (
      <section id="home" className="home">
         <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
            data-interval="4000"
         >
            <ol className="carousel-indicators">
               <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="0"
                  className="active"
               ></li>
               <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="1"
               ></li>
               <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="2"
               ></li>
            </ol>
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <img src={slide2} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                     <h5>
                        The Roots of Education are Bitter, But the Fruit is
                        Sweet
                     </h5>
                     <p>Brought to you by shashankd48</p>
                     <button className="btn btn-primary btn-lg">
                        Start learning now!
                     </button>
                  </div>
               </div>
               <div className="carousel-item">
                  <img src={slide1} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                     <h5>We Help You to Learn New Things</h5>
                     <p>Lorem ipsum dolor sit amet.</p>
                     <button className="btn btn-primary btn-lg">
                        Start learning now!
                     </button>
                  </div>
               </div>
               <div className="carousel-item">
                  <img src={slide3} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                     <h5>
                        The Great Aim of Education is not Knowledge, But Action
                     </h5>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                     <button className="btn btn-primary btn-lg">
                        Start learning now!
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
