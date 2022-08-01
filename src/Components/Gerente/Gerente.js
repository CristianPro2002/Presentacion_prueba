import React from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Gerente = () => {

    let Navigate  = useNavigate();

    return (
        <div>
            <Button onClick = {()=>Navigate('/home')}>Inicio</Button>
            <br/>
            <br/>
            <Button onClick = {() => Navigate(-1)}> Regresar</Button>
            
        </div>
    )
}

export default Gerente
