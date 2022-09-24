import { Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Roles from "../pages/Private/Roles/Roles";
import Gerente from "../pages/Private/Gerente/Gerente";
import {
  Asesor,
  Asesor2,
  Asesor3,
  Asesor4,
  Asesor5,
} from "../views/viewsAsesor";
import {
  PersonaJuridica,
  PersonaJuridica2,
  PersonaJuridica3,
  PersonaJuridica4,
  PersonaJuridica5,
} from "../pages/Private/Asesor/Persona_Juridica/viewsPJ";
import {
  PersonaNatural,
  PersonaNatural2,
  PersonaNatural3,
  PersonaNatural4,
  PersonaNatural5,
} from "../pages/Private/Asesor/Persona_Natural/viewsPN";
import {
  AsesorD1,
  AsesorD2,
  AsesorD3,
  AsesorD4,
  AsesorD5,
} from "../views/viewsAsesor";
import { Tabla_director } from "../pages/Private/Director/Tabla_director";
import Consulta from "../pages/Private/Asesor/Consulta/Consulta";
import Consulta2 from "../pages/Private/Asesor/Consulta/Consulta2";
import CajeroP from "../pages/Private/CajeroP/CajeroP";
import {
  Cajero1,
  Cajero2,
  Cajero3,
  Cajero4,
  Cajero5,
} from "../views/viewsCajero";
import {
  TablaView1,
  TablaView2,
  TablaView3,
  TablaView4,
  TablaView5,
} from "../views/viewsTableCajero";
import Rolasesor from "../pages/Private/Roles/Rasesor/Rolasesor";
import Rolgerente from "../pages/Private/Roles/Rgerente/Rolgerente";
import Rolcajero from "../pages/Private/Roles/Rcajero/Rolcajero";
import Rolcajerop from "../pages/Private/Roles/Rcajerop/Rolcajerop";
import { RolRoutes } from "./RolRoutes";
const DashboardRoutes = () => {
  const Rol = localStorage.getItem("Rol");
  /* eslint-disable */
  return (
    <>
      <Routes>
        {Rol == 1 ? (
          <>
            <Route path="/Asesor" element={<Asesor />} />
            <Route path="/Gerente" element={<Gerente />} />
            <Route path="/Roles" element={<Roles />} />
            <Route path="/PersonaJuridica" element={<PersonaJuridica />} />
            <Route path="/PersonaNatural" element={<PersonaNatural />} />
            <Route path="/Asesor2" element={<Asesor2 />} />
            <Route path="/Asesor3" element={<Asesor3 />} />
            <Route path="/Asesor4" element={<Asesor4 />} />
            <Route path="/Asesor5" element={<Asesor5 />} />
            <Route path="/PersonaNatural2" element={<PersonaNatural2 />} />
            <Route path="/PersonaNatural3" element={<PersonaNatural3 />} />
            <Route path="/PersonaNatural4" element={<PersonaNatural4 />} />
            <Route path="/PersonaNatural5" element={<PersonaNatural5 />} />
            <Route path="/PersonaJuridica2" element={<PersonaJuridica2 />} />
            <Route path="/PersonaJuridica3" element={<PersonaJuridica3 />} />
            <Route path="/PersonaJuridica4" element={<PersonaJuridica4 />} />
            <Route path="/PersonaJuridica5" element={<PersonaJuridica5 />} />
            <Route path="/Tabla_director" element={<Tabla_director />} />
            <Route path="/Consulta" element={<Consulta />} />
            <Route path="/Consulta2" element={<Consulta2 />} />
            <Route path="/CajeroP" element={<CajeroP />} />
            <Route path="/Cajero1" element={<Cajero1 />} />
            <Route path="/Cajero2" element={<Cajero2 />} />
            <Route path="/Cajero3" element={<Cajero3 />} />
            <Route path="/Cajero4" element={<Cajero4 />} />
            <Route path="/Cajero5" element={<Cajero5 />} />
            <Route path="/Tabla1" element={<TablaView1 />} />
            <Route path="/Tabla2" element={<TablaView2 />} />
            <Route path="/Tabla3" element={<TablaView3 />} />
            <Route path="/Tabla4" element={<TablaView4 />} />
            <Route path="/Tabla5" element={<TablaView5 />} />
            <Route path="/Rcajerop" element={<Rolcajerop />} />
            <Route path="/Rcajero" element={<Rolcajero />} />
            <Route path="/Rgerente" element={<Rolgerente />} />
            <Route path="/Rasesor" element={<Rolasesor />} />
            <Route path="/AsesorD1" element={<AsesorD1 />} />
            <Route path="/AsesorD2" element={<AsesorD2 />} />
            <Route path="/AsesorD3" element={<AsesorD3 />} />
            <Route path="/AsesorD4" element={<AsesorD4 />} />
            <Route path="/AsesorD5" element={<AsesorD5 />} />
          </>
        ) : Rol == 2 ? (
          <>
            <Route path="/Asesor" element={<Asesor />} />
            <Route path="/PersonaJuridica" element={<PersonaJuridica />} />
            <Route path="/PersonaNatural" element={<PersonaNatural />} />
            <Route path="/Asesor2" element={<Asesor2 />} />
            <Route path="/Asesor3" element={<Asesor3 />} />
            <Route path="/Asesor4" element={<Asesor4 />} />
            <Route path="/Asesor5" element={<Asesor5 />} />
            <Route path="/PersonaNatural2" element={<PersonaNatural2 />} />
            <Route path="/PersonaNatural3" element={<PersonaNatural3 />} />
            <Route path="/PersonaNatural4" element={<PersonaNatural4 />} />
            <Route path="/PersonaNatural5" element={<PersonaNatural5 />} />
            <Route path="/PersonaJuridica2" element={<PersonaJuridica2 />} />
            <Route path="/PersonaJuridica3" element={<PersonaJuridica3 />} />
            <Route path="/PersonaJuridica4" element={<PersonaJuridica4 />} />
            <Route path="/PersonaJuridica5" element={<PersonaJuridica5 />} />
            <Route path="/Consulta" element={<Consulta />} />
            <Route path="/Consulta2" element={<Consulta2 />} />
            <Route path="/Rasesor" element={<Rolasesor />} />
            <Route path="/AsesorD1" element={<AsesorD1 />} />
            <Route path="/AsesorD2" element={<AsesorD2 />} />
            <Route path="/AsesorD3" element={<AsesorD3 />} />
            <Route path="/AsesorD4" element={<AsesorD4 />} />
            <Route path="/AsesorD5" element={<AsesorD5 />} />
          </>
        ) : Rol == 3 ? (
          <>
            <Route path="/Gerente" element={<Gerente />} />
            <Route path="/Rgerente" element={<Rolgerente />} />
          </>
        ) : Rol == 4 ? (
          <>
            <Route path="/Cajero1" element={<Cajero1 />} />
            <Route path="/Cajero2" element={<Cajero2 />} />
            <Route path="/Cajero3" element={<Cajero3 />} />
            <Route path="/Cajero4" element={<Cajero4 />} />
            <Route path="/Cajero5" element={<Cajero5 />} />
            <Route path="/Tabla1" element={<TablaView1 />} />
            <Route path="/Tabla2" element={<TablaView2 />} />
            <Route path="/Tabla3" element={<TablaView3 />} />
            <Route path="/Tabla4" element={<TablaView4 />} />
            <Route path="/Tabla5" element={<TablaView5 />} />
            <Route path="/Rcajero" element={<Rolcajero />} />
          </>
        ) : Rol == 5 ? (
          <>
            <Route path="/CajeroP" element={<CajeroP />} />
            <Route path="/Rcajerop" element={<Rolcajerop />} />
          </>
        ) : (
          alert("No tiene permisos para acceder a esta pagina")
        )}
        <Route path="/*" element={<RolRoutes />} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
