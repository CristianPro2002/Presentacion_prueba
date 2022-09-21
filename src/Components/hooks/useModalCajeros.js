import axios from "axios";
import React, { useState, useEffect } from "react";

export const useModalCajeros = () => {
  const baseUrl = "http://localhost:8080/Banca/bd_crud/principal.php";
  const [datam1, setDatam1] = useState([]);
  const [datam2, setDatam2] = useState([]);
  const [datam3, setDatam3] = useState([]);
  const [datam4, setDatam4] = useState([]);
  const [datam5, setDatam5] = useState([]);

  const ConsultaM1 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAM1");
    await axios.post(baseUrl, f).then((response) => {
      setDatam1(response.data);
    });
  };

  const ConsultaM2 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAM2");
    await axios.post(baseUrl, f).then((response) => {
      setDatam2(response.data);
    });
  };

  const ConsultaM3 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAM3");
    await axios.post(baseUrl, f).then((response) => {
      setDatam3(response.data);
    });
  };

  const ConsultaM4 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAM4");
    await axios.post(baseUrl, f).then((response) => {
      setDatam4(response.data);
    });
  };

  const ConsultaM5 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAM5");
    await axios.post(baseUrl, f).then((response) => {
      setDatam5(response.data);
    });
  };

  useEffect(() => {
    ConsultaM1();
    ConsultaM2();
    ConsultaM3();
    ConsultaM4();
    ConsultaM5();
  }, []);

  const ModalesData = {
    ConsultaM1,
    ConsultaM2,
    ConsultaM3,
    ConsultaM4,
    ConsultaM5,
  };

  return {
    ModalesData,
    datam1,
    datam2,
    datam3,
    datam4,
    datam5,
  };
};
