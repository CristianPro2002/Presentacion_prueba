import React from 'react'
import App from '../pages/Public/Inicio_sesion/InicioS'

const Index = ({setisLoggedIn}) => {
    return (
        <div>
            <App setisLoggedIn={setisLoggedIn}/>
        </div>
    )
}

export default Index
