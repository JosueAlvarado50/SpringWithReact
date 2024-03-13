import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ListEmployees.css";
import { useNavigate } from "react-router-dom";
import { listEmployees } from "../services/EmployeeService";
import iconoEditar2 from "../assets/iconoEditar2.png";
import iconoEliminar from "../assets/iconoEliminar.png";
import { deleteEmployee } from "../services/EmployeeService";
import { departmentList } from "../services/DepartmentService";
function ListEmployees() {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const navigator = useNavigate();
  const [deletedE, setDeletedE] = useState(false);

  useEffect(() => {
    departmentList()
      .then((response) => {
        console.log("Lista de departamentos: ");
        console.log(response.data);
        setDepartments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [deletedE]);

  useEffect(() => {
    listEmployees()
      .then((response) => {
        console.log(response.data);
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
  const getDeparmentName = (departmentId) => {
    const department = departments.find((depa) => depa.id === departmentId);
    return department ? department.departmentName : "Unknown";
  };

  const UserData = ({ id, firstName, lastName, email, department }) => {
    return (
      <tr>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td style={{ textAlign: "center" }}>{getDeparmentName(department)}</td>
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
                <th>Department</th>
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
                  department={employee.departmentId}
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
  department: PropTypes.number,
};

export default ListEmployees;
