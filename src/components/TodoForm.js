import React, { useState, useContext } from "react";
import {
   FormGroup,
   Input,
   Button,
   Form,
   InputGroup,
   InputGroupAddon,
   Alert,
} from "reactstrap";
import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";

export default function TodoForm() {
   const [todoString, setTodoString] = useState("");
   const { dispatch } = useContext(TodoContext);
   const [visible, setVisible] = useState(true);

   const handleSubmit = (event) => {
      event.preventDefault();
      if (todoString === "")
         return (
            // <Alert color="danger" isVisible={visible}>
            //    Please enter a Todo!!!
            // </Alert>
            alert("Please Enter Todo")
         );
      //  Temp todo
      const todo = {
         todoString,
         id: v4(),
      };
      //   Store todo in centralized state
      dispatch({
         type: ADD_TODO,
         payload: todo,
      });
      setTodoString("");
   };
   return (
      <div className="col-lg-6 col-md-8 col-sm-12 offset-lg-3 offset-sm-0 offset-md-2">
         <Form onSubmit={handleSubmit}>
            <FormGroup>
               <InputGroup>
                  <Input
                     type="text"
                     name="todo"
                     id="todo"
                     placeholder="Your next Todo"
                     value={todoString}
                     onChange={(e) => setTodoString(e.target.value)}
                  />
                  <InputGroupAddon addonType="prepend">
                     <Button color="warning">Add</Button>
                  </InputGroupAddon>
               </InputGroup>
            </FormGroup>
         </Form>
      </div>
   );
}
