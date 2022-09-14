import axios from "axios";
import React, { useState } from "react";

export const useMsolicitud = ({
  setSolicitud,
  solicitud,
  cerrar2,
  setSolicitud2,
  solicitud2,
  abrir,
  abrirpj,
}) => {
  const baseUrl = "http://localhost:8080/Banca/bd_crud/principal.php";
  const [detalle, setDetalle] = useState([]);
  const [detalle2, setDetalle2] = useState([]);
  const [Identi, setIdenti] = useState([]);
  const [estado, setEstado] = useState({
    Des_soli: "",
  });

  const peticionPostsolicitud = async (value, value2) => {
    var f = new FormData();
    let No_ide = value;
    let Id_soli = value2;
    f.append("Des_soli", estado.Des_soli);
    f.append("METHOD", "CANCELSOLI");
    await axios
      .post(baseUrl, f, { params: { No_ide: No_ide, Id_reg: Identi, Id_soli: Id_soli } })
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

  const peticionPostsolicitudJ = async (value, value2) => {
    var f = new FormData();
    let Nit = value;
    let Id_solij = value2;
    f.append("Des_soli", estado.Des_soli);
    f.append("METHOD", "CANCELSOLIJ");
    await axios
      .post(baseUrl, f, { params: { Nit: Nit, Id_regj: Identi, Id_solij: Id_solij } })
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

  const peticionDeleteSoli = async (value, value2) => {
    let No_ide = value;
    let Id_soli = value2;
    var f = new FormData();
    f.append("METHOD", "DELETESOLI");
    await axios
      .post(baseUrl, f, { params: { No_ide: No_ide, Id_reg: Identi, Id_soli: Id_soli } })
      .then((response) => {
        setSolicitud(solicitud.filter((Usuario) => Usuario.No_ide !== No_ide));
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

  const peticionDeleteSoliJ = async (value, value2) => {
    let Nit = value;
    let Id_solij = value2;
    var f = new FormData();
    f.append("METHOD", "DELETESOLIJ");
    await axios
      .post(baseUrl, f, { params: { Nit: Nit, Id_regj: Identi, Id_solij: Id_solij } })
      .then((response) => {
        setSolicitud2(solicitud2.filter((Usuario) => Usuario.Nit !== Nit));
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

  const MsolicitudActions = {
    peticionPostsolicitud,
    peticionPostsolicitudJ,
    Detalleid,
    Detalleid2,
    peticionDeleteSoli,
    peticionDeleteSoliJ,
  };

  return {
    MsolicitudActions,
    detalle,
    setDetalle,
    detalle2,
    setDetalle2,
    estado,
    setEstado,
    Identi,
    setIdenti,
  };
};
