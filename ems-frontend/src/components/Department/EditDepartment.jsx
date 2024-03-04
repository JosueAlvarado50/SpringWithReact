import { useEffect, useRef, useState } from "react";
import "./EditDepartment.css";
import {
  getDepartmentById,
  updateDepartment,
} from "../../services/DepartmentService";
import { useNavigate, useParams } from "react-router-dom";
import iconoDepartamento from "../../assets/iconoDepartamento.png";

function EditDepartment() {
  const departmentNameRef = useRef(null);
  const deparmentDescriptionRef = useRef(null);
  const navigator = useNavigate();
  const { id } = useParams();
  const [departmentToEdit, setDepartmentToEdit] = useState({
    departmentName: "",
    departmentDescription: "",
  });
  const [formValidity, setFormValidity] = useState({
    departmentName: true,
    departmentDescription: true,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartmentToEdit((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    //verifica si el campo esta llenado correctamente
    setFormValidity((prevValidity) => ({
      ...prevValidity,
      [name]: !!value.trim(),
    }));
  };

  useEffect(() => {
    if (id) {
      getDepartmentById(id)
        .then((response) => {
          setDepartmentToEdit(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const onUpdateDepartment = () => {
    updateDepartment(id, departmentToEdit)
      .then((response) => {
        console.log("department updated!");
        console.log(response.data);
        navigator("/departments");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // verifica si todos los campos estan llenos
    const isFormValid = Object.values(formValidity).every((isValid) => isValid);
    if (isFormValid) {
      onUpdateDepartment(departmentToEdit);
    }
  };

  return (
    <div>
      <h1>Department {id} Editor</h1>
      <div className="card2">
        <div className="card-header">
          <img src={iconoDepartamento} alt="User Icon" className="user-icon" />
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="campos">
              <div className="espacioCampos"></div>
              <div>
                <div>
                  <label htmlFor="departmentName">Department Name:</label>
                </div>
                <input
                  type="text"
                  id="departmentName"
                  name="departmentName"
                  value={departmentToEdit.departmentName}
                  onChange={handleChange}
                  className={`form-input ${
                    formValidity.firstName ? "" : "invalid"
                  }`}
                  ref={departmentNameRef}
                  required
                />
              </div>
              <div>
                <div>
                  <label htmlFor="departmentDescription">
                    Department Description:
                  </label>
                </div>

                <input
                  id="departmentDescription"
                  type="text"
                  name="departmentDescription"
                  value={departmentToEdit.departmentDescription}
                  onChange={handleChange}
                  className={`form-input ${
                    formValidity.lastName ? "" : "invalid"
                  }`}
                  ref={deparmentDescriptionRef}
                  required
                />
              </div>
            </div>
            <br />
            <br />
            <button
              className="button"
              type="submit"
              disabled={
                !Object.values(formValidity).every((isValid) => isValid)
              }
            >
              Update Department
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditDepartment;
