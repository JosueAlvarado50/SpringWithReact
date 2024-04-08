import { useEffect, useState } from "react";
import "../../ListEmployees.css";
import { useNavigate } from "react-router-dom";
import { listTodos } from "../../../services/TodoService";
import iconoEditar2 from "../../../assets/iconoEditar2.png";
import iconoEliminar from "../../../assets/iconoEliminar.png";
import { deleteTodo } from "../../../services/TodoService";
import PropTypes from "prop-types";

function ListTodo() {
  const [todos, setTodos] = useState([]);
  const navigator = useNavigate();
  const [deletedT, setDeletedT] = useState(false);
  useEffect(() => {
    listTodos()
      .then((response) => {
        console.log("Lista de Todos");
        console.log(response.data);
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [deletedT]);
  function updateTodo(id) {
    navigator(`/edit-todo/${id}`);
  }
  async function deleteNav(id) {
    try {
      await deleteTodo(id);
      setDeletedT(true);
      navigator(`/todos`);
    } catch (error) {
      console.log("Error al eliminar el registro", error);
    }
  }

  const UserData = ({ id, title, description, completed }) => {
    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>{completed}</td>
        <td>
          <button onClick={() => updateTodo(id)} className="buttonEdit">
            <img className="iconoEditarcss" src={iconoEditar2}></img>
          </button>
          <button
            onClick={() => {
              deleteNav(id);
            }}
            className="buttonEdit"
          >
            <img className="iconoEditarcss" src={iconoEliminar}></img>
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>ID</th>
                <th style={{ textAlign: "center" }}>Title</th>
                <th style={{ textAlign: "center" }}>Description</th>
                <th style={{ textAlign: "center" }}>Completed</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <UserData
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  completed={todo.completed ? "YES" : "NO"}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
ListTodo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  completed: PropTypes.bool,
};

export default ListTodo;
