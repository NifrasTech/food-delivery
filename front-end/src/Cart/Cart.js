import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  IconButton,
  List, 
} from "@mui/material";
import Bottom from "../layout/Bottom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import BackIcon from "@mui/icons-material/ArrowBack";

import CartItem from "./CartItem";

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
            Your Orders
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
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
      </List>
      <Bottom />
    </>
  );
}
