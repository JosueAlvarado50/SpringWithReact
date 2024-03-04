import ListDepartment from "./ListDepartment";
import "./Department.css";
import { useNavigate } from "react-router-dom";
function Department() {
  const navigator = useNavigate();
  function addNewDepartment() {
    navigator("/add-department");
  }

  return (
    <div>
      <div className="divButton">
        <button onClick={addNewDepartment}>Add Department</button>
      </div>

      <ListDepartment></ListDepartment>
    </div>
  );
}

export default Department;
