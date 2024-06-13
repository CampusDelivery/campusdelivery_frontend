import React from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const EinkaufsErstellungsPage = () => {
    const navigate = useNavigate();

    const onhandleBekanntgabe = () => {
        navigate("/createTrip")
    }
    return (
        <>
            <Button type="submit" variant="contained" color="primary" fullWidth onClick={() => onhandleBekanntgabe()}>
                Einkauf erstellen
            </Button>
        </>
    );
};

export default EinkaufsErstellungsPage;