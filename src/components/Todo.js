import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaTimes } from "react-icons/fa";
export default function Todo({ todos, removeTodo }) {
   return (
      <div className="col-lg-6 col-md-8 col-sm-12 offset-lg-3 offset-sm-0 offset-md-2 todoSection">
         <ListGroup className="items animTodoList">
            {todos.map((todo, index) => {
               return (
                  <ListGroupItem key={todo.id} className="animTodo">
                     <span className="mr-2">
                        <b>{index + 1}.</b>
                     </span>
                     <span>{todo.todoString}</span>

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
