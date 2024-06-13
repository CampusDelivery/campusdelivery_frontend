/**
 * Project: campusdelivery
 * Created by: Selina Edelsbrunner
 * Date: 10.04.2024
 * Time: 09:33
 */

import React, {useState} from 'react';
import {ITrip} from "../models/ITrip";
import Tripdetails from "./Tripdetails";
import {Box, Button, Container, Grid, Menu, MenuItem, Paper, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import LoginPopUp from "./popUps/LoginPopUp";
import './css/buttonstyle.css';
import './css/dashboardstyle.css';
import {getUser} from "../Utility";
import RegistrationPopUp from "./popUps/RegistrationPopUp";

interface DashboardProps{
    trips:ITrip[]
}
const Dashboard:React.FC<DashboardProps> = ({trips}) => {
    const [loginPopup, setLoginPopup] = useState<boolean>(false);
    const [registrationPopUp, setRegistrationPopUp] = useState<boolean>(false);
    const navigate = useNavigate();
    const handleLogin = () => {
        setLoginPopup(true);
    }

    const handleRegistration = () => {
        setLoginPopup(true);
        setRegistrationPopUp(false);
    }

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        document.cookie = `name=${getUser()}; expires=Thu, 01-Jan-70 00:00:01 GMT;`;
    }


    return (
        <div>
            <Container maxWidth="lg" className="dashboard-container">
                <Box className="header-container" display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h4">DASHBOARD PAGE</Typography>
                    {getUser() ?
                        <div>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleMenuOpen}
                            className="login-button"
                            style={{width:'15rem'}}
                        >
                            {getUser()}
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem
                                onClick={() => navigate("/tripOverview")}
                                style={{ fontSize: '1rem', fontWeight: 500, paddingLeft: '20px', paddingRight: '20px' }}
                            >
                                Trips
                            </MenuItem>
                            <MenuItem
                                onClick={() => handleLogout()}
                                style={{ fontSize: '1rem', fontWeight: 500, paddingLeft: '20px', paddingRight: '20px', width: '15rem' }}
                            >
                                Abmelden
                            </MenuItem>
                        </Menu>
                        </div>  :
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleLogin}
                            className="login-button"
                        >
                            Anmelden
                        </Button>
                    }

                </Box>
                {/*<Button onClick={() => setCreatePopup(true)}>Anmelden</Button>*/}
                {trips ? trips.map(t => {
                    return (
                        <Tripdetails trip={t}/>
                    )
                }) : ""}

                {/*<LoginPopUp*/}
                {/*    isOpen={createPopup}*/}
                {/*    onCancelClick={()=> setCreatePopup(false)}/>*/}
            </Container>
            <LoginPopUp isOpen={loginPopup} onCancelClick={() => setLoginPopup(false)}></LoginPopUp>
            <RegistrationPopUp isOpen={registrationPopUp} onCancelClick={() => handleRegistration()}></RegistrationPopUp>
        </div>
    );
};

export default Dashboard;