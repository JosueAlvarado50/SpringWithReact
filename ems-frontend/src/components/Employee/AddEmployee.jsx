import { useState, useRef } from "react";
import "./AddEmployee.css";
import { createEmployee } from "../../services/EmployeeService.js";
import { useNavigate } from "react-router-dom";
import iconoUser from "../../assets/iconoAddUser.png";
function AddEmployee() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const navigator = useNavigate();

  const [formData, setFormData] = useState({
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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Verificar si el campo está lleno correctamente
    setFormValidity((prevValidity) => ({
      ...prevValidity,
      [name]: !!value.trim(), // true si el valor no está vacío, false de lo contrario
    }));
  };

  const onAddEmployee = () => {
    createEmployee(formData)
      .then((response) => {
        console.log("user created");
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
      onAddEmployee(formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
      });
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
    }
  };

  return (
    <div>
      <h1>Employee Register</h1>
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
                type="text"
                name="firstName"
                value={formData.firstName}
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
                value={formData.lastName}
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
                value={formData.email}
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
              Add Employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
