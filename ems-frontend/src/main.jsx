import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import Department from "./components/Department/Department.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./components/Employee.jsx";
import AddEmployee from "./components/Employee/AddEmployee.jsx";
import EditEmployee from "./components/Employee/EditEmployee.jsx";
import EditDepartment from "./components/Department/EditDepartment.jsx";
import AddDepartment from "./components/Department/AddDepartment.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/employees" element={<Employee></Employee>}></Route>
        <Route path="/inicio" element={<App></App>}></Route>
        <Route
          path="/add-employee"
          element={<AddEmployee></AddEmployee>}
        ></Route>
        <Route
          path="/edit-employee/:id"
          element={<EditEmployee></EditEmployee>}
        ></Route>
        <Route path="/departments" element={<Department></Department>}></Route>
        <Route
          path="/add-department"
          element={<AddDepartment></AddDepartment>}
        ></Route>
        <Route
          path="/edit-department/:id"
          element={<EditDepartment></EditDepartment>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);
