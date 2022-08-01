import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const Meditar = ({dataUsuario, handleChange, modalEditar, dato, peticionPut, abrirCerrarModalEditar}) => {
  return (
    <div>
        <Modal isOpen={modalEditar}>
        <ModalHeader>Editar Contacto</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label className="Esconder">ID:</label>
            <input
              type="text"
              className="form-control Esconder"
              name="Id_usu"
              onChange={handleChange}
              value={dataUsuario && dataUsuario.Id_usu}
            ></input>
            <label>Usuario:</label>
            <br></br>
            <input
              type="text"
              className="form-control"
              name="Usuario"
              onChange={handleChange}
              value={dataUsuario && dataUsuario.Usuario}
            ></input>
            <label>Contraseña:</label>
            <br></br>
            <input
              type="text"
              className="form-control"
              name="Contra"
              onChange={handleChange}
              value={dataUsuario && dataUsuario.Contra}
            ></input>
            <label>Tipo de rol:</label>
            <br></br>
            <select
              class="form-select"
              aria-label="Default select example"
              name="Idti_rol"
              onChange={handleChange}
            >
              <option>
                {dataUsuario && dataUsuario.Nom_rol}
              </option>
              {dato.map((Usuario) => (
                <option value={Usuario.Idti_rol}>
                  {Usuario.Nom_rol}
                </option>
              ))}
            </select>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => peticionPut()}>
            Insertar
          </button>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => abrirCerrarModalEditar()}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Meditar