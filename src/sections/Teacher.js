import React from "react";
import TeacherCard from "../components/TeacherCard";
import t1 from "../assets/t4.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
export default function Teacher() {
   return (
      <section id="teachers" className="teachers py-2 container">
         <h3 className="text-center mt-5">Our Teachers</h3>
         <p className="text-center my-3">
            Dignissimos asperiores vitae velit veniam totam fuga molestias
            accusamus alias autem provident. Odit ab aliquam dolor eius.
         </p>
         <div className="row my-5">
            <div className="col-lg-4 col-md-6 col-sm-12 p-3">
               <TeacherCard
                  name="Mike Smith"
                  profilePic={t1}
                  profession="BusinessHealth & Psychology"
               />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 p-3">
               <TeacherCard
                  name="Cris Evan"
                  profilePic={t2}
                  profession="Science & Technology"
               />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 p-3">
               <TeacherCard
                  name="Mark Ruffalo"
                  profilePic={t3}
                  profession="Web & Programming"
               />
            </div>
         </div>
      </section>
   );
}
