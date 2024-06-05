import { useState } from "react";
import Navbar from "./assets/Components/NavBar";
import Footer from "./assets/Components/Footer";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper"; // Para el fondo
import SignIn from "./assets/Components/Pages/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Components/Pages/Home";
import SignUp from "./assets/Components/Pages/SignUp";
import PersistentDrawerLeft from "./assets/Components/PersistentDrawerLeft";

function App() {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <BrowserRouter>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundImage:
            "url(https://www.solofondos.com/wp-content/uploads/2015/11/Fondos-web.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          p: 2, // Espacio alrededor del contenido
        }}
      >
        <Container
          component="div" // Para agregar un fondo blanco con sombras
          sx={{
            flex: 1, // Para ocupar todo el espacio disponible
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // Distribuir el contenido con espacio entre Navbar, contenido principal y Footer
            mt: 9,
            mb: 4,
            disableGutters: true,
            backgroundColor: "rgba(255, 255, 255, 255)", // Fondo blanco con transparencia
            borderRadius: "15px",
            boxShadow: 3,
            maxWidth: "md", // Anchura máxima para el contenido centrado
            minHeight: "100vh", // Para que el container ocupe toda la altura de la pantalla
          }}
        >
          <Navbar />
          <PersistentDrawerLeft open={open} toggleDrawer={toggleDrawer} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Login" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
          <Footer />
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
