/**
 * Project: campusdelivery
 * Created by: Selina Edelsbrunner
 * Date: 16.05.2024
 * Time: 08:05
 */

import React from 'react';
import {Button, Input} from "@mui/material";

const Registration = () => {

    const handleRegistration = () => {

    }
    return (
        <div>
            <h1>Registration</h1>

            <Input placeholder={"Vorname"}/>
            <p/>
            <Input placeholder={"Nachname"}/>
            <p/>
            <Input placeholder={"Email"}/>
            <p/>
            <Input placeholder={"Passwort"}/>
            <p/>
            <Button onClick={() => handleRegistration()}>Anmelden</Button>
        </div>
    );
};

export default Registration;