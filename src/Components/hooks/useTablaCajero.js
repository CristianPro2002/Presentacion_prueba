import axios from "axios";
import React, { useState } from "react";

export const useTablaCajero = () => {
  const baseUrl = "http://localhost:8080/Banca/bd_crud/cajero.php";
  const [data, setData] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);

  const getCuenta = async (Cajero) => {
    var f = new FormData();
    f.append("Cajero", Cajero)
    f.append("METHOD", "GETCJ1");
    await axios.post(baseUrl, f).then((response) => {
      setData(response.data);
      setTablaUsuarios(response.data)
    });
  };

  const TablaActions = {
    getCuenta,
  };

  return {
    TablaActions,
    data,
    setData,
    tablaUsuarios,
    setTablaUsuarios,
  };
};
