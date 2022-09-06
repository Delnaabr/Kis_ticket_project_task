import * as React from "react";

import { AppBar, Button, IconButton } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function Header() {

  return (
    <AppBar position="sticky" style={{ backgroundColor: "black" }} >
      <Toolbar >
        <Typography variant="h6"
          color="inherit"
          component="div">
          <img src=' https://s3-us-west-2.amazonaws.com/wwls3bucket/Frontend/logo/KIS_Logo.png' alt='logo'></img>

        </Typography>
        <Typography
          component='div'><b> | Kis Kiosk </b></Typography>
        <Box flexGrow={1} />
        <Button variant="text" style={{ color: 'white' }} 
         sx={{ display: { xs: "none", sm: "block" } }}
         endIcon={<AddShoppingCartIcon />} href="../AddProduct"
        >
        Add Product 
        </Button>
        <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon sx={{ display: { xs: "block", sm: "none" } }}  />
      </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;