import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import iconoDepartamento from "../../assets/iconoDepartamento.png";
import { createDepartment } from "../../services/DepartmentService";
function AddDepartment() {
  const departmentNameRef = useRef(null);
  const deparmentDescriptionRef = useRef(null);
  const navigator = useNavigate();
  const [departmentToAdd, setDepartmentToAdd] = useState({
    departmentName: "",
    departmentDescription: "",
  });
  const [formValidity, setFormValidity] = useState({
    departmentName: true,
    departmentDescription: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartmentToAdd((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    //verifica si el campo esta llenado correctamente
    setFormValidity((prevValidity) => ({
      ...prevValidity,
      [name]: !!value.trim(),
    }));
  };

  const onAddDepartment = () => {
    createDepartment(departmentToAdd)
      .then((response) => {
        console.log("department created!");
        console.log(response.data);
        navigator("/departments");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(formValidity).every((isValid) => isValid);
    if (isFormValid) {
      onAddDepartment(departmentToAdd);
      setDepartmentToAdd({
        departmentName: "",
        departmentDescription: "",
      });
      departmentNameRef.current.value = "";
      deparmentDescriptionRef.current.value = "";
    }
  };

  return (
    <div>
      <h1>Department Creator</h1>
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
                  value={departmentToAdd.departmentName}
                  onChange={handleChange}
                  className={`form-input ${
                    formValidity.firstName ? "" : "invalid"
                  }`}
                  ref={departmentNameRef}
                  required
                />
              </div>
              <div>
                <div className="espacioCampos"></div>
                <div>
                  <label htmlFor="departmentDescription">
                    Department Description:
                  </label>
                </div>

                <input
                  id="departmentDescription"
                  type="text"
                  name="departmentDescription"
                  value={departmentToAdd.departmentDescription}
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
              Create Department
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddDepartment;
