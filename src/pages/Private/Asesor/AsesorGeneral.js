import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Asesor.css";
import Form from "react-bootstrap/Form";
import toast, { Toaster } from "react-hot-toast";
import { useAsesor } from "../../../Components/hooks/useAsesor";
import { AppContext } from "../../../stateManagement/provider";

const Asesor = ({ onclick, numeroAsesor }) => {
  /* eslint-disable */
  const [
    data,
    setData,
    dataCuenta,
    setDataCuenta,
    dataEstados,
    setDataEstados,
    select,
    setSelect,
  ] = useContext(AppContext);

  const notify = () => toast.error("  Selecciona una opcion❕");
  const notify2 = () => toast.error("  Este usuario no existe❕");
  let Navigate = useNavigate();

  const { AsesorActions, setDataUsuario, dataSelect, setDataSelect } =
    useAsesor({ notify2 });

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

  /* eslint-enable */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUsuario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeSelect = (e) => {
    const { name, value } = e.target;
    setDataSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const consultaUserNit = () => {
    AsesorActions.peticionGet();
    AsesorActions.peticionGetCuenta();
    AsesorActions.peticionEstadosCuentasPj();
  };

  const consultaUserId = () => {
    AsesorActions.peticionGet2();
    AsesorActions.peticionGetCuenta2();
    AsesorActions.peticionEstadosCuentasPn();
  };

  const peticionSelect1 = () => {
    setSelect(dataSelect.Tip_prod);
    validar();
  };

  const peticionSelect2 = () => {
    setSelect(dataSelect.Tip_prod);
    validar2();
  };

  return (
    <div className="p-father">
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
                                onClick={() => consultaUserNit()}
                              >
                                Consultar
                              </button>
                            </form>
                          </div>

                          <div className="cdesplegable1">
                            <Form.Select
                              aria-label="Default select example"
                              id="Eleccion1"
                              name="Tip_prod"
                              className="desplegable1"
                              onChange={handleChangeSelect}
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
                              onClick={() => peticionSelect1()}
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
                                onClick={() => consultaUserId()}
                              >
                                Consultar
                              </button>
                            </form>
                          </div>
                          <div className="cdesplegable2">
                            <Form.Select
                              aria-label="Default select example"
                              id="Eleccion2"
                              name="Tip_prod"
                              className="desplegable2"
                              onChange={handleChangeSelect}
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
                              onClick={() => peticionSelect2()}
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
          }}
        />
      </div>
    </div>
  );
};

export default Asesor;
