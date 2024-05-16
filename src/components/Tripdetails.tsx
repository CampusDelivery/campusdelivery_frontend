import React from 'react';
import {ITrip} from "../models/ITrip";
import {Person4} from "@mui/icons-material";
import './tripsstyle.css';

interface TripdetailsProps{
    trip:ITrip
}
const Tripdetails:React.FC<TripdetailsProps> = ({trip}) => {
    return (
        <>
            <table className={"styled-table"}>
                <thead>
                <th>Trip</th>
                <th>User</th>
                <th>Destination</th>
                <th>Time</th>

                </thead>
                <tbody>
                <td>{trip.tripId}</td>
                <td>{trip.userId}</td>
                <td>{trip.destination}</td>
                <td>{trip.time}</td>
                </tbody>
            </table>


        </>
    );
};

export default Tripdetails;