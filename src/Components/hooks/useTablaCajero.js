import axios from "axios";
import { useState } from "react";
import { CajeroBackend } from "../../helpers/url";

export const useTablaCajero = () => {
  const [data, setData] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);

  const getCuenta = async (Cajero) => {
    var f = new FormData();
    f.append("Cajero", Cajero);
    f.append("METHOD", "GETCJ1");
    await axios.post(CajeroBackend, f).then((response) => {
      setData(response.data);
      setTablaUsuarios(response.data);
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
