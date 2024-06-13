import React from 'react';
import { ITrip } from "../models/ITrip";
import { Person4 } from "@mui/icons-material";
import './css/tripsstyle.css';
import {useNavigate} from "react-router-dom";

interface TripdetailsProps {
    trip: ITrip;
}

const Tripdetails: React.FC<TripdetailsProps> = ({ trip }) => {

    const navigate = useNavigate();

    return (
        <div className="trip-details-container">
            <table className="styled-table" onClick={() => navigate(`/createOrder/${trip.id}`)}>
                <thead>
                <tr>
                    <th>Trip</th>
                    <th>User</th>
                    <th>Destination</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{trip.id}</td>
                    <td>
                        {trip.user.firstname} {trip.user.lastname}
                    </td>
                    <td>{trip.destination}</td>
                    <td>{trip.time}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Tripdetails;
