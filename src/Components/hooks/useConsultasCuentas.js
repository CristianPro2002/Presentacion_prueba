import React, { useState } from "react";
import axios from "axios";

export const useConsultaCuentaPj = () => {
  const baseUrl = "http://localhost:8080/Banca/bd_crud/principal.php";

  const [dataExtraCuenta, setDataExtraCuenta] = useState([]);

  const peticionGetCuenta = async (No_cuenta) => {
    var f = new FormData();
    f.append("METHOD", "CONSULTACUENTAPJ");
    f.append("No_cuenta", No_cuenta);
    await axios.post(baseUrl, f).then((response) => {
      setDataExtraCuenta(response.data);
    });
  };

  
  const CuentaActions = {
    peticionGetCuenta,
  };

  return {
    CuentaActions,
    dataExtraCuenta,
  };
};

export const useConsultaCuentaPn = () => {
  const baseUrl = "http://localhost:8080/Banca/bd_crud/principal.php";

  const [dataExtraCuenta, setDataExtraCuenta] = useState([]);

  const peticionGetCuenta = async (No_cuenta) => {
    var f = new FormData();
    f.append("METHOD", "CONSULTACUENTAPN");
    f.append("No_cuenta", No_cuenta);
    await axios.post(baseUrl, f).then((response) => {
      setDataExtraCuenta(response.data);
    });
  };

  const CuentaActions = {
    peticionGetCuenta,
  };

  return {
    CuentaActions,
    dataExtraCuenta,
  };
};
