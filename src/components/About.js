import React from "react";
import gamming from "../images/gamming.png";
import logo from "../images/fortniteBlackLogo.png";
export default function About() {
   return (
      <div className="container aboutPage">
         <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
               <img src={gamming} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
               <div className="aboutInfo">
                  <div className="forniteInfo">
                     <div className="text-center">
                        <img src={logo} alt="" style={{ width: "150px" }} />
                        <p>
                           Fortnite is a survival game where 100 players fight
                           against each other in player versus player combat to
                           be the last one standing. It is a fast-paced,
                           action-packed game.
                        </p>
                     </div>
                  </div>
                  <div className="projectInfo">
                     <h1>About Project</h1>
                     <p>
                        This project is designed for learning purpose only. We
                        are using fornite.io api to fetch upcommig product from
                        in fornite
                     </p>
                     <div className="text-center">
                        <span>
                           Designed By{" "}
                           <a
                              className="card-btn"
                              href="https://github.com/Shashankd48/reactjs-apps/tree/fornite-api-project"
                           >
                              shashankd48
                           </a>
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
