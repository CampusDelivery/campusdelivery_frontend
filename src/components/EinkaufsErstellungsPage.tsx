import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import EinkaufsListe from "./EinkaufsListe";
import {IOrder} from "../models/IOrder";
import axios from "axios";
import {getUser} from "../Utility";

const EinkaufsErstellungsPage = () => {
    const navigate = useNavigate();
    const [einkaufsliste, setEinkaufsliste] = useState<boolean>(false);
    const [orders, setOrders] = useState<IOrder[]>();
    const [acceptedOrders, setAcceptedOrders] = useState<IOrder[]>();
    const [tripId, setTripId] = useState<number>();

    useEffect(() => {
        axios.get(`http://localhost:3003/trip/byUser?user=${getUser()}`)
            .then(responsi => {
                setTripId(responsi.data.id)
                axios.get(`http://localhost:3003/order/all?trip=${responsi.data.id}`)
                    .then(response => {
                        setOrders(response.data);
                    })
            })
    }, []);


    return (
        <>
            {
                !einkaufsliste ? <div>
                    <Button type="submit" variant="contained" color="primary" onClick={() => navigate("/createTrip")}>
                        Einkauf erstellen
                    </Button>
                    <Button type="submit" variant="contained" color="primary" onClick={() => setEinkaufsliste(true)}>
                        Einkaufsliste
                    </Button>
                    {orders ? orders.map(a => (
                        <p>{a.ordername}</p>
                    )) : "no orders"}
                </div> : <EinkaufsListe orders={orders}></EinkaufsListe>
            }
        </>
    );
};

export default EinkaufsErstellungsPage;