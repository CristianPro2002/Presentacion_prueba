import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Form from "react-bootstrap/Form";
import "./Rolasesor.css";
import toast, { Toaster } from "react-hot-toast";
import useAuthContext from "../../../../Components/hooks/useAuthContext";

const Rolasesor = () => {
  const notify = () =>
    toast("  Sin permisos para acceder a esta funcionalidad❕");
  const notify2 = () => toast("  Selecciona un numero de rol❕");
  let Navigate = useNavigate();
  const { logout } = useAuthContext();

  /* eslint-disable */
  const Vasesor = (e) => {
    var validacion = document.getElementById("Asesorv");
    if (validacion.value == 1 || validacion.value == "") {
      Navigate("/Asesor");
      validacion.focus();
    } else if (validacion.value == 2 || validacion.value == "") {
      Navigate("/Asesor2");
      validacion.focus();
    } else if (validacion.value == 3 || validacion.value == "") {
      Navigate("/Asesor3");
      validacion.focus();
    } else if (validacion.value == 4 || validacion.value == "") {
      Navigate("/Asesor4");
      validacion.focus();
    } else if (validacion.value == 5 || validacion.value == "") {
      Navigate("/Asesor5");
      validacion.focus();
    } else notify2();
    validacion.focus();
  };

  /* eslint-enable */

  const Vcajero = (e) => {
    notify();
  };

  const Vgerente = (e) => {
    notify();
  };

  const Vdirector = (e) => {
    notify();
  };

  const Vcajerop = (e) => {
    notify();
  };

  const cerrarSesion = (e) => {
    logout();
    localStorage.removeItem("User");
  };

  const Usuario = localStorage.getItem("User");

  return (
    <div className="principal2">
      <div className="fondo" id="dark-mode">
        <div className="fondo2">
          <div className="f2">
            <div className="cont-cerrar01">
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
                <div id="comuncss">
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
                          onClick={Vdirector}
                          value="validar"
                          className="button01"
                        >
                          <img
                            className=""
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
                <div id="comuncss">
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
                          onClick={Vgerente}
                          value="validar2"
                          className="button01"
                        >
                          <img
                            className=""
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
                          onClick={Vasesor}
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
                <div id="comuncss">
                  <div className="cont1-cajero01">
                    <h2 className="Title-general-Rol">Cajero</h2>
                  </div>
                  <div className="cont2-cajero01">
                    <ul className="list-unstyled">
                      <div className="Formu">
                        <li>
                          <Form.Select
                            aria-label="Default select example"
                            id="cajerova"
                            name="cajerov"
                            disabled
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
                          onClick={Vcajero}
                          value="validar4"
                          className="button01"
                        >
                          <img
                            className=""
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
                <div id="comuncss">
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
                          onClick={Vcajerop}
                          value="validar5"
                          className="button01"
                        >
                          <img
                            className=""
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
          duration: 3000,
          style: {
            background: "#FF0000",
            color: "#ffff",
          },
        }}
      />
    </div>
  );
};

export default Rolasesor;
