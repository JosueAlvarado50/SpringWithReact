import ListEmployees from "./ListEmployees";
import { useNavigate } from "react-router-dom";
function Employee() {
  const navigator = useNavigate();

  function addNewEmployee(params) {
    navigator("/add-employee");
  }
  return (
    <div>
      <button onClick={addNewEmployee}>Add employee</button>
      <ListEmployees></ListEmployees>
    </div>
  );
}

export default Employee;
