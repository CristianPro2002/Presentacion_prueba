import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Principal, solicitudReg1, solicitudReg2 } from "../../helpers/url";

export const useDirector = () => {
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
  const [loading, setLoading] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [modalInsertar, setModalInsetar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [dataUsuario, setDataUsuario] = useState({
    Id_usu: "",
    Usuario: "",
    Contra: "",
    Idti_rol: "",
  });

  const peticionGetData = async () => {
    await axios
      .get(Principal)
      .then((response) => {
        setData2(response.data);
        setLoading(true);
        setTablaUsuarios(response.data);
      })
      .catch((error) => {
        return alert(error);
      });
  };

  const peticionGet3 = async () => {
    await axios.get(solicitudReg1).then((response) => {
      setSolicitud(response.data);
    });
  };

  const peticionGet4 = async () => {
    await axios.get(solicitudReg2).then((response) => {
      setSolicitud2(response.data);
    });
  };
  /* notificaciones */
  const notify1 = () =>
    toast.error("  no puede haber mas de un rol tipo director ❕");
  const notify2 = () =>
    toast.error("  no puede haber mas de 5 roles tipo Asesor ❕");
  const notify3 = () =>
    toast.error("  no puede haber mas de un  rol tipo Gerente ❕");
  const notify4 = () =>
    toast.error("  no puede haber mas de 5 roles tipo Cajero ❕");
  const notify5 = () =>
    toast.error("  no puede haber mas de un rol tipo Cajero Principal ❕");

  const peticionPost = async () => {
    var f = new FormData();
    f.append("Id_usu", dataUsuario.Id_usu);
    f.append("Usuario", dataUsuario.Usuario);
    f.append("Contra", dataUsuario.Contra);
    f.append("Idti_rol", dataUsuario.Idti_rol);
    f.append("METHOD", "POST");
    await axios
      .post(Principal, f)
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
    await axios.post(Principal, f).then((response) => {
      setDato(response.data);
    });
  };

  /* eslint-disable */
  const peticionPut = async () => {
    var f = new FormData();
    f.append("Id_usu", dataUsuario.Id_usu);
    f.append("Usuario", dataUsuario.Usuario);
    f.append("Contra", dataUsuario.Contra);
    f.append("Idti_rol", dataUsuario.Idti_rol);
    f.append("METHOD", "PUT");
    await axios
      .post(Principal, f, { params: { Id_usu: dataUsuario.Id_usu } })
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

  /* eslint-enable */

  const peticionDelete = async () => {
    var f = new FormData();
    f.append("METHOD", "DELETE");
    await axios
      .post(Principal, f, { params: { Id_usu: dataUsuario.Id_usu } })
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
    await axios.post(Principal, f).then((response) => {
      setValiDi(response.data);
    });
  };

  const peticionGetVAsesor = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVAROLA");
    await axios.post(Principal, f).then((response) => {
      setValiAse(response.data);
    });
  };

  const peticionGetVGerente = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVAROLG");
    await axios.post(Principal, f).then((response) => {
      setValiGer(response.data);
    });
  };

  const peticionGetVCajero = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVAROLC");
    await axios.post(Principal, f).then((response) => {
      setValiCaj(response.data);
    });
  };

  const peticionGetVCajeroP = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVAROLCP");
    await axios.post(Principal, f).then((response) => {
      setValiCajP(response.data);
    });
  };

  /* eslint-disable */
  const contarNDirector = () => {
    setRefreshData(true);
    if (valiDi.length >= 1 && dataUsuario.Idti_rol == 1) {
      notify1("hay mas de un rol director");
    } else if (valiAse.length >= 5 && dataUsuario.Idti_rol == 2) {
      notify2("hay mas de un rol asesor");
    } else if (valiGer.length >= 1 && dataUsuario.Idti_rol == 3) {
      notify3("hay mas de un rol gerente");
    } else if (valiCaj.length >= 5 && dataUsuario.Idti_rol == 4) {
      notify4("hay mas de un rol cajero");
    } else if (valiCajP.length >= 1 && dataUsuario.Idti_rol == 5) {
      notify5("hay mas de un rol cajero principal");
    } else {
      peticionPost();
    }
  };

  const contarUpdate = () => {
    setRefreshData(true);
    if (valiDi.length >= 1 && dataUsuario.Idti_rol == 1) {
      notify1("hay mas de un rol director");
    } else if (valiAse.length >= 5 && dataUsuario.Idti_rol == 2) {
      notify2("hay mas de un rol asesor");
    } else if (valiGer.length >= 1 && dataUsuario.Idti_rol == 3) {
      notify3("hay mas de un rol gerente");
    } else if (valiCaj.length >= 5 && dataUsuario.Idti_rol == 4) {
      notify4("hay mas de un rol cajero");
    } else if (valiCajP.length >= 1 && dataUsuario.Idti_rol == 5) {
      notify5("hay mas de un rol cajero principal");
    } else {
      peticionPut();
    }
  };

  const abrirCerrarModalInsertar = () => {
    setModalInsetar(!modalInsertar);
    setRefreshData(!refreshData);
  };

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  const seleccionarUsuario = (usuario, caso) => {
    setDataUsuario(usuario);

    caso === "Editar" ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
      if (
        elemento.Usuario.toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.Id_usu.toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.Nom_rol.toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setData2(resultadosBusqueda);
  };

  /* eslint-enable */

  const abrirp = (e) => {
    timeSoli();
    document
      .getElementById("ventana_modalp")
      .setAttribute("style", "visibility:visible; top:50%;");
    document
      .getElementById("background__blur")
      .setAttribute("style", "visibility:visible");
    document.getElementById("father01").setAttribute("style", "display:none;");
  };

  const cerrarp = (e) => {
    document
      .getElementById("ventana_modalp")
      .setAttribute("style", "visibility: hidden;");
    document
      .getElementById("background__blur")
      .setAttribute("style", "display: none;");
    document
      .getElementById("father01")
      .setAttribute("style", "visibility:visible");
  };

  const abrir = (e) => {
    document
      .getElementById("ventana_modal")
      .setAttribute("style", "visibility:visible; top:50%;");
    document
      .getElementById("ventana_modalp")
      .setAttribute("style", "display:none;");
  };

  const abrirpj = (e) => {
    document
      .getElementById("ventana_modal3")
      .setAttribute("style", "visibility:visible; top:50%;");
    document
      .getElementById("ventana_modalp")
      .setAttribute("style", "display:none;");
  };

  const cerrar = (e) => {
    document
      .getElementById("ventana_modal")
      .setAttribute("style", "display:none;");
    document
      .getElementById("ventana_modalp")
      .setAttribute("style", "visibility:visible; top:50%;");
  };

  const cerrarpj = (e) => {
    document
      .getElementById("ventana_modal3")
      .setAttribute("style", "display:none;");
    document
      .getElementById("ventana_modalp")
      .setAttribute("style", "visibility:visible; top:50%;");
  };

  const abrir2 = (e) => {
    document
      .getElementById("ventana_modal2")
      .setAttribute("style", "visibility:visible; top:50%;");
  };

  const abrir3 = (e) => {
    document
      .getElementById("ventana_modal4")
      .setAttribute("style", "visibility:visible; top:50%;");
  };

  const cerrar2 = (e) => {
    document
      .getElementById("ventana_modal2")
      .setAttribute("style", "display:none;");
    document
      .getElementById("ventana_modal4")
      .setAttribute("style", "display:none;");
  };

  const cerrarT = (e) => {
    document
      .getElementById("ventana_modal")
      .setAttribute("style", "display:none;");
    document
      .getElementById("ventana_modal2")
      .setAttribute("style", "display:none;");
  };

  const timeSoli = () => {
    setInterval(DirectorActions.peticionGet3, 5000);
    setInterval(DirectorActions.peticionGet4, 5000);
  };

  useEffect(() => {
    peticionGetVAsesor();
    peticionGetVDirect();
    peticionGetVGerente();
    peticionGetVCajero();
    peticionGetVCajeroP();
    peticionGetData();
  }, [refreshData]);

  useEffect(() => {
    peticionGetRoles();
    peticionGetData();
    peticionGet3();
    peticionGet4();
    peticionGetVAsesor();
    peticionGetVDirect();
    peticionGetVGerente();
    peticionGetVCajero();
    peticionGetVCajeroP();
  }, []);

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
    contarUpdate,
    peticionGetVGerente,
    peticionGetVCajero,
    peticionGetVCajeroP,
    notify1,
    notify2,
    notify3,
    notify4,
    notify5,
    abrirCerrarModalInsertar,
    abrirCerrarModalEditar,
    abrirCerrarModalEliminar,
    seleccionarUsuario,
    filtrar,
    abrirp,
    cerrarp,
    abrir,
    abrirpj,
    cerrar,
    cerrarpj,
    abrir2,
    abrir3,
    cerrar2,
    cerrarT,
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
    loading,
    setBusqueda,
    busqueda,
    modalInsertar,
    modalEditar,
    modalEliminar,
  };
};
