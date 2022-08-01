import React from 'react'
import App from './Inicio_sesion/InicioS'

const Index = ({setisLoggedIn}) => {
    return (
        <div>
            <App setisLoggedIn={setisLoggedIn}/>
        </div>
    )
}

export default Index
