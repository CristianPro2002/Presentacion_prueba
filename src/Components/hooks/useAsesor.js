import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../stateManagement/provider";
import { useNavigate } from "react-router-dom";

export const useAsesor = ({notify2}) => {
  const baseUrl = "http://localhost:8080/Banca/bd_crud/principal.php";
  const baseUrl2 = "http://localhost:8080/Banca/bd_crud/user.php";

  const [data, setData] = useContext(AppContext);
  const [dataClient, setDataClient] = useState([]);
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
      if(response.data == false){
        notify2()
      }else if(dataUsuario.Nit.length == 0){ 
        notify2()
      }else if(response.data){
        Navigate("/Consulta");
      }
    });
  };


  const peticionGet2 = async () => {
    var f = new FormData();
    f.append("No_ide", dataUsuario.No_ide);
    f.append("METHOD", "CONSULTAID");
    await axios.post(baseUrl, f).then((response) => {
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
  };
};
