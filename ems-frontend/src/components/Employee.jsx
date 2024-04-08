import ListEmployees from "./ListEmployees";
import { useNavigate } from "react-router-dom";
import "./Employee.css";
function Employee() {
  const navigator = useNavigate();

  function addNewEmployee() {
    navigator("/add-employee");
  }
  return (
    <div>
      <div className="buttonAddEmployee">
        <button onClick={addNewEmployee}>Add employee</button>
      </div>
      <ListEmployees></ListEmployees>
    </div>
  );
}

export default Employee;
