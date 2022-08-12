import axios from "axios";
import React, { useState } from "react";

export const useTablaCajero = ({}) => {
  const baseUrl = "http://localhost:8080/Banca/bd_crud/cajero.php";
  const [data, setData] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
      setTablaUsuarios(response.data);
    });
  };

  const TablaActions = {
    peticionGet,
  };

  return {
    TablaActions,
    data,
    setData,
    tablaUsuarios,
    setTablaUsuarios,
  };
};
