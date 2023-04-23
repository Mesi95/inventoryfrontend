import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Paper} from '@mui/material';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

export default function ListCategory() {
    const paperStyle={padding:'50px 50px',width:1000,margin:"40px auto"}
     const [category_name,setName]=React.useState('')
     const [product_type,setType]=React.useState('')
     const [description,setDescription]=React.useState('')
    const [categorys,setCategorys]=React.useState([])
    const [category_id,setCategoryId]=React.useState(null)
    
    React.useEffect(() => {
        getCategory();
      }, [])

  function getCategory() {
    fetch("http://localhost:8080/category/getAll").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setCategorys(resp)
        setName(resp[0].category_name)
        setType(resp[0].product_type)
        setDescription(resp[0].description)
        setCategoryId(resp[0].category_id)
      })
    })
  }
  return (    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { marginTop: 1 ,marginLeft:20},
      }}
      noValidate
      autoComplete="off"
    >
    <Container>
    <Paper elevation={0} style={paperStyle}>
      <button>ADD CATEGOREY</button>
        <h1 style={{color:"black"}}>VIEW CATEGOREY</h1> 
    <TableContainer component={Paper}>
  <Table sx={{ minWidth: 1000 }} aria-label="customized table">
  <thead>
  <th> Id </th>
  <th> Category Name</th>
  <th> Prodct Type</th>
  <th> Description</th>
  </thead>
  <tbody> 
  {categorys.map((categorys,i)=>
    <tr key={i}> 
        <td>{categorys.category_id}</td>
   <td> {categorys.category_name} </td>
   <td> {categorys.product_type} </td> 
   <td> {categorys.description} </td> 
   </tr>
  )
  }
</tbody>
</Table>
</TableContainer>
</Paper>
    </Container>
    </Box>
  );
}