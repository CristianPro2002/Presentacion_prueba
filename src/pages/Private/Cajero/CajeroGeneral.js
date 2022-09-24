import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Form } from "react-bootstrap";
import "./Cajero.css";
import { useEffect } from "react";
import imagen from "../../../assets/Imagenes/User-Login.png";
import toast, { Toaster } from "react-hot-toast";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useCajero } from "../../../Components/hooks/useCajero";
import {
  McajeroReporte,
  McajeroReporte2,
} from "../../../Components/Modal/Mcajero";
import { reciboBackend } from "../../../helpers/url";

export const Cajero = ({ numeroCajero, numeroCajeroBD, onclick, Valor }) => {
  let Navigate = useNavigate();
  const notifyCajero = () => toast(" Por favor ingrese un numero de cuenta❕");
  const {
    CajeroActions,
    getCuentaC,
    getCuentaJ,
    data,
    dataUsuario,
    setDataUsuario,
    setDataUsuarioReport,
    reportCuenta,
    NoCuenta,
    setDataUsuarioReportDate,
    dataUsuarioReportDate,
    reportCuentaDate,
    mostrarReporte,
    mostrarReporteDate,
    reportValueC,
    reportValueR,
    estadoPeticion,
  } = useCajero({ numeroCajeroBD });

  /* eslint-disable */

  const peticionPostFather = () => {
    let Estado = true;
    console.log(getCuentaC);
    for (var i = 0; i < getCuentaC.length || i < getCuentaJ.length; i++) {
      if (dataUsuario.No_cuenta == getCuentaC[i].No_cuenta) {
        CajeroActions.peticionPost(Estado);
        CajeroActions.peticionPostFalse();
      } else if (dataUsuario.No_cuenta == getCuentaJ[i].No_cuenta) {
        Estado = false;
        CajeroActions.peticionPost(Estado);
        CajeroActions.peticionPostFalse();
      }
    }
  };

  const peticionGetGeneral = () => {
    if (dataUsuario.No_cuenta == "") {
      notifyCajero();
    } else {
      CajeroActions.peticionGetCajero2();
    }
  };

  const peticionReport = () => {
    CajeroActions.peticionGetReport();
    CajeroActions.handleShow();
    CajeroActions.peticionGetValueCuenta();
    CajeroActions.peticionGetValueNCuenta();
  };

  const peticionReportDate = () => {
    CajeroActions.peticionGetReportDate();
    CajeroActions.handleShow2();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUsuario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeReport = (e) => {
    const { name, value } = e.target;
    setDataUsuarioReport((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeDate = (e) => {
    const { name, value } = e.target;
    setDataUsuarioReportDate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }

  useEffect(() => {
    CajeroActions.peticionGetCuentaC();
    CajeroActions.peticionGetCuentaJ();
  }, []);

  useEffect(() => {
    CajeroActions.peticionGet();
  }, [data]);

  /* eslint-enable */
  return (
    <div className="Principal-div01">
      <div className="Fondito">
        <div className="Contenedor-Principal">
          <div className="BOTON01">
            <i
              class="bi bi-arrow-left-circle-fill"
              id="circulito"
              onClick={() => Navigate(-1)}
            ></i>
          </div>
          <div>
            <h1 className="TITULO">{numeroCajero}</h1>
          </div>
          <div className="Contenedores">
            <div className="Contenedor1">
              <div className="main-container">
                <Container className="d-grid h-100">
                  <Form id="sign-in-form" className="text-center w-100">
                    <img className="mb-4 logo" src={imagen} alt="" />
                    <div className="Center">
                      <h1 className=" title">Gestion de cuentas</h1>
                    </div>
                    <Form.Group controlId="sign-in-password" className="mb-3">
                      <Form.Control
                        type="number"
                        size="lg"
                        placeholder="Nº Cuenta"
                        name="No_cuenta"
                        autoComplete="current-password"
                        className="position-relative"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <div className="d-grid">
                      <Button
                        className="ingreso"
                        onClick={() => peticionGetGeneral()}
                      >
                        Ingresar
                      </Button>
                    </div>
                  </Form>
                </Container>
              </div>
            </div>

            <div className="Container-2">
              <div className="container2">
                <Container>
                  <div className="cont-popover">
                    <OverlayTrigger
                      trigger="click"
                      key="top"
                      placement="top"
                      overlay={
                        <Popover id={`popover-positioned-top`}>
                          <Popover.Header as="h3">{`Cantidad disponible`}</Popover.Header>
                          <Popover.Body>
                            <strong>
                              <center>$ {separator(Valor)}</center>
                            </strong>
                          </Popover.Body>
                        </Popover>
                      }
                    >
                      <Button variant="primary">Ver disponible</Button>
                    </OverlayTrigger>
                  </div>
                  <Form action={reciboBackend} method="post">
                    <div className="Contenedores2">
                      <div className="Contenedor-logo-second">
                        <img
                          className="mb-4 logo-second"
                          width={50}
                          src={imagen}
                          alt=""
                        />
                      </div>
                      <div className="Datos">
                        <h1 className="title2">Datos del cliente</h1>
                      </div>
                    </div>
                    {!estadoPeticion ? (
                      <>
                        <h3 className="ErrorTitle01">
                          ¡Por favor ingresa un numero de cuenta!
                        </h3>
                        <div>
                          <Link to={onclick}>Ver tabla de registro</Link>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="margin">
                          <Form.Group className="mb-3" id="Caje">
                            <Form.Label>No de cuenta:</Form.Label>
                            <Form.Control
                              name="No_cuenta"
                              className="cursor"
                              type="text"
                              value={dataUsuario.No_cuenta}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Nombre del cliente:</Form.Label>
                            <Form.Control
                              className="cursor"
                              name="Nom_ra"
                              placeholder={dataUsuario.Nom_ra}
                              value={dataUsuario.Nom_ra}
                              onChange={handleChange}
                              readOnly="readOnly"
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Identificacion del cliente:</Form.Label>
                            <Form.Control
                              type="number"
                              name="Id_act"
                              className="cursor"
                              placeholder={dataUsuario.Id_act}
                              value={dataUsuario.Id_act}
                              onChange={handleChange}
                              readOnly="readOnly"
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Fecha de apertura:</Form.Label>
                            <Form.Control
                              name="Fecha_act"
                              className="cursor"
                              type="datetime-local"
                              onChange={handleChange}
                              required
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Tipo de producto:</Form.Label>
                            <div>
                              <select
                                className="form-select cursor"
                                name="Tip_pro"
                                onChange={handleChange}
                                required
                              >
                                <option value="">
                                  Seleccione el tipo de producto
                                </option>
                                <option value="Apertura de Cuenta">
                                  Apertura de Cuenta
                                </option>
                                <option value="Consignación">
                                  Consignación
                                </option>
                                <option value="Retiro">Retiro</option>
                              </select>
                            </div>
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Valor:</Form.Label>
                            <Form.Control
                              name="Valor_act"
                              className="cursor"
                              type="number"
                              placeholder="$100.000"
                              onChange={handleChange}
                              required
                            />
                          </Form.Group>
                          <Form.Group className="mb-3" id="Caje">
                            <Form.Label>cajero:</Form.Label>
                            <Form.Control
                              name="Cajero"
                              className="cursor"
                              type="text"
                              value={dataUsuario.Cajero}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <div className="BUTTON">
                            <Button
                              className="BOTON2 btn-space"
                              onClick={() => peticionPostFather()}
                              type="submit"
                            >
                              {" "}
                              Guardar{" "}
                            </Button>
                          </div>
                          <div>
                            <Link to={onclick}>Ver tabla de registro</Link>
                          </div>
                        </div>
                      </>
                    )}
                  </Form>
                </Container>
              </div>
            </div>
          </div>
        </div>

        <div className="dad_initial_container">
          <div className="initial_container">
            <div className="father_container_title">
              <h2 className="title_reports">
                reportes de los usuarios banca4.0
              </h2>
            </div>
            <div className="dad_container">
              <div className="container_form1">
                <form action="">
                  <div className="dad_cotainer_form">
                    <div className="child_container_form1_input">
                      <div className="label_center">
                        <label for="">Ingrese un numero de cuenta:</label>
                      </div>
                      <input
                        type="number"
                        name="No_cuenta"
                        onChange={handleChangeReport}
                        className="input_form_consult"
                      />
                    </div>
                    <div className="child_container_form1_button">
                      <Button
                        id="button_form"
                        type="button"
                        onClick={() => peticionReport()}
                      >
                        Consultar
                      </Button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="container_form2">
                <form action="">
                  <div className="center_title_form2">
                    <h4>Consulta por rango de fecha</h4>
                    <div className="dad_container_form_2">
                      <div className="child_container_form2_input2">
                        <div>
                          <div className="label_center">
                            <label for="">Fecha minima</label>
                          </div>
                          <input
                            type="date"
                            name="Min_date"
                            onChange={handleChangeDate}
                          />
                        </div>
                      </div>
                      <div className="child_container_form2_input3">
                        <div>
                          <div className="label_center">
                            <label for="">Fecha maxima</label>
                          </div>
                          <input
                            type="date"
                            name="Max_date"
                            onChange={handleChangeDate}
                          />
                        </div>
                        <div></div>
                      </div>
                      <div className="cont-btn-consult">
                        <Button
                          id="button2_form3"
                          type="button"
                          onClick={() => peticionReportDate()}
                        >
                          Consultar Fecha
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <McajeroReporte
          mostrarReporte={mostrarReporte}
          handleShowReporte={CajeroActions.handleShow}
          reportCuenta={reportCuenta}
          NoCuenta={NoCuenta}
          reportValueC={reportValueC}
          reportValueR={reportValueR}
        />
        <McajeroReporte2
          mostrarReporteDate={mostrarReporteDate}
          handleShowReporteDate={CajeroActions.handleShow2}
          reportCuentaDate={reportCuentaDate}
          dataUsuarioReportDate={dataUsuarioReportDate}
        />

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
    </div>
  );
};

export default Cajero;
