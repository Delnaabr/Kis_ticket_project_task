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
import { useNavigate } from 'react-router-dom';
import {LoadingButton} from '@mui/lab';



const AddProduct = () => {
  let navigate = useNavigate();

  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [dis, setDis] = useState('')
  const [price, setPrice] = useState('')



  function handleSubmit() {

    const FormPostdata = new FormData();
    FormPostdata.append("name", name)
    FormPostdata.append('price', price)
    FormPostdata.append('description', dis)
    FormPostdata.append('image', image)
    

    axios(addUrl,{
      method:'POST',
      data:FormPostdata

    }).then((res) =>{
       
       alert('Product Added Successfully')
       navigate('../ViewProducts');
    }).catch((error)=>{
        alert(error)
    });
  }


  return (
    <>

      <Paper
        padding="20"
        height="fit-content"
        width="280"
        elevation={15}
        sx={{ ml: '30%', mr: '30%', mb: '10%', mt: '5%' }}
        style={{ borderRadius: '15px', bgcolor: 'black' }}
      >

        <Typography
          paddingTop={"7%"}
          align='center' gutterBottom
          variant="h5" >ADD PRODUCT
        </Typography>

        <Grid
          sx={{ pt: '5%', pb: '20%', pr: '20%', pl: '20%' }}>

          <TextField
            sx={{ width: '100%' }}
            type="text"
            variant='filled'
            required
            label="Product Name"
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}

          />

          <TextField
            sx={{ width: '100%', mt: '8%' }}
            type="text"
            label="Description"
            variant="filled"
            required
            name='description'
            value={dis}
            onChange={(e) => setDis(e.target.value)}

          />

          <TextField
            sx={{ width: '100%', mt: '8%', mb: '6%' }}
            type="number"
            label="Price"
            variant="filled"
            required
            name='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}

          />
          <input accept="image/*" type="file"
            onChange={(e) => setImage(e.target.files[0])} />

          <Button

            type="submit"
            variant="contained"
            color="secondary"
            sx={{ width: '100%', mt: '8%' }}
            onClick={handleSubmit} ><LoadingButton loading variant="outlined">
            Add
          </LoadingButton>


          </Button>
        </Grid>
      </Paper>

    </>
  )
};


export default AddProduct;