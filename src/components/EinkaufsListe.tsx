import React from 'react';
import {ITrip} from "../models/ITrip";
import {IOrder} from "../models/IOrder";

interface EinkaufsListenProps{
    orders:IOrder[]
}

const EinkaufsListe:React.FC<EinkaufsListenProps> = ({orders}) => {
    return (
        <div>
            {orders.map(o => (
                o.ordername
            ))}
        </div>
    );
};

export default EinkaufsListe;