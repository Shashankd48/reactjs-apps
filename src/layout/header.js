import React, { useState, useContext } from "react";
import {
   Nav,
   Navbar,
   Collapse,
   NavbarToggler,
   NavbarBrand,
   NavItem,
   NavLink,
   NavbarText,
   Container,
} from "reactstrap";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Header() {
   const context = useContext(UserContext);
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => setIsOpen(!isOpen);
   return (
      <Navbar color="dark" dark expand="sm">
         <Container>
            <NavbarBrand>
               <Link
                  to="/"
                  className="text-white d-flex align-items-center"
                  style={{ textDecoration: "none" }}
               >
                  <h3>
                     <FaGithub />{" "}
                  </h3>
                  <span className="ml-3">Find Github User</span>
               </Link>
            </NavbarBrand>

            <NavbarToggler onClick={toggle} />
            <Collapse navbar isOpen={isOpen}>
               <Nav className="ml-auto" navbar>
                  {context.user ? (
                     <>
                        <NavbarText className="text-white">
                           {context.user?.email ? context.user.email : ""}
                        </NavbarText>
                        <NavItem>
                           <NavLink
                              onClick={() => {
                                 context.setUser(null);
                                 localStorage.removeItem("userAuth");
                              }}
                              className="text-warning mx-2"
                              style={{ cursor: "pointer" }}
                           >
                              Signout
                           </NavLink>
                        </NavItem>
                     </>
                  ) : (
                     <>
                        <NavItem>
                           <NavLink
                              tag={Link}
                              to="/signin"
                              className="text-white mx-2"
                           >
                              Signin
                           </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink
                              tag={Link}
                              to="/signup"
                              className="text-white mx-2"
                           >
                              Signup
                           </NavLink>
                        </NavItem>
                     </>
                  )}
               </Nav>
            </Collapse>
         </Container>
      </Navbar>
   );
}
