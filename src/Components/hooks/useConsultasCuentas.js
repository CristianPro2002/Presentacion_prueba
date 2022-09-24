import { useState } from "react";
import axios from "axios";
import { Principal } from "../../helpers/url";

export const useConsultaCuentaPj = () => {
  const [dataExtraCuenta, setDataExtraCuenta] = useState([]);

  const peticionGetCuenta = async (No_cuenta) => {
    var f = new FormData();
    f.append("METHOD", "CONSULTACUENTAPJ");
    f.append("No_cuenta", No_cuenta);
    await axios.post(Principal, f).then((response) => {
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
  const [dataExtraCuenta, setDataExtraCuenta] = useState([]);

  const peticionGetCuenta = async (No_cuenta) => {
    var f = new FormData();
    f.append("METHOD", "CONSULTACUENTAPN");
    f.append("No_cuenta", No_cuenta);
    await axios.post(Principal, f).then((response) => {
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
