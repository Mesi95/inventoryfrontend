import * as React from 'react';
import Box from '@mui/material/Box';
import { Container} from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Appbar from './Appbar';

export default function Home() {
   
  return (    

    <Box
      component="form"
      sx={{
        '& > :not(style)': { marginTop: 1 ,marginLeft:1},
      }}
      noValidate
      autoComplete="off"
    >
    <Container>
    <Appbar/>
    </Container>
    </Box>
  );
}