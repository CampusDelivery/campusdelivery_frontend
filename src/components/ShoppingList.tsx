import React, { useEffect, useState } from 'react';
import './css/Einkaufsliste.css';
import { IOrder } from '../models/IOrder';
import {Button} from "@mui/material";

interface EinkaufsListenProps {
    orders: IOrder[]
    back: () => void
}

const ShoppingList: React.FC<EinkaufsListenProps> = ({ orders, back }) => {
    const [orderList, setOrderList] = useState(
        orders ? orders.map(order => ({ ...order, completed: false })) : null
    );

    const handleOrderClick = (order: IOrder) => {
        setOrderList(prevOrders => {
            const updatedOrders = prevOrders.map(o =>
                o.id === order.id ? { ...o, completed: !o.completed } : o
            );
            return [...updatedOrders];
        });
    };


    return (
        <div className="einkaufsliste-container">
            <h2 className="einkaufsliste-title">Einkaufsliste</h2>
            <ul className="einkaufsliste">
                {orderList.length > 0 ? orderList.map(order => (
                    <li
                        key={order.id}
                        onClick={() => handleOrderClick(order)}
                        className={`einkaufsliste-item ${order.completed ? 'completed' : ''}`}
                    >
                        <h2 className="order-name">{order.ordererName}</h2>
                        {order.articles ? order.articles.map((a, index) => (
                            <p key={index} className="order-article">{a.description}</p>
                        )) : <p>No articles</p>}
                    </li>
                )) : <p>No data</p>}
            </ul>
            <Button variant="contained" color="primary" onClick={() => back()}>Zurück</Button>
        </div>
    );
};

export default ShoppingList;
