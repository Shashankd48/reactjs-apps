import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";

import {
   Row,
   Container,
   Col,
   Input,
   Button,
   InputGroup,
   InputGroupAddon,
} from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

export default function Home() {
   const context = useContext(UserContext);
   const [query, setQuery] = useState("");
   const [user, setUser] = useState(null);
   const fetchDetails = async () => {
      try {
         const { data } = await Axios.get(
            `https://api.github.com/users/${query}`
         );
         console.log(data);
         setUser(data);
      } catch (error) {
         toast("Not able to locate user", { type: "error" });
      }
   };
   // Check is user is logged in or not with lacal storage
   useEffect(() => {
      if (localStorage.getItem("userAuth")) {
         const userAuth = JSON.parse(localStorage.getItem("userAuth"));
         context.setUser({ email: userAuth.email, uid: userAuth.uid });
      }
   }, []);

   if (!context.user?.uid) {
      return <Redirect to="/signin" />;
   }
   return (
      <Container style={{ minHeight: "79.7vh", paddingBottom: "30px" }}>
         <Col md="5" className="mt-3 p-0">
            <InputGroup>
               <Input
                  type="text"
                  value={query}
                  placeholder="Please provide the username"
                  onChange={(event) => setQuery(event.target.value)}
               />
               <InputGroupAddon addonType="append">
                  <Button color="primary" onClick={fetchDetails}>
                     Fetch User
                  </Button>
               </InputGroupAddon>
            </InputGroup>
         </Col>

         <Row className=" mt-3">
            <Col sm="4" xs="12">
               {user ? <UserCard user={user} /> : ""}
            </Col>
            <Col sm="8" xs="12">
               {user ? <Repos repos_url={user.repos_url} /> : ""}
            </Col>
         </Row>
      </Container>
   );
}
