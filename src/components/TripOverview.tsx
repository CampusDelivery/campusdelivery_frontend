import React, { useEffect, useState } from 'react';
import { Button, Container, Grid, Typography, Card, CardContent, Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingList from "./ShoppingList";
import { IOrder } from "../models/IOrder";
import axios from "axios";
import { getUser } from "../Utility";

const TripOverview = () => {
    const navigate = useNavigate();
    const [einkaufsliste, setEinkaufsliste] = useState<boolean>(false);
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [tripId, setTripId] = useState<number>();
    const [error, setError] = useState<string | null>(null);
    const [orderStatus, setOrderStatus] = useState<{ [key: number]: boolean }>({});
    const [acceptedOrders, setAcceptedOrders] = useState<IOrder[]>([]);

    useEffect(() => {
        axios.get(`http://localhost:3003/trip/byUser?user=${getUser()}`)
            .then(response => {
                setTripId(response.data.id);
                axios.get(`http://localhost:3003/order/all?trip=${response.data.id}`)
                    .then(response => {
                        setOrders(response.data);
                        // Initialize order status
                        const initialStatus: { [key: number]: boolean } = {};
                        response.data.forEach((order: IOrder) => {
                            initialStatus[order.id] = false; // default to not accepted
                        });
                        setOrderStatus(initialStatus);
                    })
                    .catch(error => {
                        console.log(error);
                        setError("Fehler beim Laden der Bestellungen.");
                    });
            })
            .catch(error => {
                console.log(error);
                setError("Fehler beim Laden der Reiseinformationen.");
            });
    }, []);

    const handleCheckboxChange = (orderId: number, accepted: boolean) => {
        setOrderStatus(prevStatus => ({
            ...prevStatus,
            [orderId]: accepted
        }));

        setAcceptedOrders(prevAcceptedOrders => {
            if (accepted) {
                // Add order to acceptedOrders if it's not already present
                const newAcceptedOrders = [...prevAcceptedOrders, orders.find(order => order.id === orderId)];
                return newAcceptedOrders;
            } else {
                // Remove order from acceptedOrders
                return prevAcceptedOrders.filter(order => order.id !== orderId);
            }
        });
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Trip Overview
            </Typography>
            {error && <Typography color="error">{error}</Typography>}
            {!einkaufsliste ? (
                <div>
                    <Grid container spacing={2} justifyContent="space-between" style={{ marginBottom: '20px' }}>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={() => navigate("/createTrip")}>
                                Einkauf erstellen
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary" onClick={() => setEinkaufsliste(true)}>
                                Einkaufsliste
                            </Button>
                        </Grid>
                    </Grid>
                    {orders.length > 0 ? (
                        <Grid container spacing={3} marginTop={3}>
                            {orders.map(order => (
                                <Grid item xs={12} sm={6} md={4} key={order.id}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant="h6">
                                                {order.ordererName}
                                            </Typography>
                                            <Typography color="textSecondary">
                                                Bestellnummer: {order.id}
                                            </Typography>
                                            {order.articles.map(a => (
                                                <Typography key={a.description} variant="body2">{a.description}</Typography>
                                            ))}
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={orderStatus[order.id] || false}
                                                        onChange={(e) => handleCheckboxChange(order.id, e.target.checked)}
                                                        color="primary"
                                                    />
                                                }
                                                label={orderStatus[order.id] ? "Angenommen" : "Nicht angenommen"}
                                            />
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <Typography variant="body1">
                            Keine Bestellungen vorhanden
                        </Typography>
                    )}
                </div>
            ) : (
                <ShoppingList orders={acceptedOrders} />
            )}
        </Container>
    );
};

export default TripOverview;
