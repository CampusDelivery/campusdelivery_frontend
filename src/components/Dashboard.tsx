/**
 * Project: campusdelivery
 * Created by: Selina Edelsbrunner
 * Date: 10.04.2024
 * Time: 09:33
 */

import React, {useState} from 'react';
import {ITrip} from "../models/ITrip";
import Tripdetails from "./Tripdetails";
import {Button} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import LoginPopUp from "./popUps/LoginPopUp";

interface DashboardProps{
    trips:ITrip[]
}
const Dashboard:React.FC<DashboardProps> = ({trips}) => {
    // const [createPopup, setCreatePopup] = useState<boolean>(true);
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    }

    return (

        <div>
            <h1>DASHBOARD PAGE</h1>
            <Link to={"/login"}>
                <Button onClick={() => handleLogin}>Anmelden</Button>
            </Link>

            {/*<Button onClick={() => setCreatePopup(true)}>Anmelden</Button>*/}
            {trips.map(t => {
                return (
                    <Tripdetails trip={t}/>
                )
            })}

            {/*<LoginPopUp*/}
            {/*    isOpen={createPopup}*/}
            {/*    onCancelClick={()=> setCreatePopup(false)}/>*/}
        </div>

    );
};

export default Dashboard;