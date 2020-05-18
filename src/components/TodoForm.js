import React, { useState } from "react";
import {
   FormGroup,
   Input,
   InputGroup,
   InputGroupAddon,
   Form,
   Button,
} from "reactstrap";
import { v4 } from "uuid";

export default function TodoForm({ addTodos }) {
   const [todoString, setTodoString] = useState("");
   const handleSubmit = (event) => {
      event.preventDefault();
      if (todoString === "") {
         return alert("Enter your todo first !!!");
      }
      const todo = {
         todoString,
         id: v4(),
      };

      // Method passed as props
      addTodos(todo);
      // Clear todo state
      setTodoString("");
   };
   return (
      <div className="col-lg-6 col-md-8 col-sm-12 offset-lg-3 offset-md-2 offset-sm-0 animForm">
         <Form onSubmit={handleSubmit}>
            <FormGroup>
               <InputGroup>
                  <Input
                     type="text"
                     name="todo"
                     id="todo"
                     placeholder="Enter your todo here..."
                     value={todoString}
                     onChange={(event) => setTodoString(event.target.value)}
                  />
                  <InputGroupAddon addonType="append">
                     <Button color="dark" type="submit">
                        Add Todo
                     </Button>
                  </InputGroupAddon>
               </InputGroup>
            </FormGroup>
         </Form>
      </div>
   );
}
