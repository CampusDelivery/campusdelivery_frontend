/**
 * Project: campusdelivery
 * Created by: Selina Edelsbrunner
 * Date: 16.05.2024
 * Time: 07:58
 */

import React, {FormEvent, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Button, Input} from "@mui/material";
import axios from "axios";

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        console.log("onHandleLogin!")
        event.preventDefault();
        setError('');
        setSuccess('');
        try {


            const response = await axios.post("localhost:3003/user/login", {
                email, password
            });

            if (response.data.email === email && response.data.password === password) {
                setSuccess('Login successful')
                console.log("login success")
                navigate("/")
            } else if (response.status === 404) {
                setError('Invalid password or username!')
                console.log("login failed -> invalid password")
                console.log(email)
                console.log(password)
            } else if (response.status === 400) {
                setError("An error occurred while logging in")
                console.log("login failed while logging in!")
                console.log(email)
                console.log(password)
            }

        }catch (error1){
            setError("User doesn't exist");
            console.log("An error occurred: ", error1);
        }
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <h1>Login</h1>
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
            <Link to={"/registration"}>Registrieren?</Link>
        </div>

    );
};

export default LoginPage;