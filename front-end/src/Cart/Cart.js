import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@mui/material";
import Bottom from "../layout/Bottom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import BackIcon from "@mui/icons-material/ArrowBack";

export default function Cart() {
  return (
    <>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            //   onClick={handleClose}
            aria-label="close"
          >
            <BackIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Food Information
          </Typography>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <LocalMallIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <List sx={{ width: "100%" }}>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText primary="Brunch this weekend?" />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
      <Bottom />
    </>
  );
}
