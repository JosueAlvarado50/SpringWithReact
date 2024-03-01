import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ListEmployees.css";
import { useNavigate } from "react-router-dom";
import { listEmployees } from "../services/EmployeeService";
import iconoEditar2 from "../assets/iconoEditar2.png";
import iconoEliminar from "../assets/iconoEliminar.png";
import { updateEmployee, deleteEmployee } from "../services/EmployeeService";
function ListEmployees() {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();
  const [deletedE, setDeletedE] = useState(false);

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
        setDeletedE(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [deletedE]);
  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  const UserData = ({ id, firstName, lastName, email }) => {
    const employeToEdit = { id, firstName, lastName, email };
    return (
      <tr>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>
          <button onClick={() => updateEmployee(id)} className="buttonEdit">
            <img className="iconoEditarcss" src={iconoEditar2}></img>
          </button>
          <button
            onClick={() => {
              deleteEmployee(id);
              setDeletedE(true);
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
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <UserData
                  key={employee.id}
                  id={employee.id}
                  firstName={employee.firstName}
                  lastName={employee.lastName}
                  email={employee.email}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

ListEmployees.propTypes = {
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
};

export default ListEmployees;
