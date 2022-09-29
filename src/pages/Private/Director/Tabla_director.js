import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { AiFillPrinter } from "react-icons/ai";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faEye,
  faEyeSlash,
  faPen,
  faTrash,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import ModalEliminar from "../../../Components/Modal/Meliminar";
import ModalEditar from "../../../Components/Modal/Meditar";
import ModalInsertar from "../../../Components/Modal/Minsertar";
import ModalSolicitud from "../../../Components/Modal/Msolicitud";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useDirector } from "../../../Components/hooks/useDirector";
import { imprimirRoles } from "../../../helpers/url";
import { SpinnerLoading } from "../../../Components/spinners";
import "./ESTILOS_FORMD/estile_form_d.css";

export const Tabla_director = () => {
  const {
    data2,
    solicitud,
    setSolicitud,
    solicitud2,
    setSolicitud2,
    dato,
    dataUsuario,
    setDataUsuario,
    DirectorActions,
    setBusqueda,
    busqueda,
    modalInsertar,
    modalEditar,
    modalEliminar,
    loading,
  } = useDirector();

  let Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUsuario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChange2 = (e) => {
    setBusqueda(e.target.value);
    DirectorActions.filtrar(e.target.value);
  };

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(faEyeSlash);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(faEye);
      setType("text");
    } else {
      setIcon(faEyeSlash);
      setType("password");
    }
  };

  const Num = solicitud.length + solicitud2.length;

  const [currentPage, setCurrentPage] = useState(0);

  const filterData = () => {
    return data2.slice(currentPage, currentPage + 5);
  };

  const nextPage = () => {
    if (currentPage >= data2.length) return;
    setCurrentPage(currentPage + 5);
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 5);
    }
  };

  return (
    <>
      <div className="Father">
        <div className="father01" id="father01">
          <div className="contbtns">
            <div className="congoback">
              <i
                class="bi bi-arrow-left-circle-fill"
                id="cir"
                onClick={() => Navigate(-1)}
              ></i>
            </div>
            <div className="contabrir">
              <button
                className="btn btn-danger"
                onClick={DirectorActions.abrirp}
                style={{ height: "60%", margin: "5px", background: "#f15a26" }}
              >
                Solicitudes <Badge bg="dark">{Num}</Badge>
              </button>
            </div>
          </div>
          {/* eslint-disable */}
          <h1 className="titureg">Registros de cuentas de usuario</h1>
          <div className="containerInput">
            <div className="div_report">
              <a className="report" href={imprimirRoles} target="_blank">
                <AiFillPrinter />
              </a>
            </div>
            {/* eslint-enable */}
            <div className="input_buscadorsito">
              <input
                id="input_buscador"
                className="form-control inputBuscar"
                value={busqueda}
                placeholder="Búsqueda por Nombre  de usuario o nombre de rol"
                onChange={handleChange2}
              />
            </div>
            <div className="boton_buscar">
              <button id="icono_buscar" className="btn btn-dark">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div className="  cont-btn01">
            <button
              id="btnagre"
              className="btn btn-light"
              onClick={() => DirectorActions.abrirCerrarModalInsertar()}
            >
              Agregar contacto
            </button>
          </div>

          <div className="conttable">
            <div className="cont-desc01">
              <Table
                striped
                borderless
                hover
                responsive="sm"
                className="Table-user01"
              >
                {loading ? (
                  <>
                    <thead>
                      <tr>
                        <th className="ocultarid">Id</th>
                        <th>Nombre del usuario</th>
                        <th>Contraseña </th>
                        <th>Tipo de rol </th>
                        <th>Funcionalidades</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(filterData()).map(([key, value]) => (
                        <tr key={value.Id_usu}>
                          <td className="ocultarid">{value.Id_usu}</td>
                          <td>{value.Usuario}</td>
                          <td>{value.Contra}</td>
                          <td>{value.Nom_rol}</td>
                          <td>
                            <button
                              id="boton_verde_tabla"
                              className="btn btn-primary"
                              onClick={() =>
                                DirectorActions.seleccionarUsuario(
                                  value,
                                  "Editar"
                                )
                              }
                            >
                              <FontAwesomeIcon icon={faPen} />
                            </button>
                            &nbsp;
                            <button
                              id="boton_danger_rojo"
                              className="btn btn-danger"
                              onClick={() =>
                                DirectorActions.seleccionarUsuario(
                                  value,
                                  "Eliminar"
                                )
                              }
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <SpinnerLoading />
                  </div>
                )}
              </Table>

              <div>
                <div className="content_actionsPage01">
                  <button onClick={() => prevPage()}>Atras</button>
                  <button onClick={() => nextPage()}>Siguiente</button>
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
        <ModalSolicitud
          abrir={DirectorActions.abrir}
          cerrar={DirectorActions.cerrar}
          abrir2={DirectorActions.abrir2}
          cerrar2={DirectorActions.cerrar2}
          cerrarT={DirectorActions.cerrarT}
          abrirp={DirectorActions.abrirp}
          cerrarp={DirectorActions.cerrarp}
          solicitud={solicitud}
          setSolicitud={setSolicitud}
          peticionGet3={DirectorActions.peticionGet3}
          peticionGet4={DirectorActions.peticionGet4}
          solicitud2={solicitud2}
          setSolicitud2={setSolicitud2}
          abrirpj={DirectorActions.abrirpj}
          cerrarpj={DirectorActions.cerrarpj}
          abrir3={DirectorActions.abrir3}
        />
        <ModalInsertar
          handleChange={handleChange}
          handleToggle={handleToggle}
          icon={icon}
          type={type}
          dato={dato}
          abrirCerrarModalInsertar={DirectorActions.abrirCerrarModalInsertar}
          modalInsertar={modalInsertar}
          peticionPostFather={DirectorActions.contarNDirector}
        />
        <ModalEditar
          dataUsuario={dataUsuario}
          handleChange={handleChange}
          modalEditar={modalEditar}
          dato={dato}
          peticionPut={DirectorActions.contarUpdate}
          abrirCerrarModalEditar={DirectorActions.abrirCerrarModalEditar}
        />

        <ModalEliminar
          modalEliminar={modalEliminar}
          dataUsuario={dataUsuario}
          peticionDelete={DirectorActions.peticionDelete}
          abrirCerrarModalEliminar={DirectorActions.abrirCerrarModalEliminar}
        />
      </div>
    </>
  );
};
