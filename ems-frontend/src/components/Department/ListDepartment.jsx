import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ListEmployees.css";
import PropTypes from "prop-types";
import iconoEditar2 from "../../assets/iconoEditar2.png";
import iconoEliminar from "../../assets/iconoEliminar.png";
import {
  departmentList,
  deleteDepartment,
} from "../../services/DepartmentService";
function ListDepartment() {
  const [department, setDepartment] = useState([]);
  const navigator = useNavigate();
  const [deletedD, setDeletedD] = useState(false);

  //TODO: llama al servicio de getAllDepartments
  useEffect(() => {
    departmentList()
      .then((response) => {
        setDepartment(response.data);
        setDeletedD(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [deletedD]);
  function updateDeparment(id) {
    navigator(`/edit-department/${id}`);
  }
  //TODO: TABLA DE CONTENIDO
  const UserData = ({ id, departmentName, departmentDescription }) => {
    return (
      <tr>
        <td>{id}</td>
        <td>{departmentName}</td>
        <td>{departmentDescription}</td>
        <td>
          <button onClick={() => updateDeparment(id)} className="buttonEdit">
            <img className="iconoEditarcss" src={iconoEditar2}></img>
          </button>
          <button
            onClick={() => {
              deleteDepartment(id);
              setDeletedD(true);
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
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Department Name</th>
              <th>Description</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {department.map((dep) => (
              <UserData
                key={dep.id}
                id={dep.id}
                departmentName={dep.departmentName}
                departmentDescription={dep.departmentDescription}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
ListDepartment.propTypes = {
  id: PropTypes.number,
  departmentName: PropTypes.string,
  departmentDescription: PropTypes.string,
};

export default ListDepartment;
