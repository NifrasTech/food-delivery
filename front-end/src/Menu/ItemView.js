import * as React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import BackIcon from "@mui/icons-material/ArrowBack";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ItemView({ handleClose, open }) {
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <BackIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Food Information
            </Typography>
            <Button color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Stack spacing={2}>
          <CardMedia
            component="img"
            height="300"
            image="https://via.placeholder.com/100x100"
          />
          <Box sx={{ paddingRight: "10px", paddingLeft: "10px" }}>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ flex: 1, fontWeight: "500" }}
                variant="h6"
                component="div"
              >
                Food Name
              </Typography>
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h5"
                component="div"
              >
                Rs. 2,000.00
              </Typography>
            </Box>
            <Typography sx={{ mt: "5px" }}>Description:</Typography>
            <Typography variant="body1">
              Aliquip ea irure et ut sunt eiusmod Lorem. Sunt ea sit incididunt
              labore ex adipisicing in et tempor voluptate excepteur dolore.
              Officia eiusmod id ut laborum elit ex amet velit veniam.Aliquip ea
              irure et ut sunt eiusmod Lorem. Sunt ea sit incididunt labore ex
              adipisicing in et tempor voluptate excepteur dolore. Officia
              eiusmod id ut laborum elit ex amet velit veniam.
            </Typography>
          </Box>
        </Stack>
      </Dialog>
    </div>
  );
}
