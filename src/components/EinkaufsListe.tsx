import React, { useEffect, useState } from 'react';
import './css/Einkaufsliste.css';
import { IOrder } from '../models/IOrder';

interface EinkaufsListenProps {
    orders: IOrder[];
}

const EinkaufsListe: React.FC<EinkaufsListenProps> = ({ orders }) => {
    const [orderList, setOrderList] = useState(
        orders ? orders.map(order => ({ ...order, completed: false })) : null
    );

    const handleOrderClick = (orderId: number) => {
        setOrderList(prevOrders => {
            const updatedOrders = prevOrders.map(order =>
                order.orderId === orderId ? { ...order, completed: !order.completed } : order
            );
            updatedOrders.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
            return updatedOrders;
        });
    };

    return (
        <div className="einkaufsliste-container">
            <h2 className="einkaufsliste-title">Einkaufsliste</h2>
            <ul className="einkaufsliste">
                {orderList ? orderList.map(order => (
                    <li
                        key={order.orderId}
                        onClick={() => handleOrderClick(order.orderId)}
                        className={`einkaufsliste-item ${order.completed ? 'completed' : ''}`}
                    >
                        <h2 className="order-name">{order.ordername}</h2>
                        {order.articles ? order.articles.map((a, index) => (
                            <p key={index} className="order-article">{a.description}</p>
                        )) : <p>No articles</p>}
                    </li>
                )) : <p>No data</p>}
            </ul>
        </div>
    );
};

export default EinkaufsListe;
