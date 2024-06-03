import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
    return (
      <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'primary.main' }}>
        <Typography variant="body1" color="white" align="center">
          © 2024 My Website. All rights reserved.
        </Typography>
      </Box>
    );
  };
  
  export default Footer;