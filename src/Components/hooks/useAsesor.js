import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../stateManagement/provider";
import { useNavigate } from "react-router-dom";
import { Principal } from "../../helpers/url";

export const useAsesor = ({notify2}) => {
  const [data, setData, dataCuenta, setDataCuenta, dataEstados, setDataEstados, select, setSelect] = useContext(AppContext);
  const [dataClient, setDataClient] = useState([]);
  const [dataUsuario, setDataUsuario] = useState({
    No_ide: "",
    Nit: "",
  });

  const [dataSelect, setDataSelect] = useState({
    Tip_prod: "",
  })

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
    await axios.post(Principal, f).then((response) => {
      setData(response.data);
      if(response.data == false){
        notify2()
      }else if(dataUsuario.Nit.length == 0){ 
        notify2()
      }else if(response.data){
        Navigate("/Consulta");
      }
    });
  };

  const peticionGetCuenta = async () => {
    var f = new FormData();
    f.append("Nit", dataUsuario.Nit);
    f.append("METHOD", "CONSULTAIDENTCUENTA");
    await axios.post(Principal, f).then((response) => {
      setDataCuenta(response.data);
    });
  };

  const peticionEstadosCuentasPj = async () => {
    var f = new FormData();
    f.append("Nit", dataUsuario.Nit);
    f.append("METHOD", "ESTADOSCUENTASPJ");
    await axios.post(Principal, f).then((response) => {
        setDataEstados(response.data);
    });
  }

  const peticionGet2 = async () => {
    var f = new FormData();
    f.append("No_ide", dataUsuario.No_ide);
    f.append("METHOD", "CONSULTAID");
    await axios.post(Principal, f).then((response) => {
      setData(response.data);
      if(response.data == false){
        notify2()
      }else if(dataUsuario.No_ide.length == 0){ 
        notify2()
      }else if(response.data){
        Navigate("/Consulta2");
      }
    });
  };

  const peticionGetCuenta2 = async () => {
    var f = new FormData();
    f.append("No_ide", dataUsuario.No_ide);
    f.append("METHOD", "CONSULTAIDCUENTA");
    await axios.post(Principal, f).then((response) => {
      setDataCuenta(response.data);
    });
  };

  const peticionEstadosCuentasPn = async () => {
    var f = new FormData();
    f.append("No_ide", dataUsuario.No_ide);
    f.append("METHOD", "ESTADOSCUENTASPN");
    await axios.post(Principal, f).then((response) => {
        setDataEstados(response.data);
    });
  }

  

//   const validarConsultaPj = () => {
//     peticionGet();
//     if(data && peticionGet){
//       Navigate("/Consulta");
//     }else{
//       alert("No se encontraron resultados");
//     }
//   }
// console.log(data);
//   const validarConsultaPn = () => {
//     peticionGet2();
//     if(data){
//       Navigate("/Consulta2");
//     }else{
//       alert("No se encontraron resultados");
//     }
//   }

  const AsesorActions = {
    peticionGet,
    peticionGet2,
    peticionGetCuenta,
    peticionGetCuenta2,
    peticionEstadosCuentasPj,
    peticionEstadosCuentasPn,
    // validarConsultaPj,
    // validarConsultaPn,
  };

  return {
    AsesorActions,
    data,
    setData,
    dataUsuario,
    setDataUsuario,
    dataClient,
    dataCuenta,
    dataSelect,
    setDataSelect,
  };
};
