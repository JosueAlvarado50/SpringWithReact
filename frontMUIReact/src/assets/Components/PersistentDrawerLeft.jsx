import React from "react";
import {
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
  Menu as MenuIcon,
} from "@mui/icons-material";

const drawerWidth = 240;
const minimizedWidth = 60;

export default function PersistentDrawerLeft({ open, toggleDrawer }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidth : minimizedWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : minimizedWidth,
            boxSizing: "border-box",
            transition: "width 0.3s",
            position: "fixed",
            top: 90, // altura de la AppBar
            height: "calc(100% - 64px)", // para ocupar toda la altura menos la AppBar
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                {open && <ListItemText primary={text} />}
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                {open && <ListItemText primary={text} />}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        edge="start"
        sx={{
          position: "fixed",
          top: 64, // altura de la AppBar para que no se superponga
          left: open ? drawerWidth - 40 : minimizedWidth - 40,
          transition: "left 0.3s",
        }}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
}
