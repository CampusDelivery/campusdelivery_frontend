/**
 * Project: campusdelivery
 * Created by: Selina Edelsbrunner
 * Date: 16.05.2024
 * Time: 08:05
 */

import React, {useState} from 'react';
import {Button, Input} from "@mui/material";
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
        <div>
            <form onSubmit={handleRegistration}>
                <div>
                    <h1>Registration</h1>
                    <label>
                        Vorname:
                        <Input
                            type="vorname"
                            value={vorname}
                            onChange={(e) => setVorname(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Nachname:
                        <Input
                            type="nachname"
                            value={nachname}
                            onChange={(e) => setNachname(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <Button type="submit">Login</Button>
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {success && <p style={{color: 'green'}}>{success}</p>}
        </div>
    );
};

export default Registration;