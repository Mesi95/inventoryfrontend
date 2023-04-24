import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardImg,
    Toast
} from "reactstrap";
// import { GoogleLoginButton } from "react-social-login-buttons";
import "./Loginpage.css";
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SysAdpage from './SysAdpage';

function LoginPages() {
    const [selectedRole, setselectedRole] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const getEmail = localStorage.getItem("emailData")
    const getPassword = localStorage.getItem("passwordData")

    const handleSelect = (e) => {
        console.log(e);
        setselectedRole(e)
    }
    function navL(){
        navigate('/Category');
    }
    /**  login Starts */
    async function loginCheck(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/Employee/login", {
                email: email,
                password: password,
            }).then((res) => {
                console.log(res.data);

                if (res.data.message === "Email not exits") {
                    alert("Email not exits");
                }
                else if (res.data.message === "Login Success") {
                    localStorage.setItem("emailData", email)
                    localStorage.setItem("passwordData", password)
                    navL();
                }
                else {
                    alert("Incorrect Email and Password not match");
                }
            }, fail => {
                console.error(fail); // Error!
            });
        }
        catch (err) {
            alert(err);
        }
    }
    /**  login Ends */
    return (
        // <div className="background">
        <div className="login-box">
            <div className="container">
                <div class="row app-des">
                    <div class="col left-background ">
                        <h2>Rama Construction</h2>
                        <p>Powered By BitBot</p>

                    </div>
                    <div class="col login-form">
                        <form >
                            <h2 className="font-weight-bold mb-4">Login</h2>
                            <FormGroup>
                                <Label className="font-weight-bold mb-2">Email</Label>
                                <Input
                                    className="mb-3"
                                    type="email"
                                    placeholder="User@example.com"
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }}

                                />
                                <Label className="font-weight-bold mb-2">Password</Label>
                                <Input
                                    className="mb-3"
                                    type="password"
                                    placeholder="At least 8 characters"
                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }}
                                />
                                {/* <Label className="font-weight-bold mb-2">Select Role</Label> */}
                                {/* <DropdownButton
                                        alignRight
                                        title="Roles"
                                        id="dropdown-menu-align-right"
                                        onSelect={handleSelect}
                                    >
                                        <Dropdown.Item eventKey="SysAd">System Admin</Dropdown.Item>
                                        <Dropdown.Item eventKey="StekeHd">Stakeholder</Dropdown.Item>
                                    </DropdownButton> */}
                            </FormGroup>
                            <Button className="mt-3  btn" onClick={loginCheck} >LOGIN</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
}

export default LoginPages;
