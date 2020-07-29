import React from "react";

export default function Contact() {
   return (
      <section id="contact" className="contact py-5 container">
         <h3 className="text-center mt-5">Contact Us</h3>
         <p className="text-center my-3">
            Dignissimos asperiores vitae velit veniam totam fuga molestias
            accusamus alias autem provident. Odit ab aliquam dolor eius.
         </p>
         <div className="row mt-5">
            <div className="col-sm-6 col-xs-12 contactInfo">
               <h3>EDUCATION</h3>
               <h5>Get In Touch</h5>
               <p>
                  Get In Touch Use this information to send STUFF or to Visit us
               </p>
               <div className="mt-3">
                  EDUCATION Center Rajawat Tower <br />- 3rd Floor, 7Number,{" "}
                  <br />
                  Skit Chaurah, Jagatpura Jaipur,
                  <br />
                  Rajasthan PIN: 302017
               </div>
            </div>
            <div className="col-sm-6 col-xs-12 contactForm">
               <form>
                  <div class="form-group">
                     <label for="exampleFormControlInput1">Full Name</label>
                     <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Johan Doe"
                     />
                  </div>
                  <div class="form-group">
                     <label for="exampleFormControlInput1">Email address</label>
                     <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                     />
                  </div>

                  <div class="form-group">
                     <label for="exampleFormControlTextarea1">
                        Your Message
                     </label>
                     <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                     ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                     Send Message
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
}
