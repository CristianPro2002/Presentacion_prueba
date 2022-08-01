import React, { useState } from "react";
import "./ESTILOS_FORMD/estile_form_d.css";
import imagen from "./Imagenes/Manager-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ListGroup from "react-bootstrap/ListGroup";
import swal from "sweetalert";
import Table from 'react-bootstrap/Table'

export const Formulario_Director = (props) => {
  const mostrarAlerta = () => {
    swal({
      title: "Usuario creado con Exito",
      icon: "success",
      button: false,
      timer: 1300,
    });
  };
  const [passwordshow, setpasswordshow] = useState(false);
  const togglepasword = () => {
    setpasswordshow(!passwordshow);
  };

  const initialStateDatos = {
    Nombre_usu_form: "",
    Contraseña_usu_form: "",
    Tipo_de_rol: "",
    Confirmacion_creacion: "false",
  };

  const [datos, setDatos] = useState(initialStateDatos);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDatos({ ...datos, [name]: value });
  };
  const handleChecked = (event) => {
    const { name, checked } = event.target;
    setDatos({ ...datos, [name]: checked });
  };
  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos);
    props.addoredit(datos);
    setDatos({ ...initialStateDatos });
  };

const abrir = (e) => {
  e.preventDefault();
  document.getElementById('ventana_modal').setAttribute("style", "visibility:visible; top:50%;");
}

const cerrar = (e) => {
  e.preventDefault();
  document.getElementById('ventana_modal').setAttribute("style", "display:none;")
}

const abrir2 = (e) => {
  e.preventDefault();
  document.getElementById('ventana_modal2').setAttribute("style", "visibility:visible; top:50%;");
}

const cerrar2 = (e) => {
  e.preventDefault();
  document.getElementById('ventana_modal2').setAttribute("style", "display:none;")
}

const cerrarT = (e) => {
  e.preventDefault();
  document.getElementById('ventana_modal').setAttribute("style", "display:none;")
  document.getElementById('ventana_modal2').setAttribute("style", "display:none;")
}



  return (
    <div className="contenedor_padre_director">
      
      <div className="contemodal">
        <input type="checkbox" id="evento-click" />
        <div className="botnomodal">
          <label
            for="evento-click"
            title="Abrir modal"
            className="btn__open-modal"
          >
            <p>Solicitudes</p>
          </label>
        </div>
        <div className="background__blur"></div>

        <div className="container__modal">
          <div className="header__modal">
            <label for="evento-click">X</label>
          </div>

          <div className="body__modal">
            <h1 className="title__modal">Solicitudes</h1>
            <ListGroup className="listassoli">
              <ListGroup.Item action onClick={abrir} className="listascss" id="botonV">Solicitud #1-Asesor1</ListGroup.Item>
              <ListGroup.Item action onClick={abrir} className="listascss" id="botonV">Solicitud #3-Asesor1</ListGroup.Item>
              <ListGroup.Item action onClick={abrir} className="listascss" id="botonV">Solicitud #3-Asesor2</ListGroup.Item>
              <ListGroup.Item action onClick={abrir} className="listascss" id="botonV">Solicitud #4-Asesor4</ListGroup.Item>
              <ListGroup.Item action onClick={abrir} className="listascss" id="botonV">Solicitud #5-Asesor3</ListGroup.Item>
            </ListGroup>
          </div>
        </div>

        <div class="container__modal2"id = "ventana_modal">
        <input type="checkbox" id="evento-click2" />
<div class="header__modal2">
    <label for="evento-click2" onClick={cerrar}>X</label>
</div>

<div class="body__modal2">
    <h1 class="title__modal2">Solicitud #-Asesor#</h1>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>

<button onClick={cerrar}>Aceptar</button>
<button onClick={abrir2}>Cancelar</button>
</div>

</div>


<div class="container__modal3"id = "ventana_modal2">
        <input type="checkbox" id="evento-click3" />
<div class="header__modal3">
    <label for="evento-click3" onClick={cerrar2}>X</label>
</div>

<div class="body__modal3">
    <h1 class="title__modal3">Solicitud #-Asesor#</h1>
    <input type="text" className="contenedortext" />
    <button onClick={cerrarT}>Aceptar</button>
<button onClick={cerrar2}>Cancelar</button>
    </div>

        
      </div>
      </div>
      <div className="container_formulario_director">
        <form
          onSubmit={enviarDatos}
          className=""
          method="post"
          action="Index.php"
        >
          <div className="titulo_creacion_usu">
            <img className="img_usu_creacion" src={imagen} alt=""></img>
            <h3>Creacion de Usuarios</h3>
          </div>
          <div className="Nombre_Usuario">
            <div className="label_usu">
              <label>Nombre de usuario</label>
            </div>
            <input
              required
              className="input_color1"
              placeholder="Enter the user name"
              type="text"
              name="Nombre_usu_form"
              onChange={handleInputChange}
              value={datos.Nombre_usu_form}
            ></input>
          </div>
          <div className="Contraseña_Usuario">
            <span class="icon_eye" onClick={togglepasword}>
              <FontAwesomeIcon icon={faEyeSlash} />
            </span>
            <div className="Contraseña_label_usu">
              <label>Contraseña de usuario</label>
            </div>
            <input
              required
              className="input_color2"
              id="input_contra_form"
              placeholder="Enter the password"
              type={passwordshow ? "text" : "password"}
              name="Contraseña_usu_form"
              value={datos.Contraseña_usu_form}
              onChange={handleInputChange}
            ></input>
          </div>
          <div id="arreglos_desple">
            <select
              className="nashe"
              required
              name="Tipo_de_rol"
              id="select_sin_react"
              onChange={handleInputChange}
            >
              Tipo de rol
              <option value="Director">Director</option>
              <option value="Gerente">Gerente</option>
              <option value="Asesor">Asesor</option>
              <option value="Cajero">Cajero</option>
            </select>
          </div>
          <div className="chequeo">
            <input
              type="checkbox"
              required
              name="Confirmacion_creacion"
              value="Form_usu.Confirmacion_creacion"
              onChange={handleChecked}
            ></input>
            <label className="label_check">
              {" "}
              Confirmar creacion de usuario
            </label>
          </div>
          <div className="center_button">
            <button
              onClick={() => mostrarAlerta()}
              type="submit"
              class="btn third"
              name="registrarse"
            >
              crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
