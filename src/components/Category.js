import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Grid, Paper, Button} from '@mui/material';

export default function Category() {
    const paperStyle={padding:'50px 20px',width:500,margin:"40px auto"}
    const [category_name,setName]=React.useState('')
    const [product_type,setType]=React.useState('')
    const [description,setDescription]=React.useState('')
    const handleClick=(e)=>{
        e.preventDefault()
        const category={category_name,product_type,description}
        console.log(category)
        fetch("http://localhost:8080/category/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(category)
        }).then(()=>{
            console.log("New Categorey Added")
        })
    }
   
  return (    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { marginTop: 1 ,marginLeft:10},
      }}
      noValidate
      autoComplete="off"
    >
    <Container>
    <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"black"}}>ADD CATEGOREY</h1>
    <Grid container direction={"column"} spacing={3}>
          <Grid item >
                <TextField id="outlined-basic" label="Category Name" variant="outlined" fullWidth 
                value={category_name}
                onChange={(e)=>setName(e.target.value)}/>
           </Grid>
           <Grid item >
                <TextField id="outlined-basic" label="Prodct Type" variant="outlined" fullWidth 
                value={product_type}
                onChange={(e)=>setType(e.target.value)}/>
            </Grid>
          <Grid item >
                 <TextField id="outlined-basic" label="Description" variant="outlined" fullWidth 
                 value={description}
                 onChange={(e)=>setDescription(e.target.value)}/>
            </Grid>          
            <Grid item >
            <Button variant="contained" color="success" onClick={handleClick}>
                 ADD
            </Button>
            </Grid>
    </Grid>
    </Paper>
    </Container>
    </Box>
  );
}