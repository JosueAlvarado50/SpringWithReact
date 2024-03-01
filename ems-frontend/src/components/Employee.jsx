import ListEmployees from "./ListEmployees";
import { useNavigate } from "react-router-dom";
import "./Employee.css";
function Employee() {
  const navigator = useNavigate();

  function addNewEmployee(params) {
    navigator("/add-employee");
  }
  return (
    <div className="container">
      <button className="buttonAddEmployee" onClick={addNewEmployee}>
        Add employee
      </button>
      <ListEmployees></ListEmployees>
      <div className="relleno"></div>
    </div>
  );
}

export default Employee;
