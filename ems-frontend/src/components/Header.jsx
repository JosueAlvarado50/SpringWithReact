import "./Header.css";
import iconoNavbar from "../assets/iconoNavbar.png";
function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <i className="fas fa-code">
            <img
              src={iconoNavbar}
              alt="Icono Navbar"
              style={{ width: "60px", height: "60px" }}
            />
          </i>
        </div>
        <div className="navbar-links">
          <a href="/inicio">Inicio</a>
          <a href="/employees">Employees</a>
          <a href="/departments">Departments</a>
        </div>
      </div>
      <div className="navbar-right">
        <div className="search-box">
          <input type="text" placeholder="Buscar..." />
          <button>
            <i className="fas fa-search">Buscar</i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
