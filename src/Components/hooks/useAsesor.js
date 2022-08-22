import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../stateManagement/provider";
import { useNavigate } from "react-router-dom";

export const useAsesor = () => {
  const baseUrl = "http://localhost:8080/Banca/bd_crud/principal.php";

  const [data, setData] = useContext(AppContext);
  const [dataUsuario, setDataUsuario] = useState({
    No_ide: "",
    Nit: "",
  });

  let Navigate = useNavigate();

  // let token = "ayJSb2VxlIL5SiLYWJJc3N1aZXIiOiJjc23N1ZXIikYc";

  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };

  // const bodyParameters = {
  //   key: "value",
  // };

  // const get = async () => {
  //   await axios
  //     .get(
  //       "http://67.207.81.246/WebServiceAppCitasMovil/",
  //       config,
  //       bodyParameters
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //     });
  // };

  // useEffect(() => {
  //   get();
  // }, []);

  const peticionGet = async () => {
    var f = new FormData();
    f.append("Nit", dataUsuario.Nit);
    f.append("METHOD", "CONSULTAIDENT");
    await axios.post(baseUrl, f).then((response) => {
      setData(response.data);
      Navigate("/Consulta");
    });
  };

  const peticionGet2 = async () => {
    var f = new FormData();
    f.append("No_ide", dataUsuario.No_ide);
    f.append("METHOD", "CONSULTAID");
    await axios.post(baseUrl, f).then((response) => {
      setData(response.data);
      Navigate("/Consulta2");
    });
  };

  const AsesorActions = {
    peticionGet,
    peticionGet2,
  };

  return {
    AsesorActions,
    data,
    setData,
    dataUsuario,
    setDataUsuario,
  };
};
