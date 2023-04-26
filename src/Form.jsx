import * as React from 'react';
import {  Label } from "reactstrap";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import { Paper} from '@mui/material';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const paperStyle={padding:'50px 20px',width:500,margin:"40px auto"}

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
            "Must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
        ),
    passwordConfirmation: Yup.string()
        .required("Password confirmation is required")
        .oneOf([Yup.ref("password"), null], "Passwords must be the same")
});

function MyForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const handleSelect = (e) => {
        console.log(e);
        setselectedRole(e)
    }
    const onSubmit = (data) => console.log(data);
    const [employeename, setEmployeename] = useState("");
    const [selectedRole, setselectedRole] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adm,setAdmin]=React.useState([]);
    const [sta,setSta]=React.useState([]);
    
    async function saveEmployee(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/Employee/add", {
                employeename: employeename,
                email: email,
                password: password,
                role: selectedRole,
            });
            alert("Employee Registation Successfully");

        } catch (err) {
            alert(err);
        }

    }
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
        <Paper elevation={0} style={paperStyle}>
        <h1 style={{color:"black"}}>ADD EMPLOYEE</h1>
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control
                        type="text"
                        placeholder="Type your Full Name..."
                        value={employeename}
                        onChange={(event) => {
                            setEmployeename(event.target.value);
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                <h4 style={{color:"black"}}>Select Role</h4>
                 <select id="outlined-basic" label="Category" variant="outlined" fullWidth >
                    <option value={adm}>System Admin</option>
                    <option value={sta}>Stakeholder</option>                       
            </select>  
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control
                        type="email"
                        placeholder="Type your e-mail..."
                        {...register("email")}
                        isInvalid={!!errors.email}
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control
                        type="text"
                        placeholder="Type your password..."
                        {...register("password")}
                        isInvalid={!!errors.password}
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid my-5">
                    <Button variant="primary" size="lg" type="submit" onClick={saveEmployee}>
                        REGISTER
                    </Button>
                </div>
            </Form>
            </Paper>
        </Container>
        </Box>
    );
}

export default MyForm;
