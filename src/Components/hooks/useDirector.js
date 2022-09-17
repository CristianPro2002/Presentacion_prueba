import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const useDirector = ({
  abrirCerrarModalInsertar,
  abrirCerrarModalEditar,
  abrirCerrarModalEliminar,
}) => {
    
  const baseUrl = "http://localhost:8080/Banca/bd_crud/principal.php";
  const baseUrlUser = "http://localhost:8080/Banca/bd_crud/user.php";
  const solicitudReg = "http://localhost:8080/Banca/bd_crud/solicitud1.php";
  const solicitudReg2 = "http://localhost:8080/Banca/bd_crud/solicitud2.php";

  const [data2, setData2] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  const [solicitud, setSolicitud] = useState([]);
  const [solicitud2, setSolicitud2] = useState([]);
  const [dato, setDato] = useState([]);
  const [valiDi, setValiDi] = useState([]);
  const [valiAse, setValiAse] = useState([]);
  const [valiGer, setValiGer] = useState([]);
  const [valiCaj, setValiCaj] = useState([]);
  const [valiCajP, setValiCajP] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
  const [dataUsuario, setDataUsuario] = useState({
    Id_usu: "",
    Usuario: "",
    Contra: "",
    Idti_rol: "",
  });

  const peticionGetData = async () => {
    await axios
      .get(baseUrl)
      .then((response) => {
        setData2(response.data);
        setTablaUsuarios(response.data);
      })
      .catch((error) => {
        return alert(error);
      });
  };

  const peticionGet3 = async () => {
    await axios.get(solicitudReg).then((response) => {
      setSolicitud(response.data);
    });
  };

  const peticionGet4 = async () => {
    await axios.get(solicitudReg2).then((response) => {
      setSolicitud2(response.data);
    });
  };
/* notificaciones */
const notify1 = () => toast("  no puede haber mas de un rol tipo director ❕");
const notify2 = () => toast("  no puede haber mas de 5 roles tipo Asesor ❕");
const notify3 = () => toast("  no puede haber mas de un  rol tipo Gerente ❕");
const notify4 = () => toast("  no puede haber mas de 5 roles tipo Cajero ❕");
const notify5 = () => toast("  no puede haber mas de un rol tipo Cajero Principal ❕");
  const peticionPost = async () => {
    var f = new FormData();
    f.append("Id_usu", dataUsuario.Id_usu);
    f.append("Usuario", dataUsuario.Usuario);
    f.append("Contra", dataUsuario.Contra);
    f.append("Idti_rol", dataUsuario.Idti_rol);
    f.append("METHOD", "POST");
    await axios
      .post(baseUrl, f)
      .then((response) => {
        setData2(data2.concat(response.data));
        abrirCerrarModalInsertar();
        peticionGetData();
      })
      .catch((error) => {
        return alert(error);
      });
  };

  const peticionGetRoles = async () => {
    var f = new FormData();
    f.append("METHOD", "ROLES");
    await axios.post(baseUrl, f).then((response) => {
      setDato(response.data);
    });
  };

  const peticionPut = async () => {
    var f = new FormData();
    f.append("Id_usu", dataUsuario.Id_usu);
    f.append("Usuario", dataUsuario.Usuario);
    f.append("Contra", dataUsuario.Contra);
    f.append("Idti_rol", dataUsuario.Idti_rol);
    f.append("METHOD", "PUT");
    await axios
      .post(baseUrl, f, { params: { Id_usu: dataUsuario.Id_usu } })
      .then((response) => {
        var dataNueva = data2;
        dataNueva.map((Usuario) => {
          if (Usuario.Id_usu === dataUsuario.Id_usu) {
            Usuario.Id_usu = dataUsuario.Id_usu;
            Usuario.Usuario = dataUsuario.Usuario;
            Usuario.Contra = dataUsuario.Contra;
            Usuario.Idti_rol = dataUsuario.Idti_rol;
          }
        });
        setData2(dataNueva);
        abrirCerrarModalEditar();
        peticionGetData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionDelete = async () => {
    var f = new FormData();
    f.append("METHOD", "DELETE");
    await axios
      .post(baseUrl, f, { params: { Id_usu: dataUsuario.Id_usu } })
      .then((response) => {
        setData2(
          data2.filter((Usuario) => Usuario.Id_usu !== dataUsuario.Id_usu)
        );
        abrirCerrarModalEliminar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /*------------------------------------*/
        //peticion validar num roles

  const peticionGetVDirect = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVAROLD");
    await axios.post(baseUrl, f).then((response) => {
      setValiDi(response.data);
    });
  };
  
  const peticionGetVAsesor = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVAROLA");
    await axios.post(baseUrl, f).then((response) => {
      setValiAse(response.data);
    });
  };

  const peticionGetVGerente = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVAROLG");
    await axios.post(baseUrl, f).then((response) => {
      setValiGer(response.data);
    });
  };

  const peticionGetVCajero = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVAROLC");
    await axios.post(baseUrl, f).then((response) => {
      setValiCaj(response.data);
    });
  };

  const peticionGetVCajeroP = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVAROLCP");
    await axios.post(baseUrl, f).then((response) => {
      setValiCajP(response.data);
    });
  };

  const contarNDirector = () => {
    setRefreshData(true);
    if(valiDi.length >= 1 && dataUsuario.Idti_rol == 1){
      notify1("hay mas de un rol director")
    } else if(valiAse.length >= 5 && dataUsuario.Idti_rol == 2){
      notify2("hay mas de un rol asesor")
    } else if(valiGer.length >= 1 && dataUsuario.Idti_rol == 3){
      notify3("hay mas de un rol gerente")
    } else if(valiCaj.length >= 5 && dataUsuario.Idti_rol == 4){
      notify4("hay mas de un rol cajero")
    }else if(valiCajP.length >= 1 && dataUsuario.Idti_rol == 5){
      notify5("hay mas de un rol cajero principal")
    }else{  
      peticionPost();
    }
  }

  const DirectorActions = {
    peticionGetData,
    peticionGet3,
    peticionGet4,
    peticionPost,
    peticionPut,
    peticionDelete,
    peticionGetRoles,
    peticionGetVAsesor,
    peticionGetVDirect,
    contarNDirector,
    peticionGetVGerente,
    peticionGetVCajero,
    peticionGetVCajeroP,
    notify1,
    notify2,
    notify3,
    notify4,
    notify5
  };

  return {
    data2,
    setData2,
    tablaUsuarios,
    setTablaUsuarios,
    solicitud,
    setSolicitud,
    solicitud2,
    setSolicitud2,
    dato,
    setDato,
    dataUsuario,
    setDataUsuario,
    DirectorActions,
    refreshData,
    setRefreshData,
  };
};
