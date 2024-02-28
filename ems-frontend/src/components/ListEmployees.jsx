import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ListEmployees.css";
import { listEmployees } from "../services/EmployeeService";
function ListEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const UserData = ({ id, firstName, lastName, email }) => {
    return (
      <tr>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <div>
      ListEmployeeComponent
      <div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
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
