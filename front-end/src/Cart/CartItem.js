import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  TextField,
  InputAdornment,
  Typography,
  IconButton
} from "@mui/material";

import { Add as AddIcon, Remove as DeductIcon } from "@mui/icons-material";

export default function CartItem() {
  return (
    <>
      <ListItem alignItems="center" sx={{ position: "relative" }}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Food Name" />
        
        <IconButton color="primary" variant="contained">
          <DeductIcon> </DeductIcon>
        </IconButton>
        <TextField
          defaultValue="1"
          id="outlined-number"
          type="number"
          inputProps={{
            min: 1,
            style: { textAlign: "center" },
            startAdornment: (
              <InputAdornment position="start">
                <DeductIcon />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ maxWidth: "50px" }}
          size="small"
        />
        <IconButton color="primary" variant="contained">
          <AddIcon></AddIcon>
        </IconButton>

        <Typography variant="body1" component="div" sx={{ ml: "20px" }}>
          Rs. 2,000
        </Typography>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
