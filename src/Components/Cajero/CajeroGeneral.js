import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Form } from "react-bootstrap";
import "./Cajero.css";
import { useState, useEffect } from "react";
import imagen from "../../assets/Imagenes/User-Login.png";
import axios from "axios";

export const Cajero = ({ numeroCajero, numeroCajeroBD }) => {
  let Navigate = useNavigate();

  const baseUrl = "http://localhost:8080/Banca/bd_crud/cajero.php";
  const baseUrl2 = "http://localhost:8080/Banca/bd_crud/index.php";

  const [data, setData] = useState([]);
  const [consulta, setConsulta] = useState([]);
  const [consulta2, setConsulta2] = useState([]);
  const [dataUsuario, setDataUsuario] = useState({
    Id_act: "",
    Fecha_act: "",
    Tip_pro: "",
    Valor_act: "",
    Cajero: "",
    No_cuenta: "",
    Nom_ra: "",
  });

  //console.log(dataUsuario)

  const peticionPost = async () => {
    var f = new FormData();
    f.append("Id_act", dataUsuario.Id_act);
    f.append("Fecha_act", dataUsuario.Fecha_act);
    f.append("Tip_pro", dataUsuario.Tip_pro);
    f.append("Valor_act", dataUsuario.Valor_act);
    f.append("Cajero", dataUsuario.Cajero);
    f.append("METHOD", "POSET");
    await axios.post(baseUrl, f).then((response) => {
      setData(data.concat(response.data));
    });
  };

  const peticionGetCajero = async () => {
    var f = new FormData();
    f.append("No_cuenta", dataUsuario.No_cuenta);
    f.append("METHOD", "CONSULTACAJERO");
    await axios.post(baseUrl2, f).then((response) => {
      setConsulta(response.data);
      if (response.data.length == 1) {
        setDataUsuario({
          Id_act: String(response.data[0].Nit),
          Cajero: String(numeroCajeroBD),
          Nom_ra: String(response.data[0].Nom_ra),
        });
      }
    });
  };

  const peticionGetCajero2 = async () => {
    var f = new FormData();
    f.append("No_cuenta", dataUsuario.No_cuenta);
    f.append("METHOD", "CONSULTACAJERO2");
    await axios.post(baseUrl2, f).then((response) => {
      setConsulta2(response.data);
      console.log(response.data);
      if (response.data.length == 1) {
        setDataUsuario({
          Id_act: String(response.data[0].No_ide),
          Cajero: String(numeroCajeroBD),
          Nom_ra: String(response.data[0].Pri_nom),
        });
      }
    });
  };

  const peticionGetGeneral = () => {
    peticionGetCajero2();
    if (peticionGetCajero2().length == null) {
      peticionGetCajero();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUsuario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    peticionGet();
  }, [data]);

  return (
    <div className="Fondito">
      <div className="Contenedor-Principal">
        <div className="BOTON">
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
                    <h1 className=" title">Apertura de ahorro</h1>
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
                <Form
                  action="http://localhost:8080/Recibo/Recibo.php"
                  method="post"
                  target="_blank"
                >
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

                  {consulta.length == 1 || consulta2.length == 1 ? (
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
                            <option value="Consignación">Consignación</option>
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
                          onClick={() => peticionPost()}
                          type="submit"
                        >
                          {" "}
                          Guardar{" "}
                        </Button>
                      </div>
                      <div>
                        <Link to="/Tabla">Ver tabla de registro</Link>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3 className="ErrorTitle01">¡Por favor ingresa un numero de cuenta!</h3>
                      <div>
                        <Link to="/Tabla">Ver tabla de registro</Link>
                      </div>
                    </>
                  )}
                </Form>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cajero;
