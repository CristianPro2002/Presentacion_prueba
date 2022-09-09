import axios from "axios";
import React, { useState } from "react";

export const useCajero = ({ numeroCajeroBD }) => {
    
  const baseUrl = "http://localhost:8080/Banca/bd_crud/cajero.php";
  const baseUrl2 = "http://localhost:8080/Banca/bd_crud/principal.php";

  const [getCuentaC, setGetCuentaC] = useState([]);
  const [getCuentaJ, setGetCuentaJ] = useState([]);
  const [data, setData] = useState([]);
  const [consulta, setConsulta] = useState([]);
  const [consulta2, setConsulta2] = useState([]);
  const [reportCuenta, setReportCuenta] = useState([]);
  const [reportCuentaDate, setReportCuentaDate] = useState([]);
  const [reportValueC, setReportValueC] = useState([]);
  const [reportValueR, setReportValueR] = useState([]);
  const [NoCuenta, setNoCuenta] = useState([]);
  const [mostrarReporte, setMostrarReporte] = useState(false);
  const [estadoPeticion, setEstadoPeticion] = useState(false);
  const handleShow = () => setMostrarReporte(!mostrarReporte);
  const [mostrarReporteDate, setMostrarReporteDate] = useState(false);
  const handleShow2 = () => setMostrarReporteDate(!mostrarReporteDate);
  const [dataUsuario, setDataUsuario] = useState({
    Id_act: "",
    Fecha_act: "",
    Tip_pro: "",
    Valor_act: "",
    Cajero: "",
    No_cuenta: "",
    Nom_ra: "",
  });
  const [dataUsuarioReport, setDataUsuarioReport] = useState({
    No_cuenta: "",
  })
  const [dataUsuarioReportDate, setDataUsuarioReportDate] = useState({
    Min_date: "",
    Max_date: "",
  })

  const peticionGetCuentaC = async () => {
    var f = new FormData();
    f.append("METHOD", "GETCUENTAC");
    await axios.post(baseUrl, f).then((response) => {
      setGetCuentaC(response.data);
    });
  };

  const peticionGetCuentaJ = async () => {
    var f = new FormData();
    f.append("METHOD", "GETCUENTAJ");
    await axios.post(baseUrl, f).then((response) => {
      setGetCuentaJ(response.data);
    });
  };

  const peticionPost = async (Estado) => {

    var f = new FormData();
    f.append("Id_act", dataUsuario.Id_act);
    f.append("Fecha_act", dataUsuario.Fecha_act);
    f.append("Tip_pro", dataUsuario.Tip_pro);
    f.append("Valor_act", dataUsuario.Valor_act);
    f.append("Cajero", dataUsuario.Cajero);
    f.append("No_cuenta", dataUsuario.No_cuenta);
    f.append("Estado", Estado);
    f.append("METHOD", "POSTGET");
    await axios.post(baseUrl, f).then((response) => {
      setData(data.concat(response.data));
    });
  };

  const peticionPostFalse = async () => {

    var f = new FormData();
    f.append("Id_act", dataUsuario.Id_act);
    f.append("Fecha_act", dataUsuario.Fecha_act);
    f.append("Tip_pro", dataUsuario.Tip_pro);
    f.append("Valor_act", dataUsuario.Valor_act);
    f.append("Cajero", dataUsuario.Cajero);
    f.append("No_cuenta", dataUsuario.No_cuenta);
    f.append("METHOD", "POSTGETFALSE");
    await axios.post(baseUrl, f).then((response) => {
      console.log(response.data, "Realizado");
    });
  };

  const peticionGetCajero = async () => {
    var f = new FormData();
    f.append("No_cuenta", dataUsuario.No_cuenta);
    f.append("METHOD", "CONSULTACAJERO");
    await axios.post(baseUrl2, f).then((response) => {
      setConsulta(response.data);
      if (response.data == []) {
        setEstadoPeticion(false);
      }else {
        setEstadoPeticion(true);
        setDataUsuario({
          Id_act: String(response.data.Nit),
          Cajero: String(numeroCajeroBD),
          Nom_ra: String(response.data.Nom_ra),
          No_cuenta: String(response.data.No_cuenta),
        });
      }
    });
  };

  const peticionGetCajero2 = async () => {
    var f = new FormData();
    f.append("No_cuenta", dataUsuario.No_cuenta);
    f.append("METHOD", "CONSULTACAJERO2");
    await axios.post(baseUrl2, f).then((response) => {
      setConsulta2(response.data);
      if (response.data == []) {
        setEstadoPeticion(false);
        peticionGetCajero();
      }else{
        setEstadoPeticion(true);
        setDataUsuario({
          Id_act: String(response.data.No_ide),
          Cajero: String(numeroCajeroBD),
          Nom_ra: String(response.data.Pri_nom),
          No_cuenta: String(response.data.No_cuenta),
        });
      }
    });
  };

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };

  const peticionGetReport = async () => {
    var f = new FormData();
    f.append("No_cuenta", dataUsuarioReport.No_cuenta);
    f.append("METHOD", "REPORTCUENTA");
    await axios.post(baseUrl2, f).then((response) => {
      setReportCuenta(response.data);
      setNoCuenta(dataUsuarioReport.No_cuenta);
    }).catch((error) => {
      console.log(error);
    })
  }

  const peticionGetValueCuenta = async () => {
    var f = new FormData();
    f.append("No_cuenta", dataUsuarioReport.No_cuenta);
    f.append("METHOD", "REPORTVALUEPCUENTA");
    await axios.post(baseUrl2, f).then((response) => {
      setReportValueC(response.data);  
    }).catch((error) => {
      console.log(error);
    })
  }

  const peticionGetValueNCuenta = async () => {
    var f = new FormData();
    f.append("No_cuenta", dataUsuarioReport.No_cuenta);
    f.append("METHOD", "REPORTVALUENCUENTA");
    await axios.post(baseUrl2, f).then((response) => {
      setReportValueR(response.data);   
    }).catch((error) => {
      console.log(error);
    })
  }

  const peticionGetReportDate = async () => {
    var f = new FormData();
    f.append("Min_date", dataUsuarioReportDate.Min_date);
    f.append("Max_date", dataUsuarioReportDate.Max_date);
    f.append("METHOD", "REPORTCUENTADATE");
    await axios.post(baseUrl2, f).then((response) => {
      setReportCuentaDate(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  const CajeroActions = {
    peticionGetCuentaC,
    peticionGetCuentaJ,
    peticionPost,
    peticionGetCajero,
    peticionGetCajero2,
    peticionGet,
    peticionPostFalse,
    peticionGetReport,
    peticionGetReportDate,
    handleShow,
    handleShow2,
    peticionGetValueCuenta,
    peticionGetValueNCuenta,
  };

  return {
    CajeroActions,
    getCuentaC,
    setGetCuentaC,
    getCuentaJ,
    setGetCuentaJ,
    data,
    setData,
    consulta,
    setConsulta,
    consulta2,
    setConsulta2,
    dataUsuario,
    setDataUsuario,
    dataUsuarioReport,
    setDataUsuarioReport,
    reportCuenta,
    NoCuenta,
    setDataUsuarioReportDate,
    dataUsuarioReportDate,
    reportCuentaDate,
    mostrarReporte,
    mostrarReporteDate,
    reportValueC,
    reportValueR,
    estadoPeticion,
  };
};
