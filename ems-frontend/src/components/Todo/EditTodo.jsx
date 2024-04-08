import { useEffect, useRef, useState } from "react";
import "../Employee/AddEmployee.css";
import { getTodo, updateTodo } from "../../services/TodoService.js";
import { useNavigate, useParams } from "react-router-dom";
import iconoUser from "../../assets/iconoAddUser.png";
import Swal from "sweetalert2";

function EditTodo() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const completedRef = useRef(null);

  const [titleValidation, setTitleValidation] = useState(true);
  const [descriptionValidation, setDescriptionValidation] = useState(true);
  const [completedValidation, setCompletedValidation] = useState(true);

  const navigator = useNavigate();
  const { id } = useParams();
  const [todoToEdit, setTodoToEdit] = useState({
    title: "",
    description: "",
    completed: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTodoToEdit((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (id) {
      getTodo(id)
        .then((response) => {
          setTodoToEdit(response.data);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }, [id]);

  const onUpdateTodo = () => {
    if (titleRef.current.value != "") {
      setTitleValidation(true);
    } else {
      setTitleValidation(false);
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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El campo de description no puede estar vacío",
      });
    }
    if (completedRef.current.value != null) {
      setCompletedValidation(true);
    } else {
      setCompletedValidation(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El campo de completo debe elegirse",
      });
    }
    if (titleValidation && descriptionValidation && completedValidation) {
      updateTodo(id, todoToEdit)
        .then((response) => {
          console.log("todo Updated");
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
    console.log("boton actualizar presionado");
    //verificar si todos los campos estan llenos correctamente

    onUpdateTodo(todoToEdit);
  };

  return (
    <div>
      <h1>Todo {id} Editor</h1>
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
                style={{ marginTop: "10px" }}
                type="text"
                name="title"
                value={todoToEdit.title}
                onChange={handleChange}
                ref={titleRef}
                required
              />
              <input
                type="text"
                name="description"
                value={todoToEdit.description}
                onChange={handleChange}
                ref={descriptionRef}
                required
              />
            </div>
            <div className="grid1">
              <label>Completed:</label>
            </div>
            <div className="grid1">
              <select
                name="completed"
                ref={completedRef}
                value={todoToEdit.completed}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="Select state">Select Option</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <br />
            <br />
            <button className="button" type="submit">
              Update Todo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditTodo;
