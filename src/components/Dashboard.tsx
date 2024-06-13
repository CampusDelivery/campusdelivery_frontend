/**
 * Project: campusdelivery
 * Created by: Selina Edelsbrunner
 * Date: 10.04.2024
 * Time: 09:33
 */

import React, {useState} from 'react';
import {ITrip} from "../models/ITrip";
import Tripdetails from "./Tripdetails";
import {Box, Button, Container, Grid, Paper, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import LoginPopUp from "./popUps/LoginPopUp";
import './css/buttonstyle.css';
import './css/dashboardstyle.css';
import {getUser} from "../Utility";

interface DashboardProps{
    trips:ITrip[]
}
const Dashboard:React.FC<DashboardProps> = ({trips}) => {
    // const [createPopup, setCreatePopup] = useState<boolean>(true);
    const navigate = useNavigate();
    const handleLogin = () => {
        console.log(trips);
        navigate("/login");
    }



    return (

        <Container maxWidth="lg" className="dashboard-container">
            <Box className="header-container" display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h4">DASHBOARD PAGE</Typography>
                {getUser() ? <h2>{getUser()}</h2> : <Link to="/login" className="login-link">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                        className="login-button"
                    >
                        Anmelden
                    </Button>
                </Link>}

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
    );
};

export default Dashboard;