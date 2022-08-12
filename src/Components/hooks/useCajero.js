import axios from "axios";
import React, { useState } from "react";

export const useCajero = ({ numeroCajeroBD }) => {
    
  const baseUrl = "http://localhost:8080/Banca/bd_crud/cajero.php";
  const baseUrl2 = "http://localhost:8080/Banca/bd_crud/principal.php";

  const [getCuentaC, setGetCuentaC] = useState([]);
  const [getCuentaJ, setGetCuentaJ] = useState([]);
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

  const peticionGetCuentaC = async () => {
    var f = new FormData();
    f.append("METHOD", "GETCUENTAC");
    await axios.post(baseUrl, f).then((response) => {
      setGetCuentaC(response.data);
    });
  };

  const peticionGetCuentaJ = async () => {
    var f = new FormData();
    f.append("METHOD", "GETCUENTAJ");
    await axios.post(baseUrl, f).then((response) => {
      setGetCuentaJ(response.data);
    });
  };

  const peticionPost = async (Estado) => {
    //console.log(dataUsuario)
    var f = new FormData();
    f.append("Id_act", dataUsuario.Id_act);
    f.append("Fecha_act", dataUsuario.Fecha_act);
    f.append("Tip_pro", dataUsuario.Tip_pro);
    f.append("Valor_act", dataUsuario.Valor_act);
    f.append("Cajero", dataUsuario.Cajero);
    f.append("No_cuenta", dataUsuario.No_cuenta);
    f.append("Estado", Estado);
    f.append("METHOD", "POSTGET");
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
          No_cuenta: String(response.data[0].No_cuenta),
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
      if (response.data.length == 1) {
        setDataUsuario({
          Id_act: String(response.data[0].No_ide),
          Cajero: String(numeroCajeroBD),
          Nom_ra: String(response.data[0].Pri_nom),
          No_cuenta: String(response.data[0].No_cuenta),
        });
      }
    });
  };

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };

  const CajeroActions = {
    peticionGetCuentaC,
    peticionGetCuentaJ,
    peticionPost,
    peticionGetCajero,
    peticionGetCajero2,
    peticionGet,
  };

  return {
    CajeroActions,
    getCuentaC,
    setGetCuentaC,
    getCuentaJ,
    setGetCuentaJ,
    data,
    setData,
    consulta,
    setConsulta,
    consulta2,
    setConsulta2,
    dataUsuario,
    setDataUsuario,
  };
};
