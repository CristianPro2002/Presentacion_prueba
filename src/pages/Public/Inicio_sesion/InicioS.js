import React, { useState, useRef, useContext } from "react";
import {
  Formulario,
  ContenedorBotonCentrado,
  Boton,
  MensajeError,
} from "./Elementos/Formularios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Input from "./ComponentesInicio/Input";
import "./InicioS.css";
import logo from "../../../assets/Logo/logo.webp";
import { useNavigate } from "react-router-dom";
import DashboardRoutes from "../../../routes/DashboardRoutes";
import { AppContext } from "../../../stateManagement/provider";
import { User } from "../../Private/Roles/Roles";
import { useLogin } from "../../../Components/hooks/useLogin";
import useAuthContext from "../../../Components/hooks/useAuthContext";

const App = () => {
  const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const [data2, setData2] = useContext(AppContext);
  const [dataUser, setDataUser] = useState([]);
  const {URL_LOGIN, LoginActions} = useLogin();
  const {login} = useAuthContext();

  let Navigate = useNavigate();

  const expresiones = {
    usuario: /^ADMIN$/, // Letras, numeros, guion y guion_bajo
    password: /^ADMIN$/, // 4 a 12 digitos.
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  
  const refUsuario = useRef(null);

  const refContraseña = useRef(null);

  const handleLogin = async () => {
    const datos = {
      Usuario: refUsuario.current.value,
      Contra: refContraseña.current.value,
    };

    const respuestaJson = await LoginActions.enviarData(URL_LOGIN, datos);
    console.log("respuesta desde el evento", respuestaJson);
    const Rol = respuestaJson.Idti_rol;
    const Usuario = respuestaJson.Usuario;
    const conectado = respuestaJson.conectado;
   
    if ((conectado === true) & (Rol == "1")) {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: "", valido: "" });
      cambiarPassword({ campo: "", valido: null });
      localStorage.setItem("User", Usuario);
      setData2("/Roles");
      login();
    } else if ((conectado === true) & (Rol == "2")) {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: "", valido: "" });
      cambiarPassword({ campo: "", valido: null });
      localStorage.setItem("User", Usuario);
      setData2("/Rasesor");
      login();
    } else if ((conectado === true) & (Rol == "3")) {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: "", valido: "" });
      cambiarPassword({ campo: "", valido: null });
      localStorage.setItem("User", Usuario);
      setData2("/Rgerente");
      login();
    } else if ((conectado === true) & (Rol == "4")) {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: "", valido: "" });
      cambiarPassword({ campo: "", valido: null });
      localStorage.setItem("User", Usuario);
      setData2("/Rcajero");
      login();
    } else if ((conectado === true) & (Rol == "5")) {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: "", valido: "" });
      cambiarPassword({ campo: "", valido: null });
      localStorage.setItem("User", Usuario);
      setData2("/rcajerop");
      login();
    } else if (usuario.valido === "true" && password.valido === "true") {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: "", valido: "" });
      cambiarPassword({ campo: "", valido: null });
      localStorage.setItem("User", "ADMIN");
      setData2("/Roles");
      login();
    } else {
      cambiarFormularioValido(false);
    }
  };

  return (
    <div className="Fondo">
    
      <div className="Fondo2">
        <main className="main">
          <div className="cont">
            <div className="cont3">
              <div className="contenderlogo">
                <img className="Logo" alt="" src={logo} />
              </div>
            </div>
            <br />
            <div className="">
              <Formulario action="" onSubmit={onSubmit}>
                <Input
                  estado={usuario}
                  cambiarEstado={cambiarUsuario}
                  tipo="text"
                  label="Usuario"
                  placeholder="john123"
                  name="usuario"
                  expresionRegular={expresiones.usuario}
                  Referencia={refUsuario}
                />

                <Input
                  estado={password}
                  cambiarEstado={cambiarPassword}
                  tipo="password"
                  label="Contraseña"
                  name="password1"
                  expresionRegular={expresiones.password}
                  Referencia={refContraseña}
                />

                {formularioValido === false && (
                  <MensajeError>
                    <p>
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                      <b>Error:</b> Por favor rellena correctamente.
                    </p>
                  </MensajeError>
                )}
                <br />
                <ContenedorBotonCentrado>
                  <Boton
                    type="submit"
                    className="Botonsito"
                    onClick={handleLogin}
                  >
                    <span>Ingresar</span>
                  </Boton>
                </ContenedorBotonCentrado>
              </Formulario>
              <p className="Copy01"><b>CAJK</b></p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
