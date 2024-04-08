import React from "react";
import { useNavigate } from "react-router-dom";
import ListTodo from "./ListTodo";
import "../../Employee.css";

function Todo() {
  const navigator = useNavigate();
  function addTodo() {
    navigator("/add-todo");
  }
  return (
    <div>
      lista de todos
      <div>
        <button onClick={addTodo} className="buttonAddEmployee">
          Add Todo
        </button>
      </div>
      <ListTodo></ListTodo>
    </div>
  );
}

export default Todo;
