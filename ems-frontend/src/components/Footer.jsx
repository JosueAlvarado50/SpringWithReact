import "./Footer.css";
import logoFace from "../assets/iconoFace.png";
import logoInsta from "../assets/iconoInsta.png";
import logoWhats from "../assets/iconoWhats.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Información de contacto</h2>
          <p>Dirección: Calle Principal #123, Ciudad, País</p>
          <p>Teléfono: +123456789</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="footer-section">
          <h2>Enlaces útiles</h2>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Sobre nosotros</a>
            </li>
            <li>
              <a href="/">Servicios</a>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Síguenos en las redes sociales</h2>
          <div className="social-icons">
            <a href="/">
              <i className="fab fa-facebook">
                <img src={logoFace}></img>
              </i>
            </a>
            <a href="/">
              <i className="fab fa-twitter">
                <img src={logoWhats}></img>
              </i>
            </a>
            <a href="/">
              <i className="fab fa-instagram">
                <img src={logoInsta}></img>
              </i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
