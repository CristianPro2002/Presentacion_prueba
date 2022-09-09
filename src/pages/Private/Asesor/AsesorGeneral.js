import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Asesor.css";
import personaj from "../../../assets/Imagenes/personaj.png";
import personan from "../../../assets/Imagenes/personan.jpg";
import Form from "react-bootstrap/Form";
import toast, { Toaster } from "react-hot-toast";
import { useAsesor } from "../../../Components/hooks/useAsesor";

const Asesor = ({ onclick, numeroAsesor }) => {
  const notify = () => toast("  Selecciona una opcion❕");
  const notify2 = () => toast("  Este usuario no existe❕");
  let Navigate = useNavigate();

  const validar = (e) => {
    var validacion = document.getElementById("Eleccion1");
    if (validacion.value == 1 || validacion.value == "") {
      Navigate("/PersonaJuridica");
      validacion.focus();
    } else if (validacion.value == 2 || validacion.value == "") {
      Navigate("/PersonaJuridica");
      validacion.focus();
    } else notify();
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
    } else notify();
    validacion.focus();
  };

  const { AsesorActions, dataUsuario, setDataUsuario } = useAsesor({notify2});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUsuario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
                        <div className="cont-imgasesor01">
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
                              onClick={() => AsesorActions.peticionGet()}
                            >
                              Consultar
                            </button>
                          </form>
                        </div>

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
                      </div>
                    </div>

                    <div className="conn">
                      <div className="col" id="contenedor1">
                        <div className="cont-imgasesor02">
                          <form
                            className="formulariocon"
                            onSubmit={handleSubmit}
                          >
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
                              onClick={() => AsesorActions.peticionGet2()}
                            >
                              Consultar
                            </button>
                          </form>
                        </div>
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
                      </div>
                    </div>
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

export default Asesor;
