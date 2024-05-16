/**
 * Project: campusdelivery
 * Created by: Selina Edelsbrunner
 * Date: 16.05.2024
 * Time: 07:58
 */

import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Button, Input} from "@mui/material";

const LoginPage = () => {
    const navigate = useNavigate();

    const onLogin = () => {
        console.log("onHandleLogin!")
        navigate("/")

    }
    return (
        <div>
            <h1>LoginPage!</h1>

            <div>

                <Input placeholder={"E-Mail"}/>
            </div>
            <div>

                <Input placeholder={"Password"}/>
            </div>

            <Button onClick={() => onLogin()}>Anmelden</Button>

            <p></p>
            <Link to={"/registration"}>Registrieren</Link>
        </div>
    );
};

export default LoginPage;