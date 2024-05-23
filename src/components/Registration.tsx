/**
 * Project: campusdelivery
 * Created by: Selina Edelsbrunner
 * Date: 16.05.2024
 * Time: 08:05
 */

import React, {useState} from 'react';
import {Box, Button, Container, Input, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [vorname, setVorname] = useState('');
    const [nachname, setNachname] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegistration = () => {
    navigate("/");
    }
    return (
        <Container maxWidth="xs">
            <Box className="form-container">
                <form onSubmit={handleRegistration} className="form">
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
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Registrieren
                    </Button>
                </form>
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