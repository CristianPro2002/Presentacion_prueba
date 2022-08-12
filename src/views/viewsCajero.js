import React from "react";
import { useNavigate } from "react-router-dom";
import CajeroGeneral from "../pages/Private/Cajero/CajeroGeneral";

export const Cajero1 = (props) => {
    let Navigate = useNavigate();
    return (
        <div>
            <CajeroGeneral numeroCajero="Cajero #1" numeroCajeroBD="Cajero1"/>
        </div>
    );
}

export const Cajero2 = (props) => {
    let Navigate = useNavigate();
    return (
        <div>
            <CajeroGeneral numeroCajero="Cajero #2" numeroCajeroBD="Cajero2"/>
        </div>
    );
}

export const Cajero3 = (props) => {
    let Navigate = useNavigate();
    return (
        <div>
            <CajeroGeneral numeroCajero="Cajero #3" numeroCajeroBD="Cajero3"/>
        </div>
    );
}

export const Cajero4 = (props) => {
    let Navigate = useNavigate();
    return (
        <div>
            <CajeroGeneral numeroCajero="Cajero #4" numeroCajeroBD="Cajero4"/>
        </div>
    );
}

export const Cajero5 = (props) => {
    let Navigate = useNavigate();
    return (
        <div>
            <CajeroGeneral numeroCajero="Cajero #5" numeroCajeroBD="Cajero5"/>
        </div>
    );
}