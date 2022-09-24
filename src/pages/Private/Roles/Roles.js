import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Form from "react-bootstrap/Form";
import "./Roles.css";
import toast, { Toaster } from "react-hot-toast";
import useAuthContext from "../../../Components/hooks/useAuthContext";
import axios from "axios";
import { Principal } from "../../../helpers/url";

const Roles = () => {
  const notify = () => toast.error("  Selecciona un numero de rol❕");
  const { logout } = useAuthContext();
  let Navigate = useNavigate();

  const validar3 = (e) => {
    var validacion = document.getElementById("Asesorv");
    if (validacion.value == 1 || validacion.value == "") {
      Navigate("/AsesorD1");
      validacion.focus();
    } else if (validacion.value == 2 || validacion.value == "") {
      Navigate("/AsesorD2");
      validacion.focus();
    } else if (validacion.value == 3 || validacion.value == "") {
      Navigate("/AsesorD3");
      validacion.focus();
    } else if (validacion.value == 4 || validacion.value == "") {
      Navigate("/AsesorD4");
      validacion.focus();
    } else if (validacion.value == 5 || validacion.value == "") {
      Navigate("/AsesorD5");
      validacion.focus();
    } else notify();
    validacion.focus();
  };

  const cerrarSesion = (e) => {
    logout();
    localStorage.removeItem("User");
    localStorage.removeItem("Rol");
  };

  const Usuario = localStorage.getItem("User");
  const Rol = localStorage.getItem("Rol");
  console.log(Rol)

  const validar4 = (e) => {
    var validacion = document.getElementById("cajerov");
    if (validacion.value == 1 || validacion.value == "") {
      Navigate("/Cajero1");
      validacion.focus();
    } else if (validacion.value == 2 || validacion.value == "") {
      Navigate("/Cajero2");
      validacion.focus();
    } else if (validacion.value == 3 || validacion.value == "") {
      Navigate("/Cajero3");
      validacion.focus();
    } else if (validacion.value == 4 || validacion.value == "") {
      Navigate("/Cajero4");
      validacion.focus();
    } else if (validacion.value == 5 || validacion.value == "") {
      Navigate("/Cajero5");
      validacion.focus();
    } else notify();
    validacion.focus();
  };

  const peticionDeleteTotal = async () => {
    var f = new FormData();
    f.append("METHOD", "DELETETOTAL");
    await axios.post(Principal, f).then((response) => {
      toast.success("Los registros fueron eliminados satisfactoriamente")
    });
  };

  return (
    <div className="principal2">
      <div className="fondo" id="dark-mode">
        <div className="fondo2">
          <div className="f201">
            <div className="cont-cerrar02">
              <button className="btn btn-danger" onClick={()=> peticionDeleteTotal()}>
                Eliminar todos los registros
              </button>
            </div>
            <div className="cont-cerrar03">
              <button
                className="btn btn-danger"
                onClick={() => cerrarSesion()}
                id="btn-cerrar01"
              >
                Cerrar Sesion
              </button>
            </div>
          </div>
          <div className="Croles">
            <div className="row" id="rows">
              <h3 className="regis">Registrado con: {Usuario} </h3>
              <h1 className="TituloR">Escoge tu rol</h1>
              <div className="colsito1" id="colsito">
                <div className="Fl" id="Fldirector01">
                  <div className="cont1-direct01">
                    <h2 className="Title-general-Rol">Director</h2>
                  </div>
                  <div className="cont2-direct01">
                    <ul className="list-unstyled">
                      <div className="Formu">
                        <li>
                          <input
                            type="text"
                            className="form-control"
                            value="Director Operativo"
                            id="inputsdisables"
                            readonly
                            disabled
                          ></input>
                        </li>
                      </div>
                      <br />
                      <li>
                        <button
                          onClick={() => Navigate("/Tabla_director")}
                          value="validar"
                          className="button01"
                        >
                          <img
                            className="ImagenF"
                            alt=""
                            src="http://cenfma.com/img/flecha.png"
                            width="50"
                            height="50"
                          />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* column2 */}
              <div className="colsito2" id="colsito">
                <div className="Fl" id="Flgerente01">
                  <div className="cont1-gerent01">
                    <h2 className="Title-general-Rol">Gerente</h2>
                  </div>
                  <div className="cont2-gerent01">
                    <ul className="list-unstyled">
                      <div className="Formu">
                        <li>
                          <li>
                            <input
                              type="text"
                              className="form-control"
                              value="Gerente"
                              id="inputsdisables"
                              readonly
                              disabled
                            ></input>
                          </li>
                        </li>
                      </div>
                      <br />
                      <li>
                        <button
                          onClick={() => Navigate("/Gerente")}
                          value="validar2"
                          className="button01"
                        >
                          <img
                            className="ImagenF"
                            alt=""
                            src="http://cenfma.com/img/flecha.png"
                            width="50"
                            height="50"
                          />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* column3 */}
              <div className="colsito3" id="colsito">
                <div className="Fl" id="Flasesor01">
                  <div className="cont1-asesor01">
                    <h2 className="Title-general-Rol">Asesor</h2>
                  </div>
                  <div className="cont2-asesor01">
                    <ul className="list-unstyled">
                      <div className="Formu">
                        <li>
                          <Form.Select
                            aria-label="Default select example"
                            id="Asesorv"
                            name="Asesorv"
                          >
                            <option value="0" className="Lform">
                              Selecciona el # de rol
                            </option>
                            <option value="1">Asesor #1</option>
                            <option value="2">Asesor #2</option>
                            <option value="3">Asesor #3</option>
                            <option value="4">Asesor #4</option>
                            <option value="5">Asesor #5</option>
                          </Form.Select>
                        </li>
                      </div>
                      <br />
                      <li>
                        <button
                          onClick={validar3}
                          value="validar3"
                          className="button01"
                        >
                          <img
                            className="ImagenF"
                            alt=""
                            src="http://cenfma.com/img/flecha.png"
                            width="50"
                            height="50"
                          />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="colsito4" id="colsito">
                <div className="Fl" id="Flcajero01">
                  <div className="cont1-cajero01">
                    <h2 className="Title-general-Rol">Cajero</h2>
                  </div>
                  <div className="cont2-cajero01">
                    <ul className="list-unstyled">
                      <div className="Formu">
                        <li>
                          <Form.Select
                            aria-label="Default select example"
                            id="cajerov"
                            name="cajerov"
                          >
                            <option value="0" className="Lform">
                              Selecciona el # de rol
                            </option>
                            <option value="1">Cajero #1</option>
                            <option value="2">Cajero #2</option>
                            <option value="3">Cajero #3</option>
                            <option value="4">Cajero #4</option>
                            <option value="5">Cajero #5</option>
                          </Form.Select>
                        </li>
                      </div>
                      <br />
                      <li>
                        <button
                          onClick={validar4}
                          value="validar4"
                          className="button01"
                        >
                          <img
                            className="ImagenF"
                            alt=""
                            src="http://cenfma.com/img/flecha.png"
                            width="50"
                            height="50"
                          />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="colsito5" id="colsito">
                <div className="Fl" id="Flcajerop01">
                  <div className="cont1-cajerop01">
                    <h2 className="Title-general-Rol">Cajero Principal</h2>
                  </div>
                  <div className="cont2-cajerop01">
                    <ul className="list-unstyled">
                      <div className="Formu">
                        <li>
                          <input
                            type="text"
                            className="form-control"
                            value="Cajero Principal"
                            id="inputsdisables"
                            readonly
                            disabled
                          ></input>
                        </li>
                      </div>
                      <br />
                      <li>
                        <button
                          onClick={() => Navigate("/CajeroP")}
                          value="validar5"
                          className="button01"
                        >
                          <img
                            className="ImagenF2"
                            alt=""
                            src="http://cenfma.com/img/flecha.png"
                            width="50"
                            height="50"
                          />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000
        }}
      />
    </div>
  );
};

export default Roles;
