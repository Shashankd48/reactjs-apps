import React, { useContext } from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
import { TodoContext } from "../context/TodoContext";
import { REMOVE_TODO } from "../context/action.types";

export default function Todo() {
   const { todos, dispatch } = useContext(TodoContext);
   return (
      <div className="col-lg-6 col-md-8 col-sm-12 offset-lg-3 offset-sm-0 offset-md-2">
         <ListGroup className="mt-5 mb2 items">
            {todos.map((todo) => {
               return (
                  <ListGroupItem key={todo.id} className="animTodo">
                     {todo.todoString}
                     <span
                        className="float-right"
                        onClick={() => {
                           dispatch({
                              type: REMOVE_TODO,
                              payload: todo.id,
                           });
                        }}
                     >
                        <FaCheckDouble />
                     </span>
                  </ListGroupItem>
               );
            })}
         </ListGroup>
      </div>
   );
}
