import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { AiFillPrinter } from "react-icons/ai";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
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

export const Tabla_director = () => {
  const [busqueda, setBusqueda] = useState("");
  const [modalInsertar, setModalInsetar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  let Navigate = useNavigate();

  const abrirCerrarModalInsertar = () => {
    setModalInsetar(!modalInsertar);
    setRefreshData(!refreshData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUsuario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChange2 = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
      if (
        elemento.Usuario.toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.Id_usu.toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.Nom_rol.toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setData2(resultadosBusqueda);
  };

  const seleccionarUsuario = (usuario, caso) => {
    setDataUsuario(usuario);

    caso === "Editar" ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
  };

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
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

  const abrirp = (e) => {
    timeSoli();
    document
      .getElementById("ventana_modalp")
      .setAttribute("style", "visibility:visible; top:50%;");
    document
      .getElementById("background__blur")
      .setAttribute("style", "visibility:visible");
    document.getElementById("father01").setAttribute("style", "display:none;");
  };

  const cerrarp = (e) => {
    document
      .getElementById("ventana_modalp")
      .setAttribute("style", "visibility: hidden;");
    document
      .getElementById("background__blur")
      .setAttribute("style", "display: none;");
    document
      .getElementById("father01")
      .setAttribute("style", "visibility:visible");
  };

  const abrir = (e) => {
    document
      .getElementById("ventana_modal")
      .setAttribute("style", "visibility:visible; top:50%;");
    document
      .getElementById("ventana_modalp")
      .setAttribute("style", "display:none;");
  };

  const abrirpj = (e) => {
    document
      .getElementById("ventana_modal3")
      .setAttribute("style", "visibility:visible; top:50%;");
    document
      .getElementById("ventana_modalp")
      .setAttribute("style", "display:none;");
  };

  const cerrar = (e) => {
    document
      .getElementById("ventana_modal")
      .setAttribute("style", "display:none;");
    document
      .getElementById("ventana_modalp")
      .setAttribute("style", "visibility:visible; top:50%;");
  };

  const cerrarpj = (e) => {
    document
      .getElementById("ventana_modal3")
      .setAttribute("style", "display:none;");
    document
      .getElementById("ventana_modalp")
      .setAttribute("style", "visibility:visible; top:50%;");
  };

  const abrir2 = (e) => {
    document
      .getElementById("ventana_modal2")
      .setAttribute("style", "visibility:visible; top:50%;");
  };

  const abrir3 = (e) => {
    document
      .getElementById("ventana_modal4")
      .setAttribute("style", "visibility:visible; top:50%;");
  };

  const cerrar2 = (e) => {
    document
      .getElementById("ventana_modal2")
      .setAttribute("style", "display:none;");
    document
      .getElementById("ventana_modal4")
      .setAttribute("style", "display:none;");
  };

  const cerrarT = (e) => {
    document
      .getElementById("ventana_modal")
      .setAttribute("style", "display:none;");
    document
      .getElementById("ventana_modal2")
      .setAttribute("style", "display:none;");
  };

  const fatherSolid = () => {
    DirectorActions.peticionGet3();
    DirectorActions.peticionGet4();
    abrirp();
  };

  const {
    data2,
    setData2,
    tablaUsuarios,
    solicitud,
    setSolicitud,
    solicitud2,
    setSolicitud2,
    dato,
    dataUsuario,
    setDataUsuario,
    DirectorActions,
    refreshData,
    setRefreshData,
  } = useDirector({
    abrirCerrarModalInsertar,
    abrirCerrarModalEditar,
    abrirCerrarModalEliminar,
  });

  const Num = solicitud.length + solicitud2.length;

  const timeSoli = () => {
    setInterval(DirectorActions.peticionGet3, 5000);
    setInterval(DirectorActions.peticionGet4, 5000);
  };

  useEffect(() => {
    DirectorActions.peticionGetVAsesor();
    DirectorActions.peticionGetVDirect();
    DirectorActions.peticionGetVGerente();
    DirectorActions.peticionGetVCajero();
    DirectorActions.peticionGetVCajeroP();
    DirectorActions.peticionGetData();
  }, [refreshData]);

  useEffect(() => {
    DirectorActions.peticionGetRoles();
    DirectorActions.peticionGetData();
    DirectorActions.peticionGet3();
    DirectorActions.peticionGet4();
    DirectorActions.peticionGetVAsesor();
    DirectorActions.peticionGetVDirect();
    DirectorActions.peticionGetVGerente();
    DirectorActions.peticionGetVCajero();
    DirectorActions.peticionGetVCajeroP();
  }, []);

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
              onClick={abrirp}
              style={{ height: "60%", margin: "5px" }}
            >
              Solicitudes <Badge bg="dark">{Num}</Badge>
            </button>
          </div>
        </div>
        <h1 className="titureg">Registros de cuentas de usuario</h1>
        <div className="containerInput">
          <div className="div_report">
            <a
              className="report"
              href="http://localhost:8080/imprimir_roles"
              target="_blank"
            >
              <AiFillPrinter />
            </a>
          </div>
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
            className="btn btn-primary"
            onClick={() => abrirCerrarModalInsertar()}
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
                        onClick={() => seleccionarUsuario(value, "Editar")}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </button>
                      &nbsp;
                      <button
                        id="boton_danger_rojo"
                        className="btn btn-danger"
                        onClick={() => seleccionarUsuario(value, "Eliminar")}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
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
        abrir={abrir}
        cerrar={cerrar}
        abrir2={abrir2}
        cerrar2={cerrar2}
        cerrarT={cerrarT}
        abrirp={abrirp}
        cerrarp={cerrarp}
        solicitud={solicitud}
        setSolicitud={setSolicitud}
        peticionGet3={DirectorActions.peticionGet3}
        peticionGet4={DirectorActions.peticionGet4}
        solicitud2={solicitud2}
        setSolicitud2={setSolicitud2}
        abrirpj={abrirpj}
        cerrarpj={cerrarpj}
        abrir3={abrir3}
      />
      <ModalInsertar
        handleChange={handleChange}
        handleToggle={handleToggle}
        icon={icon}
        type={type}
        dato={dato}
        peticionPost={DirectorActions.peticionPost}
        abrirCerrarModalInsertar={abrirCerrarModalInsertar}
        modalInsertar={modalInsertar}
        peticionPostFather={DirectorActions.contarNDirector}
      />
      <ModalEditar
        dataUsuario={dataUsuario}
        handleChange={handleChange}
        modalEditar={modalEditar}
        dato={dato}
        peticionPut={DirectorActions.peticionPut}
        abrirCerrarModalEditar={abrirCerrarModalEditar}
      />

      <ModalEliminar
        modalEliminar={modalEliminar}
        dataUsuario={dataUsuario}
        peticionDelete={DirectorActions.peticionDelete}
        abrirCerrarModalEliminar={abrirCerrarModalEliminar}
      />
    </>
  );
};
