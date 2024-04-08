import React, { useEffect, useRef, useState } from "react";
import "../../Employee/AddEmployee.css";
import { useNavigate } from "react-router-dom";
import iconoUser from "../../../assets/iconoAddUser.png";
import { createTodo } from "../../../services/TodoService.js";
import Swal from "sweetalert2";

function AddTodo() {
  const navigator = useNavigate();

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const completeRef = useRef(null);

  const [titleValidation, setTitleValidation] = useState(false);
  const [descriptionValidation, setDescriptionValidation] = useState(false);
  const [completedValidation, setCompletedValidation] = useState(false);

  const [todoToAdd, setTodoToAdd] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoToAdd((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateData = () => {
    const errors = {};

    if (titleRef.current.value != "") {
      setTitleValidation(true);
    } else {
      setTitleValidation(false);
      errors.title = "El campo de titulo no puede estar vacio";
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El campo de título no puede estar vacío",
      });
    }
    if (descriptionRef.current.value != "") {
      setDescriptionValidation(true);
    } else {
      setDescriptionValidation(false);
      errors.description = "El campo de description no puede estar vacio";
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El campo de description no puede estar vacío",
      });
    }
    if (completeRef.current.value != null) {
      setCompletedValidation(true);
    } else {
      setCompletedValidation(false);
      errors.description = "El campo de completed no puede estar vacio";
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El campo de completado debe elegirse",
      });
    }
    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  };

  const onAddTodo = () => {
    const { isValid, errors } = validateData();
    if (isValid) {
      createTodo(todoToAdd)
        .then((response) => {
          console.log("todo created!");
          console.log(response.data);
          navigator("/todos");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("faltan campos por llenar");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("boton crear todo presionado");
    //verificar si todos los campos estan llenos correctamente
    onAddTodo(todoToAdd);
  };

  return (
    <div>
      <h1>Todo Register</h1>
      <div className="card2">
        <div className="card-header">
          <img src={iconoUser} alt="User Icon" className="user-icon" />
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="grid1">
              <label>Title:</label>
              <label>Description:</label>
            </div>
            <div className="grid1">
              <input
                type="text"
                name="title"
                ref={titleRef}
                value={todoToAdd.title}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="description"
                ref={descriptionRef}
                value={todoToAdd.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid1">
              <label>Completed:</label>
              <label>Select option:</label>
            </div>
            <div className="grid1">
              <select
                style={{ backgroundColor: "transparent", color: "black" }}
                name="completed"
                ref={completeRef}
                value={todoToAdd.completed}
                onChange={handleChange}
                required
              >
                <option value="Select state">Select Option</option>
                <option key={todoToAdd.id} value={todoToAdd.id}>
                  False
                </option>
                <option key={todoToAdd.id} value={todoToAdd.id}>
                  True
                </option>
              </select>
            </div>
            <br />
            <br />
            <button className="button" type="submit">
              Add Todo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
