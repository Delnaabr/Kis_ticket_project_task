import * as React from "react";

import {Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import './footer.css';


function Footer() {
  return (
    
    
      <div className='footerstyle' >

        <Typography variant="h6"
          color="inherit"
          component="div"
          sx={{ flexGrow: 0.9}}
          fontSize="16px">
          Copyright © 2020 KISTicket V1.10.1 </Typography>
        <Typography component='div'
          fontSize="16px" >

          <Link href='/'
            underline="none"
            style={{ marginRight: 15 }}

          >HOME</Link>
          <Link href='#'
            underline="none" >SUPPORT</Link>
        </Typography>
        </div>
     
  

  );
}
export default Footer;


