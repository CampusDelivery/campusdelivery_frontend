/**
 * Project: campusdelivery
 * Created by: Selina Edelsbrunner
 * Date: 16.05.2024
 * Time: 09:48
 */
import React from 'react';
import "./popup.css"

interface PopUpProps {
    children: React.ReactNode
    isOpen: boolean
    height?:number,
    width?:number
}

const PopUp: React.FC<PopUpProps> = ({isOpen, children,height,width}) => {
    return (
        <>
            {isOpen ?
                <div className="popup__container-outer">
                    <div className="popup__container-inner shadow" style={{height:height+"%",width:width+"%"}}>
                        {children}
                    </div>
                </div> : null}
        </>
    );
};

export default PopUp;