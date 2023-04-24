import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

export default function ListCategory() {
  const paperStyle = { padding: '50px 50px', width: 1000, margin: "40px auto" }
  const [product_name, setName] = React.useState('')
  const [product_number, setNumber] = React.useState('')
  const [reg_date, setDate] = React.useState('')
  const [uom, setUom] = React.useState('')
  const [prodcts, setProducts] = React.useState([])
  const [categorys, setCategorys] = React.useState([])
  const [product_id, setProductId] = React.useState(null)
  const [category_name, setCName] = React.useState(null)
  const [category_id, setCId] = React.useState(null)

  React.useEffect(() => {
    getProduct();
    pushCategory();
  }, [])

  function getProduct() {
    fetch("http://localhost:8080/product/getAll").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setProducts(resp)
        setName(resp[0].product_name)
        setNumber(resp[0].product_number)
        setDate(resp[0].reg_date)
        setUom(resp[0].uom)
        // setCName(resp[0].category_name)
        setCId(resp[0].category_id)
      })
    })
  }
  function getCategory() {
    fetch("http://localhost:8080/category/getAll").then((result) => {
      result.json().then((resp) => {
        setCategorys(resp)
        // console.warn(resp)
        setCName(resp[0].category_name)
        setCId(resp[0].category_id)
      })
    })
  }
  function pushCategory() {
    fetch("http://localhost:8080/product/{product_id}/category/{category_id}").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setProductId(resp[0].product_id)
        setCId(resp[0].category_id)
      })
    })
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { marginTop: 1, marginLeft: 20 },
      }}
      noValidate
      autoComplete="off"
    >
      <Container>
      <h1 style={{ color: "black" }}>VIEW PRODUCT</h1>
        {/* <Paper padding={10} elevation={1} style={paperStyle}> */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label="customized table">
              <thead>
                <th> Id </th>
                <th> Prodct Number</th>
                <th> Prodct Name</th>
                <th>Date</th>
                <th>Unit of Measure</th>
                <th>Category Name</th>
              </thead>
              <tbody>
                {prodcts.map((prodcts, i) =>
                  <tr key={i}>
                    <td>{prodcts.product_id}</td>
                    <td> {prodcts.product_number} </td>
                    <td> {prodcts.product_name} </td>
                    <td> {prodcts.reg_date} </td>
                    <td> {prodcts.uom} </td>
                    <td> {prodcts.category_id} </td>
                  </tr>
                )
                }
              </tbody>
            </Table>
          </TableContainer>
        {/* </Paper> */}
      </Container>
    </Box>
  );
}