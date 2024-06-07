
/**
 * Project: campusdelivery
 * Created by: Selina Edelsbrunner
 * Date: 07.06.2024
 * Time: 08:39
 */
import React, {useState} from 'react';
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import './css/formstyle.css';

const Bekanntgabe = () => {
    const navigate = useNavigate();
    const [destination, setDestination] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [maxNumberOfOrders, setMaxNumberOfOrders] = useState<number>(null);


    const onhandleBekanntgabe = () => {
        //trip wird erstellt:
        // axios.post(`http://localhost:3003/user/trip/new?${getUser()}`, {
        //     destination: destination,
        //     time: time,
        //     maxNumberOfOrders: maxNumberOfOrders,
        // }).then((response) => console.log(response.status))
        navigate("/createTrip")
    }
    return (
       <Container maxWidth="xs">
           <Box className="form-container">
               <Typography variant="h4" component="h1" gutterBottom>
                   Einkauf bekanntgeben
               </Typography>
               <TextField
                   label="Destination"
                   value={destination}
                   onChange={(e) => setDestination(e.target.value)}
                   required
                   fullWidth
                   margin="normal"
               />
               <TextField
                   label="Time"
                   value={time}
                   onChange={(e) => setTime(e.target.value)}
                   required
                   fullWidth
                   margin="normal"
               />
               <TextField
                   label="Maximum Orders"
                   value={maxNumberOfOrders}
                   onChange={(e) => setMaxNumberOfOrders(Number(e.target.value))}
                   required
                   fullWidth
                   margin="normal"
               />

               <Button type="submit" variant="contained" color="primary" fullWidth
                       onClick={() => onhandleBekanntgabe()}>
                   Einkauf bekanntgeben
               </Button>
           </Box>
       </Container>


    );
};

export default Bekanntgabe;