import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Msolicitud = ({
  abrir,
  cerrar,
  abrir2,
  cerrar2,
  cerrarT,
  cerrarp,
  abrirp,
  solicitud,
  setSolicitud,
  peticionGet3,
  solicitud2,
  setSolicitud2,
  abrirpj,
  cerrarpj,
  abrir3
}) => {
  let Navigate = useNavigate();

  const baseUrl = "http://localhost:8080/Banca/bd_crud/principal.php";
  const [detalle, setDetalle] = useState([]);
  const [detalle2, setDetalle2] = useState([]);
  const [Identi, setIdenti] = useState([]);
  const [estado, setEstado] = useState({
    Des_soli: "",
  });

  useEffect(() => {
    peticionGet3();
  }, []);

  const peticionPostsolicitud = async (value) => {
    var f = new FormData();
    let No_ide = value;
    f.append("Des_soli", estado.Des_soli);
    f.append("METHOD", "CANCELSOLI");
    await axios
      .post(baseUrl, f, { params: { No_ide: No_ide, Id_reg: Identi } })
      .then((response) => {
        setSolicitud(solicitud.filter((Usuario) => Usuario.No_ide !== No_ide));
        cerrar2();
        document
          .getElementById("ventana_modal")
          .setAttribute("style", "display:none;");
        document
          .getElementById("ventana_modalp")
          .setAttribute("style", "visibility:visible; top:50%;");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionPostsolicitudJ = async (value) => {
    var f = new FormData();
    let Nit = value;
    f.append("Des_soli", estado.Des_soli);
    f.append("METHOD", "CANCELSOLIJ");
    await axios
      .post(baseUrl, f, { params: { Nit: Nit, Id_regj: Identi } })
      .then((response) => {
        setSolicitud2(solicitud2.filter((Usuario) => Usuario.Nit !== Nit));
        cerrar2();
        document
          .getElementById("ventana_modal3")
          .setAttribute("style", "display:none;");
        document
          .getElementById("ventana_modalp")
          .setAttribute("style", "visibility:visible; top:50%;");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  const Detalleid = async (value, value2) => {
    const No_ide = value;
    let Id_reg = value2;
    var f = new FormData();
    f.append("No_ide", No_ide);
    f.append("METHOD", "CONSULTAID3");
    await axios.post(baseUrl, f).then((response) => {
      setDetalle(response.data);
      setIdenti(Id_reg);
      abrir();
    });
  };

  const Detalleid2 = async (value, value2) => {
    const Nit = value;
    let Id_regj = value2;
    var f = new FormData();
    f.append("Nit", Nit);
    f.append("METHOD", "CONSULTAIPJ");
    await axios.post(baseUrl, f).then((response) => {
      setDetalle2(response.data);
      setIdenti(Id_regj);
      abrirpj();
    });
  };



  const peticionDeleteSoli = async (value) => {
    
    let No_ide = value;
    var f = new FormData();
     f.append("METHOD", "DELETESOLI");
     await axios
       .post(baseUrl, f, { params: { No_ide: No_ide, Id_reg: Identi } })
       .then((response) => {
         setSolicitud(
           solicitud.filter((Usuario) => Usuario.No_ide !== No_ide)
         );
         document
           .getElementById("ventana_modal")
           .setAttribute("style", "visibility: hidden;");
         document
           .getElementById("ventana_modalp")
           .setAttribute("style", "visibility:visible; top:50%;");
       })
       .catch((error) => {
         console.log(error);
       });
  };

  const peticionDeleteSoliJ = async (value) => {
    let Nit = value;
    var f = new FormData();
    f.append("METHOD", "DELETESOLIJ");
    await axios
      .post(baseUrl, f, { params: { Nit: Nit, Id_regj: Identi } })
      .then((response) => {
        setSolicitud2(
          solicitud2.filter((Usuario) => Usuario.Nit !== Nit)
        );
        document
          .getElementById("ventana_modal3")
          .setAttribute("style", "visibility: hidden;");
        document
          .getElementById("ventana_modalp")
          .setAttribute("style", "visibility:visible; top:50%;");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEstado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    //console.log(estado);
  };

  return (
    <div>
      
      <div className="background__blur" id="background__blur">
      <div className="contemodal">
        <div className="container__modal" id="ventana_modalp">
          <div className="header__modal">
            <label
              for="evento-click"
              onClick={cerrarp}
              style={{ backgroundColor: "#DC3545", color: "white" }}
            >
              X
            </label>
          </div>
          <div style={{ width: "85vw" }}>
            <center>
              <h1>
                <b>SOLICITUDES</b>
              </h1>
            </center>
            <div className="cont-modals01">
              <div className="cont1-modal01" id="cont1-modal01">
                <div className="body__modal">
                  <h2 className="title__modal">Persona Juridica</h2>

                  <div>
                    {solicitud2.map((Data) => (
                      <>
                        <div className="card" id="cardsoli">
                          <div className="card-body">
                            <div className="row">
                              <div className="cont-data01">
                                <label>No de solicitud</label>
                                <p>{Data.Id_regj}</p>
                              </div>
                              <div className="cont-data01">
                                <label>Nombre</label>
                                <p>{Data.Nom_ra}</p>
                              </div>
                              <div className="cont-data01">
                                <label>Identificacion</label>
                                <p>{Data.Nit}</p>
                              </div>
                              <div className="cont-data01" id="cont-data01">
                             
                                  <button
                                    onClick={() => Detalleid2(Data.Nit, Data.Id_regj)}
                                    className="btn btn-danger"
                                  >
                                    Detalle
                                  </button>
                         
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>

              <div className="cont1-modal01" id="cont1-modal01">
                <div className="body__modal">
                  <h2 className="title__modal">Persona Natural</h2>
                  <div>
                    <div></div>

                    {solicitud.map((Data) => (
                      <>
                        <div className="card" id="cardsoli">
                          <div className="card-body">
                            <div className="row">
                              <div className="cont-data01">
                                <label>No de solicitud</label>
                                <p>{Data.Id_reg}</p>
                              </div>
                              <div className="cont-data01">
                                <label>Nombre</label>
                                <p>{Data.Pri_nom}</p>
                              </div>
                              <div className="cont-data01">
                                <label>Identificacion</label>
                                <p>{Data.No_ide}</p>
                              </div>
                              <div className="cont-data01" id="cont-data01">
                                <button
                                  onClick={() => Detalleid(Data.No_ide, Data.Id_reg)}
                                  className="btn btn-danger"
                                >
                                  Detalle
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal para detalle de solicitud persona natural */}

        <div class="container__modal2" id="ventana_modal">
          <input type="checkbox" id="evento-click2" />
          <div class="header__modal2">
            <label
              for="evento-click2"
              onClick={cerrar}
              style={{ backgroundColor: "#DC3545", color: "white" }}
            >
              X
            </label>
          </div>
          <div class="body__modal2">
            <h1 class="title__modal2">
              Solicitud de{" "}
              <b style={{ textTransform: "capitalize" }}>{detalle.Pri_nom}</b>{" "}
            </h1>

            <Table striped borderless hover>
              <thead>
                <tr>
                  <th>Numero de documento</th>
                  <th>Primer Nombre</th>
                  <th>Segundo Nombre</th>
                  <th>Primer Apellido</th>
                  <th>Segundo Apellido</th>
                  <th>Ciudad</th>
                  <th>Barrio</th>
                  <th>Ingresos Mensuales</th>
                </tr>
              </thead>
              <tbody>
                <tr key={detalle.No_ide}>
                  <td>{detalle.No_ide}</td>
                  <td>{detalle.Pri_nom}</td>
                  <td>{detalle.Seg_nom}</td>
                  <td>{detalle.Pri_ape}</td>
                  <td>{detalle.Seg_ape}</td>
                  <td>{detalle.Ciu_mu}</td>
                  <td>{detalle.Barrio}</td>
                  <td>{detalle.Ing_men}</td>
                </tr>
              </tbody>
            </Table>

            <button
              id="boton_modal_verde"
              className="btn btn-success"
              onClick={() => peticionDeleteSoli(detalle.No_ide)}
            >
              Aceptar
            </button>
            <button
              id="boton_modal_rojo"
              className="btn btn-danger"
              onClick={abrir2}
            >
              Cancelar
            </button>
          </div>
        </div>

        {/* Modal para detalle de solicitud persona juridica */}

        <div class="container__modal2" id="ventana_modal3">
          <input type="checkbox" id="evento-click2" />
          <div class="header__modal2">
            <label
              for="evento-click2"
              onClick={cerrarpj}
              style={{ backgroundColor: "#DC3545", color: "white" }}
            >
              X
            </label>
          </div>
          <div class="body__modal2">
            <h1 class="title__modal2">
              Solicitud de{" "}
              <b style={{ textTransform: "capitalize" }}>{detalle2.Nom_ra}</b>{" "}
            </h1>

            <Table striped borderless hover>
              <thead>
                <tr>
                  <th>Numero de documento</th>
                  <th>Primer Nombre</th>
                  <th>Segundo Nombre</th>
                  <th>Primer Apellido</th>
                  <th>Segundo Apellido</th>
                  <th>Ciudad</th>
                  <th>Barrio</th>
                  <th>Ingresos Mensuales</th>
                </tr>
              </thead>
              <tbody>
                <tr key={detalle2.Nit}>
                  <td>{detalle2.Nit}</td>
                  <td>{detalle2.Nom_ra}</td>
                  <td>{detalle2.Nom_ra}</td>
                  <td>{detalle2.Nom_ra}</td>
                  <td>{detalle2.Nom_ra}</td>
                  <td>{detalle2.Nom_ra}</td>
                  <td>{detalle2.Nom_ra}</td>
                  <td>{detalle2.Nom_ra}</td>
                </tr>
              </tbody>
            </Table>

            <button
              id="boton_modal_verde"
              className="btn btn-success"
              onClick={() => peticionDeleteSoliJ(detalle2.Nit)}
            >
              Aceptar
            </button>
            <button
              id="boton_modal_rojo"
              className="btn btn-danger"
              onClick={abrir3}
            >
              Cancelar
            </button>
          </div>
        </div>

        <div class="container__modal3" id="ventana_modal2">
          <input type="checkbox" id="evento-click3" />
          <div class="header__modal3">
            <label
              for="evento-click3"
              onClick={cerrar2}
              style={{ backgroundColor: "#DC3545", color: "white" }}
            >
              X
            </label>
          </div>

          <div class="body__modal3">
            <h1 class="title__modal3">Solicitud #-Asesor#</h1>
            <textarea
              type="text"
              className="contenedortext"
              name="Des_soli"
              onChange={handleChange}
              placeholder="Escribir respuesta de cancelacion"
            ></textarea>
            <button
              id="boton_Modal_2_0"
              className="btn btn-success"
              onClick={() => peticionPostsolicitud(detalle.No_ide)}
            >
              Aceptar
            </button>
            <button
              id="boton_Modal_2_1"
              className="btn btn-danger"
              onClick={cerrar2}
            >
              Cancelar
            </button>
          </div>
        </div>


        
        <div class="container__modal3" id="ventana_modal4">
          <input type="checkbox" id="evento-click3" />
          <div class="header__modal3">
            <label
              for="evento-click3"
              onClick={cerrar2}
              style={{ backgroundColor: "#DC3545", color: "white" }}
            >
              X
            </label>
          </div>

          <div class="body__modal3">
            <h1 class="title__modal3">Solicitud #-Asesor#</h1>
            <textarea
              type="text"
              className="contenedortext"
              name="Des_soli"
              onChange={handleChange}
              placeholder="Escribir respuesta de cancelacion"
            ></textarea>
            <button
              id="boton_Modal_2_0"
              className="btn btn-success"
              onClick={() => peticionPostsolicitudJ(detalle2.Nit)}
            >
              Aceptar
            </button>
            <button
              id="boton_Modal_2_1"
              className="btn btn-danger"
              onClick={cerrar2}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>

    
  );
};

export default Msolicitud;
