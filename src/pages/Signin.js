import React, { useState, useContext } from "react";
import {
   Container,
   Form,
   Button,
   FormGroup,
   Label,
   Col,
   Input,
   Row,
   Card,
   CardBody,
   CardHeader,
   CardTitle,
} from "reactstrap";
import firebase from "firebase/app";
import { UserContext } from "../context/UserContext";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

export default function Signin() {
   const context = useContext(UserContext);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleSignup = () => {
      firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then((res) => {
            context.setUser({ email: res.user.email, uid: res.user.uid });
            localStorage.setItem(
               "userAuth",
               JSON.stringify({
                  email: res.user.email,
                  uid: res.user.uid,
               })
            );
         })
         .catch((error) => {
            console.log("Error");
            toast(error.message, {
               type: "error",
            });
         });
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      handleSignup();
   };
   if (context.user?.uid) {
      return <Redirect to="/" />;
   }
   return (
      <Container>
         <Row
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ height: "82vh" }}
         >
            <Col md={{ size: 8 }}>
               <Card
                  style={{ maxWidth: "550px", margin: "auto" }}
                  className="py-3 px-2"
               >
                  <CardHeader className="bg-dark mx-3 mt-3">
                     <CardTitle className="bg-dark text-white text-center">
                        Signin to Github User
                     </CardTitle>
                  </CardHeader>
                  <Form onSubmit={handleSubmit}>
                     <CardBody>
                        <FormGroup>
                           <Label for="exampleEmail">Email</Label>
                           <Input
                              type="email"
                              name="email"
                              id="exampleEmail"
                              placeholder="Enter your email"
                              value={email}
                              onChange={(event) => setEmail(event.target.value)}
                              required
                           />
                        </FormGroup>
                        <FormGroup>
                           <Label for="examplePassword">Password</Label>
                           <Input
                              type="password"
                              name="password"
                              id="examplePassword"
                              placeholder="Enter your password"
                              value={password}
                              onChange={(event) =>
                                 setPassword(event.target.value)
                              }
                              required
                           />
                        </FormGroup>
                        <Button block color="success" type="submit">
                           Sign In
                        </Button>
                     </CardBody>
                  </Form>
               </Card>
            </Col>
         </Row>
      </Container>
   );
}
