import styles from "./App.module.css";
import Home from "./components/Pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Employee from "./components/Employee";
import AddEmployee from "./components/Employee/AddEmployee";
import EditEmployee from "./components/Employee/EditEmployee";
import Department from "./components/Department/Department";
import AddDepartment from "./components/Department/AddDepartment";
import EditDepartment from "./components/Department/EditDepartment";
import Todo from "./components/Todo/Components/Todo";
import AddTodo from "./components/Todo/Components/AddTodo";
import EditTodo from "./components/Todo/EditTodo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.mainContainer}>
      <Header></Header>
      <BrowserRouter>
        <main className={styles.body}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/employees" element={<Employee></Employee>}></Route>
            <Route path="/todos" element={<Todo></Todo>}></Route>
            <Route
              path="/add-employee"
              element={<AddEmployee></AddEmployee>}
            ></Route>
            <Route path="/add-todo" element={<AddTodo></AddTodo>}></Route>
            <Route
              path="/edit-employee/:id"
              element={<EditEmployee></EditEmployee>}
            ></Route>
            <Route
              path="/edit-todo/:id"
              element={<EditTodo></EditTodo>}
            ></Route>
            <Route
              path="/departments"
              element={<Department></Department>}
            ></Route>
            <Route
              path="/add-department"
              element={<AddDepartment></AddDepartment>}
            ></Route>
            <Route
              path="/edit-department/:id"
              element={<EditDepartment></EditDepartment>}
            ></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
