import React from "react";
import BlogCard from "../components/BlogCard";
export default function Blog() {
   return (
      <section id="blog" className="blog py-3 container">
         <h3 className="text-center mt-5">Our Latest Blogs</h3>
         <p className="text-center mt-3">
            Dignissimos asperiores vitae velit veniam totam fuga molestias
            accusamus alias autem provident. Odit ab aliquam dolor eius.
         </p>
         <div className="row blogs">
            <div className="col-md-6 col-sm-12 col-xs-12">
               <BlogCard
                  pic="https://images.pexels.com/photos/2714073/pexels-photo-2714073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  heading="MERN Stact Development"
               />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
               <BlogCard
                  pic="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  heading="Latest Technologies"
               />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
               <BlogCard
                  pic="https://images.pexels.com/photos/1312067/pexels-photo-1312067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  heading="Under the sea"
               />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
               <BlogCard
                  pic="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  heading="India's E-commerce Sector"
               />
            </div>
         </div>
      </section>
   );
}
