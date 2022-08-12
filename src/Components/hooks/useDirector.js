import axios from "axios";
import React, { useState } from "react";

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
  const [dataUsuario, setDataUsuario] = useState({
    Id_usu: "",
    Usuario: "",
    Contra: "",
    Idti_rol: "",
  });

  const peticionGetData = async () => {
    await axios
      .get(baseUrlUser)
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

  const DirectorActions = {
    peticionGetData,
    peticionGet3,
    peticionGet4,
    peticionPost,
    peticionPut,
    peticionDelete,
    peticionGetRoles,
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
  };
};
