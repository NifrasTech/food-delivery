import * as React from "react";
import { Box, Paper, TextField, IconButton, Badge,Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import LocalMallIcon from "@mui/icons-material/LocalMall";
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
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <LocalMallIcon />
              </Badge>
            </IconButton>
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
        <Paper 
        sx={{
          height: '70px', marginTop: 'auto', 
          borderStartEndRadius:'30px', borderStartStartRadius:'30px',
          display:'flex', alignItems:'center',
          padding:'10px', paddingRight:'20px', paddingLeft:'20px'
          }}
        elevation={3}>
          <TextField
          id="outlined-number"
          label="Quantity"
          type="number"
          inputProps={{ min: 1}}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{maxWidth:'130px', mr:'15px'}}
        />
          <Button variant="contained" size="large" sx={{width:'100%'}} onClick={handleClose}>
            ADD TO CART
          </Button>
        </Paper>
        
      </Dialog>
    </div>
  );
}
