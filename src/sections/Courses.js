import React from "react";
import CourseCard from "../components/CourseCard";
import shop from "../assets/store-solid.svg";
import health from "../assets/heartbeat-solid.svg";
import cash from "../assets/money-bill-solid.svg";
import science from "../assets/flask-solid.svg";
import art from "../assets/image-regular.svg";
import real from "../assets/home-solid.svg";
import language from "../assets/comment-solid.svg";
import web from "../assets/internet-explorer-brands.svg";
export default function Courses() {
   return (
      <section id="courses" className="courses py-5 container">
         <h3 className="text-center mt-5">COURSE CATEGORIES</h3>
         <p className="text-center my-3">
            Dignissimos asperiores vitae velit veniam totam fuga molestias
            accusamus alias autem provident. Odit ab aliquam dolor eius.
         </p>

         <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-1 p-1">
               <CourseCard
                  icon={shop}
                  heading="Business"
                  para="Dignissimos asperiores vitae velit veniam totam fuga molestias
               accusamus alias autem provident. Odit ab aliquam dolor eius."
               />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-1 p-1">
               <CourseCard
                  icon={health}
                  heading="BusinessHealth & Psychology"
                  para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque in obcaecati vitae consequuntur maxime illum molestiae, error numquam aspernatur blanditiis!"
               />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-1 p-1">
               <CourseCard
                  icon={cash}
                  heading="Accounting"
                  para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque in obcaecati vitae consequuntur maxime illum molestiae, error numquam aspernatur blanditiis!"
               />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-1 p-1">
               <CourseCard
                  icon={science}
                  heading="Science & Technology"
                  para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque in obcaecati vitae consequuntur maxime illum molestiae, error numquam aspernatur blanditiis!"
               />
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-1 p-1">
               <CourseCard
                  icon={art}
                  heading="Art & Media"
                  para="Dignissimos asperiores vitae velit veniam totam fuga molestias
               accusamus alias autem provident. Odit ab aliquam dolor eius."
               />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-1 p-1">
               <CourseCard
                  icon={real}
                  heading="Real State"
                  para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque in obcaecati vitae consequuntur maxime illum molestiae, error numquam aspernatur blanditiis!"
               />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-1 p-1">
               <CourseCard
                  icon={language}
                  heading="Language"
                  para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque in obcaecati vitae consequuntur maxime illum molestiae, error numquam aspernatur blanditiis!"
               />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-1 p-1">
               <CourseCard
                  icon={web}
                  heading="Web & Programming"
                  para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque in obcaecati vitae consequuntur maxime illum molestiae, error numquam aspernatur blanditiis!"
               />
            </div>
         </div>
      </section>
   );
}
