import { useState } from 'react';
import Navbar from './assets/Components/NavBar';
import Footer from './assets/Components/Footer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; // Para el fondo

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundImage: 'url(https://img.freepik.com/vector-gratis/particula-tecnologia-abstracta-realista-fondo_23-2148431735.jpg?w=900&t=st=1717446715~exp=1717447315~hmac=bc843efe4afeb5847bf3dfa8fd1796eb20617818919672ebcbe8e30730b63a89)', // URL de la imagen de fondo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        p: 2 // Espacio alrededor del contenido
      }}
    >
      <Container
        component={Paper} // Para agregar un fondo blanco con sombras
        sx={{
          flex: 1, // Para ocupar todo el espacio disponible
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between', // Distribuir el contenido con espacio entre Navbar, contenido principal y Footer
          mt: 4,
          mb: 4,
          p: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco con transparencia
          borderRadius: '15px',
          boxShadow: 3,
          maxWidth: 'md', // Anchura máxima para el contenido centrado
          minHeight: '100vh' // Para que el container ocupe toda la altura de la pantalla
        }}
      >
        <Navbar />
        <Container component="main" sx={{ mt: 8, mb: 2, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ my: 4, textAlign: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome to My Website
            </Typography>
            <Typography variant="body1">
              This is the main content of your homepage.
            </Typography>
          </Box>
        </Container>
        <Footer />
      </Container>
    </Box>
  );
}

export default App;