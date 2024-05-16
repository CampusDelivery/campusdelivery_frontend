/**
 * Project: campusdelivery
 * Created by: Selina Edelsbrunner
 * Date: 10.04.2024
 * Time: 09:33
 */

import React from 'react';
import {ITrip} from "../models/ITrip";
import Tripdetails from "./Tripdetails";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

interface DashboardProps{
    trips:ITrip[];
}
const Dashboard:React.FC<DashboardProps> = ({trips}) => {
    return (
        <>
            <h1>DASHBOARD PAGE</h1>
            <div>
                <Link to={"/login"}>
                    <Button>ANMELDEN</Button>
                </Link>

            </div>
            {trips.map(t => {
                return (
                    <Tripdetails trip={t}/>
                )
            })}


        </>
    );
};

export default Dashboard;