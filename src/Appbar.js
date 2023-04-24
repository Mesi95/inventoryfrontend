import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Appbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            INVENTORY MANAGEMENT SYSTEM
          </Typography>
          <Button variant = "contained" onClick={()=>navigate('/Home')}>HOME</Button>
          <Button variant = "contained" onClick={()=>navigate('/EmployeeRegForm')}>EMPLOYEE</Button>
          <Button variant = "contained" onClick={()=>navigate('/Category')}>CATEGORY</Button>
          <Button variant = "contained" onClick={()=>navigate('/ListCategory')}>VIEW CATEGORY</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );

}
