import { useState, useRef, useEffect } from "react";
import "./AddEmployee.css";
import { getEmployee, updateEmployee } from "../../services/EmployeeService.js";
import { useNavigate, useParams } from "react-router-dom";
import iconoUser from "../../assets/iconoAddUser.png";
function EditEmployee() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const navigator = useNavigate();
  const { id } = useParams();
  const [employeToEdit, setEmployeToEdit] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [formValidity, setFormValidity] = useState({
    firstName: true,
    lastName: true,
    email: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeToEdit((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Verificar si el campo está lleno correctamente
    setFormValidity((prevValidity) => ({
      ...prevValidity,
      [name]: !!value.trim(), // true si el valor no está vacío, false de lo contrario
    }));
  };

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setEmployeToEdit(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const onUpdateEmployee = () => {
    updateEmployee(id, employeToEdit)
      .then((response) => {
        console.log("user updated");
        console.log(response.data);
        navigator("/employees");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar si todos los campos están llenos correctamente antes de enviar el formulario
    const isFormValid = Object.values(formValidity).every((isValid) => isValid);
    if (isFormValid) {
      onUpdateEmployee(employeToEdit);
    }
  };

  return (
    <div>
      <h1>Employee {id} Editor</h1>
      <div className="card2">
        <div className="card-header">
          <img src={iconoUser} alt="User Icon" className="user-icon" />
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="grid1">
              <label>First Name:</label>
              <label>Last Name:</label>
            </div>
            <div className="grid1">
              <input
                style={{ marginTop: "10px" }}
                type="text"
                name="firstName"
                value={employeToEdit.firstName}
                onChange={handleChange}
                className={`form-input ${
                  formValidity.firstName ? "" : "invalid"
                }`}
                ref={firstNameRef}
                required
              />
              <input
                type="text"
                name="lastName"
                value={employeToEdit.lastName}
                onChange={handleChange}
                className={`form-input ${
                  formValidity.lastName ? "" : "invalid"
                }`}
                ref={lastNameRef}
                required
              />
            </div>
            <div className="grid1">
              <label>Email:</label>
            </div>
            <div className="grid1">
              <input
                placeholder="example@dominio"
                type="email"
                name="email"
                value={employeToEdit.email}
                onChange={handleChange}
                className={`form-input ${formValidity.email ? "" : "invalid"}`}
                ref={emailRef}
                required
              />
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
              Update Employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditEmployee;
