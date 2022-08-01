import React, {useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Asesor.css";
import personaj from "./Imagens/personaj.png";
import personan from "./Imagens/personan.jpg";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {AppContext} from '../../stateManagement/provider';
const Asesor = ({onclick, numeroAsesor}) => {

  let Navigate = useNavigate();

  const validar = (e) => {
    var validacion = document.getElementById("Eleccion1");
    if (validacion.value == 1 || validacion.value == "") {
      Navigate("/PersonaJuridica");
      validacion.focus();
    } else if (validacion.value == 2 || validacion.value == "") {
      Navigate("/PersonaJuridica");
      validacion.focus();
    } else alert("Por favor seleccione una opcion");
    validacion.focus();
  };

  const validar2 = (e) => {
    var validacion = document.getElementById("Eleccion2");
    if (validacion.value == 1 || validacion.value == "") {
      Navigate("/PersonaNatural");
      validacion.focus();
    } else if (validacion.value == 2 || validacion.value == "") {
      Navigate("/PersonaNatural");
      validacion.focus();
    } else alert("Por favor seleccione una opcion");
    validacion.focus();
  };

  const baseUrl = "http://localhost:8080/Banca/bd_crud/index.php";

  const [data, setData] = useContext(AppContext);
  const [dataUsuario, setDataUsuario] = useState({
    No_ide: "",
    Nit: "",
  });
  const peticionGet = async () => {
    var f = new FormData();
    f.append("Nit", dataUsuario.Nit);
    f.append("METHOD", "CONSULTAIDENT");
    await axios.post(baseUrl, f).then((response) => {
      setData(response.data);
      Navigate("/Consulta");
    });  
  };

  const peticionGet2 = async () => {
    var f = new FormData();
    f.append("No_ide", dataUsuario.No_ide);
    f.append("METHOD", "CONSULTAID");
    await axios.post(baseUrl, f).then((response) => {
      setData(response.data);
      Navigate("/Consulta2");
    });  
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUsuario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(dataUsuario);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  
  return (
    <div className="principal">
      <div className="padresito">
        <div className="inicio">
          <i
            class="bi bi-arrow-left-circle-fill"
            id="cir"
            onClick={onclick}
          ></i>
        </div>

        <div className="contenedort">
          <h1 className="titulu">{numeroAsesor}</h1>
        </div>

        <div className="pri">
          <div className="concaro">
            <div className="col">
              <div className="contb">
                <div className="col">
                  <div className="titu">
                    <h2 className="tp">Selecciona el tipo de Persona</h2>
                  </div>

                  <div className="row" id="con">
                    <div className="contj">
                      <div className="col" id="contenedor1">
                        <img className="PJ" alt="" src={personaj} />
                        <form onSubmit={handleSubmit}>
                          <input
                            placeholder="Ingrese el Nit"
                            type="number"
                            className="campo1"
                            name="Nit"
                            onChange={handleChange}
                          ></input>
                          <button
                            type="submit"
                            className="consultar1"
                            onClick={() => peticionGet()}
                          >
                            Consultar
                          </button>
                        </form>
                        <form>
                          <div className="cdesplegable1">
                            <Form.Select
                              aria-label="Default select example"
                              id="Eleccion1"
                              name="Eleccion1"
                              className="desplegable1"
                            >
                              <option value="0" className="Lform">
                                Selecciona el proceso
                              </option>
                              <option value="1">Cuenta de ahorro</option>
                              <option value="2">Cuenta corriente</option>
                            </Form.Select>
                          </div>
                          <div className="bj">
                            <button
                              onClick={validar}
                              name="validar"
                              className="pj"
                            >
                              Persona Juridica
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="conn">
                      <div className="col" id="contenedor1">
                        <img className="PN" alt="" src={personan} />
                        <div className="cont34">
                          <form className="formulariocon" onSubmit={handleSubmit}>
                            <input
                              placeholder="Ingrese la cedula"
                              type="number"
                              className="campo2"
                              name="No_ide"
                              onChange={handleChange}
                            ></input>
                            <button
                              type="submit"
                              className="consultar2"
                              onClick={() => peticionGet2()}
                            >
                              Consultar
                            </button>
                          </form>
                        </div>
                        <form>
                          <div className="cdesplegable2">
                            <Form.Select
                              aria-label="Default select example"
                              id="Eleccion2"
                              name="Eleccion2"
                              className="desplegable2"
                            >
                              <option value="0" className="Lform">
                                Selecciona el proceso
                              </option>
                              <option value="1">Cuenta de ahorro</option>
                              <option value="2">Cuenta corriente</option>
                            </Form.Select>
                          </div>
                          <div className="bn">
                            <button
                              onClick={validar2}
                              name="vaidar2"
                              className="pn"
                            >
                              Persona Natural
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asesor;
