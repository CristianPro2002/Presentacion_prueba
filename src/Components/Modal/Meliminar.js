import React from 'react'
import { Modal, ModalBody, ModalFooter} from "reactstrap";




const Modales = ({modalEliminar, dataUsuario,peticionDelete, abrirCerrarModalEliminar}) => {
  return (

    <div>
         <Modal isOpen={modalEliminar}>
        <ModalBody>
          ¿Estás seguro que deseas eliminar el Usuario <b>
          {dataUsuario && dataUsuario.Usuario}</b>?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => peticionDelete()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => abrirCerrarModalEliminar()}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Modales