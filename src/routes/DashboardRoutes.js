import { Routes, Route, Navigate } from 'react-router-dom';
import React, {useContext} from "react";
import Index from "../Components/Index";
import "bootstrap/dist/css/bootstrap.min.css";
import Roles from "../pages/Private/Roles/Roles";
import Director from "../pages/Private/Director/Director";
import Gerente from "../pages/Private/Gerente/Gerente";
import {Asesor, Asesor2, Asesor3, Asesor4, Asesor5} from "../views/viewsAsesor";
import {PersonaJuridica, PersonaJuridica2, PersonaJuridica3, PersonaJuridica4, PersonaJuridica5} from "../pages/Private/Asesor/Persona_Juridica/viewsPJ";
import {PersonaNatural, PersonaNatural2, PersonaNatural3, PersonaNatural4, PersonaNatural5} from "../pages/Private/Asesor/Persona_Natural/viewsPN";
import {AsesorD1, AsesorD2, AsesorD3, AsesorD4, AsesorD5} from "../views/viewsAsesor";
import { Funcionamiento_form } from "../pages/Private/Director/Funcionamiento_form";
import { Tabla_director } from "../pages/Private/Director/Tabla_director";
import Consulta from "../pages/Private/Asesor/Consulta/Consulta";
import Consulta2 from "../pages/Private/Asesor/Consulta/Consulta2";
import CajeroP from "../pages/Private/CajeroP/CajeroP";
import {Cajero1, Cajero2, Cajero3, Cajero4, Cajero5} from "../views/viewsCajero";
import Tabla from "../pages/Private/Cajero/Tabla";
import Rolasesor from "../pages/Private/Roles/Rasesor/Rolasesor";
import Rolgerente from "../pages/Private/Roles/Rgerente/Rolgerente";
import Rolcajero from "../pages/Private/Roles/Rcajero/Rolcajero";
import Rolcajerop from "../pages/Private/Roles/Rcajerop/Rolcajerop";
import { AppContext } from "../stateManagement/provider";
const DashboardRoutes = () => {
    const [data2, setData2] = useContext(AppContext);
    return (
        <>
            <Routes>
                <Route path="/Asesor" element={<Asesor  />}/>
                <Route path="/Gerente" element={<Gerente />}/>
                <Route path="/Director" element={<><Director /><Funcionamiento_form /></>}/>
                <Route path="/Roles" element={<Roles/>}/>
                <Route path="/PersonaJuridica" element={<PersonaJuridica />}/>  
                <Route path="/PersonaNatural" element={<PersonaNatural />}/>
                <Route path="/Asesor2" element={<Asesor2 />}/>  
                <Route path="/Asesor3" element={<Asesor3 />}/>
                <Route path="/Asesor4" element={<Asesor4 />}/>
                <Route path="/Asesor5" element={<Asesor5 />}/>
                <Route path="/PersonaNatural2" element={<PersonaNatural2 />}/>  
                <Route path="/PersonaNatural3" element={<PersonaNatural3 />}/>
                <Route path="/PersonaNatural4" element={<PersonaNatural4 />}/>
                <Route path="/PersonaNatural5" element={<PersonaNatural5 />}/>
                <Route path="/PersonaJuridica2" element={<PersonaJuridica2 />}/>
                <Route path="/PersonaJuridica3" element={<PersonaJuridica3 />}/>
                <Route path="/PersonaJuridica4" element={<PersonaJuridica4 />}/>
                <Route path="/PersonaJuridica5" element={<PersonaJuridica5 />}/>
                <Route path="/Tabla_director" element={<Tabla_director />}/>
                <Route path="/Consulta" element={<Consulta />}/>  
                <Route path="/Consulta2" element={<Consulta2 />}/>
                <Route path="/CajeroP" element={<CajeroP />}/>
                <Route path="/Cajero1" element={<Cajero1 />}/>
                <Route path="/Cajero2" element={<Cajero2 />}/>
                <Route path="/Cajero3" element={<Cajero3 />}/>
                <Route path="/Cajero4" element={<Cajero4 />}/>
                <Route path="/Cajero5" element={<Cajero5 />}/>
                <Route path="/Tabla" element={<Tabla />}/> 
                <Route path="/Rcajerop" element={<Rolcajerop />}/>
                <Route path="/Rcajero" element={<Rolcajero />}/>
                <Route path="/Rgerente" element={<Rolgerente />} />
                <Route path="/Rasesor" element={<Rolasesor />}/>
                <Route path="/AsesorD1" element={<AsesorD1 />}/>
                <Route path="/AsesorD2" element={<AsesorD2 />}/>
                <Route path="/AsesorD3" element={<AsesorD3 />}/>
                <Route path="/AsesorD4" element={<AsesorD4 />}/>
                <Route path="/AsesorD5" element={<AsesorD5 />}/>
                <Route path="http://localhost:8080/documen/"/>
                <Route path="http://localhost:8080/Recibo/Recibo.php"/>
                <Route path='*' element={<Navigate to={data2} />} />
            </Routes>
        </>
    );
};

export default DashboardRoutes;