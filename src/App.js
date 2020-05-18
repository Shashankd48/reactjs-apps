import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { FaTasks } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

export default function App() {
   const [todos, setTodos] = useState([]);

   //    Reacd local Todos first from localhost
   useEffect(() => {
      const localTodos = localStorage.getItem("todos");
      console.log({ localStorage });
      if (localTodos) {
         setTodos(JSON.parse(localTodos));
      }
   }, []);

   //    Add Todos here
   const addTodo = async (todo) => {
      setTodos([...todos, todo]);
   };
   useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos]);

   //    Remove Todo from local Storage
   const removeTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
   };
   return (
      <Container fluid>
         <div className="appName my-4 p-4 text-center">
            <FaTasks className="icon" />
            <span className="title">Todo App</span>
         </div>
         <TodoForm addTodos={addTodo} />
         <Todo todos={todos} removeTodo={removeTodo} />
      </Container>
   );
}
