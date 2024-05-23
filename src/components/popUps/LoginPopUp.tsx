/**
 * Project: campusdelivery
 * Created by: Selina Edelsbrunner
 * Date: 16.05.2024
 * Time: 08:59
 */
import React from 'react';
import {Button, Input} from "@mui/material";
import {useNavigate} from "react-router-dom";
import PopUp from "./PopUp";




interface LoginPopUpProps{
    isOpen : boolean
    onCancelClick: () => void
}
const LoginPopUp:React.FC<LoginPopUpProps> = ({isOpen, onCancelClick}) => {

    const navigate = useNavigate();

    const onLogin = () => {
        console.log("onHandleLogin!")
        navigate("/")

    }
    return (
        <PopUp isOpen={isOpen}>
            <Input placeholder={"E-Mail"}/>
            <Input placeholder={"Password"}/>
            <Button onClick={() => onLogin()}>Anmelden</Button>
            <Button onClick={() => onCancelClick()}>Schließen</Button>

        </PopUp>
    );
};

export default LoginPopUp;