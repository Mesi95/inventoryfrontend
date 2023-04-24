import React from 'react';
import './App.css';
import Appbar from './Appbar';
import Home from './Home';
import Loginpage from './Loginpage';
import EmployeeRegForm from './EmployeeRegForm';
import Category from './Category';
import ListCategory from './ListCategory';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import styled, { createGlobalStyle } from "styled-components";

function App() {
  return (
    <React.Fragment>
    <CSSReset />
    <div className="App">
    <BrowserRouter>
      {/* <Appbar /> */}
      <div className='container'>
      <Routes>
        <Route path='/EmployeeRegForm' element={<EmployeeRegForm/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/ListCategory' element={<ListCategory/>}/>  
        <Route path='/Home' element={<Home/>}/>  
        <Route path='/' element={<Loginpage/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    </div>
    </React.Fragment>
  );
}
const Styles = {
  Wrapper: styled.main`
    margin: 80%;
  `
};

const CSSReset = createGlobalStyle`

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%; /*1rem = 10px*/
  box-sizing: border-box;
}

body {
  font-size: 1.4rem;
  font-family: sans-serif;
}
`;
export default App;
