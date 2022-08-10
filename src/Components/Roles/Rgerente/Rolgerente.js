import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Form from "react-bootstrap/Form";
import "./Rolgerente.css";
import Cajeroimg from "../../../assets/Imagenes_R/cajero.webp";
import Directorimg from "../../../assets/Imagenes_R/director.webp";
import Gerenteimg from "../../../assets/Imagenes_R/gerente.webp";
import Asesorimg from "../../../assets/Imagenes_R/asesor.webp";
import Cajeropimg from "../../../assets/Imagenes_R/CajeroP.webp";
import Usuariecito from "../../../assets/Imagenes_R/usuario.webp";
import toast, { Toaster } from 'react-hot-toast';

const Rolgerente = ({setisLoggedIn}) => {

  const notify = () => toast('  Sin permisos para acceder a esta funcionalidad❕');
  let Navigate = useNavigate();

  const Vasesor = (e) => {
    notify();
  };

  const Vcajero = (e) => {
    notify();
  };
  const Vdirector = (e) => {
    notify();
   
   };
   const Vcajerop = (e) => {
    notify();
   
   };

  return (
    <div className="principal2">
      <div className="fondo" id="dark-mode">
        <div className="fondo2">
          <div className="f2">
            <i
              class="bi bi-arrow-left-circle-fill"
              id="cir"
              onClick={() => setisLoggedIn(false)}
            ></i>
          </div>
          <div className="Croles">
            <div className="row" id="rows">
              <h3 className="regis">Registrado con: {"hola"} </h3>
              <h1 className="TituloR">Escoge tu rol</h1>
              <div className="colsito1" id="colsito">
                <div id="comuncss">
                  <img
                    className="ImagenI"
                    alt=""
                    src={Directorimg}
                    width="150"
                    height="150"
                  />
                  <ul className="list-unstyled">
                    <li>
                      <b>Director</b>
                    </li>
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
                      <button onClick={Vdirector} value="validar" className="button01">
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
              {/* column2 */}
              <div className="colsito2" id="colsito">
                <div className="Fl" id="Flgerente01">
                  <img
                    className="ImagenI"
                    alt=""
                    src={Gerenteimg}
                    width="150"
                    height="150"
                  />
                  <ul className="list-unstyled">
                    <li>
                      <b>Gerente</b>
                    </li>
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
                      <button onClick={()=> Navigate("/Gerente")} value="validar2" className="button01">
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
              {/* column3 */}
              <div className="colsito3" id="colsito">
                <div id="comuncss">
                  <img
                    className="ImagenI"
                    alt=""
                    src={Asesorimg}
                    width="150"
                    height="150"
                  />
                  <ul className="list-unstyled">
                    <li>
                      <b>Asesor</b>
                    </li>
                    <div className="Formu">
                      <li>
                        <Form.Select
                          aria-label="Default select example"
                          id="Asesorvcp"
                          name="Asesorv"
                          disabled
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
                      <button onClick={Vasesor} value="validar3" className="button01">
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

              <div className="colsito4" id="colsito">
                <div id="comuncss">
                  <img
                    className="ImagenI"
                    alt=""
                    src={Cajeroimg}
                    width="150"
                    height="150"
                  />
                  <ul className="list-unstyled">
                    <li>
                      <b>Cajero</b>
                    </li>
                    <div className="Formu">
                      <li>
                        <Form.Select
                          aria-label="Default select example"
                          id="cajerovcp"
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
                      <button onClick={Vcajero} value="validar4" className="button01">
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

              <div className="colsito5" id="colsito">
                <div id="comuncss">
                  <img
                    className="ImagenI"
                    alt=""
                    src={Cajeropimg}
                    width="150"
                    height="150"
                  />
                  <ul className="list-unstyled">
                    <li>
                      <b>Cajero Principal</b>
                    </li>
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
                      <button onClick={Vcajerop} value="validar5" className="button01">
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
      <Toaster
     position="top-right"
     reverseOrder={false}
     gutter={8}
     containerClassName=""
     containerStyle={{}}
     toastOptions={{
       // Define default options
       className: '',
       duration: 3000,
       style: {
         background: '#FF0000',
         color: '#ffff',
       },
    
     }}
      
      
      />
    </div>
  );
};

export default Rolgerente;
