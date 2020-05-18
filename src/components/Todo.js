import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaTimes } from "react-icons/fa";
export default function Todo({ todos, removeTodo }) {
   return (
      <div className="col-lg-6 col-md-8 col-sm-12 offset-lg-3 offset-sm-0 offset-md-2">
         <ListGroup className="mt-5 mb2 items animTodoList">
            {todos.map((todo) => {
               return (
                  <ListGroupItem key={todo.id} className="animTodo">
                     {todo.todoString}
                     <span
                        className="float-right"
                        onClick={() => removeTodo(todo.id)}
                     >
                        <FaTimes />
                     </span>
                  </ListGroupItem>
               );
            })}
         </ListGroup>
      </div>
   );
}
