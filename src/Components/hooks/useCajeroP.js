import React, { useState } from "react";
import axios from "axios";

export const useCajeroP = () => {
  const baseUrl = "http://localhost:8080/Banca/bd_crud/principal.php";
  const baseUrl2 = "http://localhost:8080/Banca/bd_crud/cajero.php";
  const [value1, setValue1] = useState([]);
  const [value2, setValue2] = useState([]);
  const [value3, setValue3] = useState([]);
  const [value4, setValue4] = useState([]);
  const [value5, setValue5] = useState([]);

  const [rest1, setRest1] = useState([]);
  const [rest2, setRest2] = useState([]);
  const [rest3, setRest3] = useState([]);
  const [rest4, setRest4] = useState([]);
  const [rest5, setRest5] = useState([]);

  const ConsultaValue1 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUE1");
    await axios.post(baseUrl, f).then((response) => {
      setValue1(response.data);
    });
  };

  const ConsultaValue2 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUE2");
    await axios.post(baseUrl, f).then((response) => {
      setValue2(response.data);
    });
  };

  const ConsultaValue3 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUE3");
    await axios.post(baseUrl, f).then((response) => {
      setValue3(response.data);
    });
  };

  const ConsultaValue4 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUE4");
    await axios.post(baseUrl, f).then((response) => {
      setValue4(response.data);
    });
  };

  const ConsultaValue5 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUE5");
    await axios.post(baseUrl, f).then((response) => {
      setValue5(response.data);
    });
  };

  const ConsultaRest1 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUEREST1");
    await axios.post(baseUrl, f).then((response) => {
      setRest1(response.data);
    });
  };

  const ConsultaRest2 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUEREST2");
    await axios.post(baseUrl, f).then((response) => {
      setRest2(response.data);
    });
  };

  const ConsultaRest3 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUEREST3");
    await axios.post(baseUrl, f).then((response) => {
      setRest3(response.data);
    });
  };

  const ConsultaRest4 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUEREST4");
    await axios.post(baseUrl, f).then((response) => {
      setRest4(response.data);
    });
  };

  const ConsultaRest5 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUEREST5");
    await axios.post(baseUrl, f).then((response) => {
      setRest5(response.data);
    });
  };

  const DeleteValues = async () => {
    var f = new FormData();
    f.append("METHOD", "DELETEVALUES");
    await axios.post(baseUrl2, f).then((response) => {});
  };

  const CajeroPactions = {
    ConsultaValue1,
    ConsultaValue2,
    ConsultaValue3,
    ConsultaValue4,
    ConsultaValue5,
    ConsultaRest1,
    ConsultaRest2,
    ConsultaRest3,
    ConsultaRest4,
    ConsultaRest5,
    DeleteValues,
  };

  return {
    CajeroPactions,
    value1,
    value2,
    value3,
    value4,
    value5,
    rest1,
    rest2,
    rest3,
    rest4,
    rest5,
  };
};
