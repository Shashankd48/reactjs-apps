import React, { useState, useReducer } from "react";
import { Container, Alert, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { TodoContext } from "./context/TodoContext";
import todoReducer from "./context/reducer";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import todoImg from "./assets/todo.png";
export default function App() {
   const [todos, dispatch] = useReducer(todoReducer, []);
   return (
      <TodoContext.Provider value={{ todos, dispatch }}>
         <Container fluid>
            <div className="appName bg-dark p-3 d-flex justify-content-center my-4">
               <img src={todoImg} alt="" width="50px" />
               <span className="title ml-3">Your Todo</span>
            </div>
            <TodoForm />
            <Todo />
         </Container>
      </TodoContext.Provider>
   );
}
