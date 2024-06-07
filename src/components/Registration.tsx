/**
 * Project: campusdelivery
 * Created by: Selina Edelsbrunner
 * Date: 16.05.2024
 * Time: 08:05
 */

import React, {useState} from 'react';
import {Box, Button, Container, Input, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {IUser} from "../models/IUser";
import axios from "axios";

const Registration = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [vorname, setVorname] = useState('');
    const [nachname, setNachname] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegistration = () => {

        axios.post("http://localhost:3003/user/new", {
            firstname: vorname,
            lastname: nachname,
            email: email,
            password: password
        })
            .then((response) => {
                console.log("Registrieren erfolgreich");

                let username = response.data.email;
                let pwd = response.data.password;

                let today = new Date();
                var expire = new Date();
                expire.setTime(today.getTime() + 3600000*24*15);

                document.cookie = "name="+username+";path=/" + ";expires="+expire.toUTCString();
                document.cookie = "password="+encodeURI(pwd)+";path=/" + ";expires="+expire.toUTCString();
            })
        navigate("/createTrip")
    }
    return (
        <Container maxWidth="xs">
            <Box className="form-container">
                    <Typography variant="h4" component="h1" gutterBottom>
                        Registration
                    </Typography>
                    <TextField
                        label="Vorname"
                        type="text"
                        value={vorname}
                        onChange={(e) => setVorname(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Nachname"
                        type="text"
                        value={nachname}
                        onChange={(e) => setNachname(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth onClick={() => {handleRegistration()}}>
                        Registrieren
                    </Button>

                {error && <Typography color="error" className="feedback">{error}</Typography>}
                {success && <Typography color="primary" className="feedback">{success}</Typography>}
                <Link to="/login" className="registration-link">
                    Login?
                </Link>
            </Box>
        </Container>
    );
};

export default Registration;