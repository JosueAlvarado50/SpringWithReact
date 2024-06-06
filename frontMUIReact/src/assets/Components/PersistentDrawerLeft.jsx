import React from "react";
import {
  Typography,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  CssBaseline,
} from "@mui/material";
import {
  Inbox as InboxIcon,
  Mail as MailIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import EngineeringIcon from "@mui/icons-material/Engineering";

const drawerWidth = 240;
const minimizedWidth = 52;

export default function PersistentDrawerLeft({ open, toggleDrawer }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidth : minimizedWidth,
          flexShrink: 0,
          whiteSpace: "nowrap",
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : minimizedWidth,
            boxSizing: "border-box",
            transition: "width 0.3s",
            position: "fixed",
            top: 88, // altura de la AppBar
            bottom: 0,
            overflow: "hidden", // Ocultar scroll horizontal y vertical
            backgroundColor: "#405c4c", // Color de fondo del Drawer
            color: "#FFFFFF", // Color del texto
          },
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
        <Box
          sx={{
            overflowY: "auto", // Permitir solo scroll vertical
            overflowX: "hidden", // Ocultar scroll horizontal
            width: open ? drawerWidth : minimizedWidth,
          }}
        >
          <List>
            {open && (
              <Typography variant="h6" sx={{ pl: 1, pt: 2, color: "#FFFFFF" }}>
                SpringBoot and React
              </Typography>
            )}
            <ListItem button>
              <ListItemIcon>
                <GroupIcon sx={{ color: "#FFFFFF" }} />
              </ListItemIcon>
              {open && (
                <ListItemText primary="Employees" sx={{ color: "#FFFFFF" }} />
              )}
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <BusinessIcon sx={{ color: "#FFFFFF" }} />
              </ListItemIcon>
              {open && (
                <ListItemText primary="Departments" sx={{ color: "#FFFFFF" }} />
              )}
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <EngineeringIcon sx={{ color: "#FFFFFF" }} />
              </ListItemIcon>
              {open && (
                <ListItemText primary="Todos" sx={{ color: "#FFFFFF" }} />
              )}
            </ListItem>
          </List>
          <Divider sx={{ borderColor: "#FFFFFF" }} />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <InboxIcon sx={{ color: "#FFFFFF" }} />
                  ) : (
                    <MailIcon sx={{ color: "#FFFFFF" }} />
                  )}
                </ListItemIcon>
                {open && (
                  <ListItemText primary={text} sx={{ color: "#FFFFFF" }} />
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <IconButton
        color="inherit"
        aria-label="toggle drawer"
        onClick={toggleDrawer}
        edge="end"
        sx={{
          backgroundColor: "black",
          color: "white",
          position: "fixed",
          top: 110, // Ajusta según sea necesario
          left: open ? drawerWidth - 10 : minimizedWidth - 10,
          zIndex: 1300, // Asegura que esté por encima del drawer
          transition: "left 0.3s",
          "&:hover": {
            backgroundColor: "black",
          },
        }}
      >
        {open ? <ArrowBackIcon /> : <ArrowForwardIcon />}
      </IconButton>
    </Box>
  );
}
