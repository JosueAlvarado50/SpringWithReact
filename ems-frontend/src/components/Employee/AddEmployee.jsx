import { useState, useRef } from "react";
import "./AddEmployee.css";
import { createEmployee } from "../../services/EmployeeService.js";
import { useNavigate } from "react-router-dom";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
    onAddEmployee(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <div>
      <h1>User Register</h1>
      <form onSubmit={handleSubmit} className="add-employee-form">
        <label className="form-label">
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
            ref={firstNameRef}
            required
          />
        </label>
        <br />
        <label className="form-label">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
            ref={lastNameRef}
            required
          />
        </label>
        <br />
        <label className="form-label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            ref={emailRef}
            required
          />
        </label>
        <br />
        <button type="submit" className="submit-button">
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
