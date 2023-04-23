import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Container, Grid, Paper, Button} from '@mui/material';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Refresh } from '@mui/icons-material';

export default function Product() {
    const paperStyle={padding:'50px 20px',width:500,margin:"40px auto"}
    const [product_name,setName]=React.useState('')
    const [product_number,setNumber]=React.useState('')
    const [reg_date,setDate]=React.useState('')
    const [uom,setUom]=React.useState('')
    const [categorys,setCs]=React.useState([])
    const [category_id,setCategory]=React.useState([])
    const refresh = () => window.location.reload(true)
    const handleClick=(e)=>{
        e.preventDefault()
        const product={product_name,product_number,reg_date,uom,category_id}
        console.log(product)
        fetch("http://localhost:8080/product/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(product)
        }).then(()=>{
            console.log("New Product Added")
        })
        setName('');
        setNumber('');
        setUom('');
        setDate('');     
    }
    React.useEffect(()=>{
      fetch("http://localhost:8080/category/getAll").then(data=>data.json()).then((val)=>setCs(val));
      },[])
      console.log(categorys,"categorys")
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
        <h1 style={{color:"black"}}>ADD PRODUCT</h1>
    <Grid container direction={"column"} spacing={3}>
          <Grid item >
                <TextField id="outlined-basic" label="Product Name" variant="outlined" fullWidth 
                value={product_name}
                onChange={(e)=>setName(e.target.value)}/>
           </Grid>
           <Grid item >
                <TextField id="outlined-basic" label="Prodct Number" variant="outlined" fullWidth 
                value={product_number}
                onChange={(e)=>setNumber(e.target.value)}/>
            </Grid>
          <Grid item >
          <DatePicker selected={reg_date} onChange={(date) => setDate(date)} />
            </Grid>          
            <Grid item >
                 <TextField id="outlined-basic" label="Unit of Measure" variant="outlined" fullWidth 
                 value={uom}
                 onChange={(e)=>setUom(e.target.value)}/>
            </Grid> 
            <Grid item >
              <select id="outlined-basic" label="Category" variant="outlined" fullWidth >
                 {
                 categorys.map((opts,i)=><option>{opts.category_name}</option>)
                 }
                 </select>  
            </Grid>
            <Grid item >
            <Button variant="contained" color="success" onClick={handleClick}>
                 ADD
            </Button>
            <Button variant="contained" color="success" onClick={refresh}>
                 REFRESH
            </Button>
            </Grid>
    </Grid>
    </Paper>
    </Container>
    </Box>     
  );
}
