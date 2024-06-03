import styles from "./Navbar.module.css";
import iconoNavbar from "../assets/iconoNavbar.png";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles["navbar-left"]}>
          <div className={styles["navbar-logo"]}>
            <i className="fas fa-code">
              <img
                src={iconoNavbar}
                alt="Icono Navbar"
                style={{ width: "60px", height: "60px" }}
              />
            </i>
          </div>
          <div className={styles["navbar-links"]}>
            <a href="/">Home</a>
            <a href="/employees">Employees</a>
            <a href="/departments">Departments</a>
            <a href="/todos">Todos</a>
          </div>
        </div>
        <div className={styles["navbar-right"]}>
          <div className={styles["search-box"]}>
            <input type="text" placeholder="Buscar..." />
            <button>
              <i className="fas fa-search">Buscar</i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
