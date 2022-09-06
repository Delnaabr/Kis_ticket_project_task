import React, { useState } from 'react';
import axios from 'axios';
import {
    TextField,
    Typography,
    Button,
    Grid,
    Paper
  } from "@mui/material";
  import { addUrl } from '../../utils/utils';



const AddProduct = () => {
  
  const [formValue, setformValue] = React.useState({
    name:'',
    description:'',
    price:'',
  
  });

const [image, setImage]=useState('')
  
    function handleSubmit () {
      // store the states in the form data
      const addFormData = new FormData();
      addFormData.append('name',formValue.name);
      addFormData.append('description',formValue.description); 
      addFormData.append('price', formValue.price); 
      addFormData.append('image', image);
    
       axios("http://172.16.1.44:8083/api/addproducts", addFormData)
    }
  
    const handleChange = (event) => {
      setformValue({
        ...formValue,
        [event.target.name]: event.target.value
      });
    }
    

  return (
    <>
    <Paper 
    elevation={15} 
    sx={{ml:'25%', mr:'25%',mb:'10%',mt:'5%'}} 
    style={{borderRadius:'15px'}}>
    
    <Typography 
     sx={{ pl:'35%',pt:'10%' }} 
     fontSize={'30px'} 
     fontFamily={'Neue'} 
     variant="h5" >ADD PRODUCT 
     </Typography> 
    <Grid sx={{pt:'10%',pb:'20%',pr:'20%',pl:'20%'}}>
  
        <form  onSubmit={handleSubmit}>
    
          <TextField
            style={{width:'100%'}}
            type="text"
            label="Product Name"
            variant="outlined"
            required
            name='name'
            value={formValue.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <TextField
            style={{width:'100%'}}
            type="text"
            label="Description"
            variant="outlined"
            required
            name='description'
            value={formValue.description}
            onChange={handleChange}
          />
          <br />
          <br />
          <TextField
            style={{width:'100%' }}
            type="number"
            label="Price"
            variant="outlined"
            required
            name='price'
            value={formValue.price}
           onChange={handleChange}
          />
          <br /><br />      
          <input accept="image/*" 
            type='file' 
            placeholder="Image" 
            name='image'
            value={image}
            onChange={(e)=>setImage(e.target.files[0])}/>
          
          <br /><br/>
  
          <Button 
           type="submit"
           variant="contained" 
           color="secondary" 
           sx={{width:'100%'}}
           onClick={handleSubmit}
           >Add
                 
          </Button>
     
        </form>
        </Grid>
        </Paper>
        </>
  )
};


export default AddProduct;