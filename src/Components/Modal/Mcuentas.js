import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Button from "react-bootstrap/Button";
import "./Modals.css";

export const McuentasPJ = ({ handleShow, mostrar, datam1 }) => {
  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }

  const [currentPage, setCurrentPage] = useState(0);

  const filterData = () => {
    return datam1.slice(currentPage, currentPage + 5);
  };

  const nextPage = () => {
    if (currentPage >= datam1.length) return;
    setCurrentPage(currentPage + 5);
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 5);
    }
  };

  return (
    <>
      <Modal isOpen={mostrar}>
        <ModalHeader closeButton>Registros de Cuenta</ModalHeader>
        <ModalBody>
          {datam1.length >= 1 ? (
            <div>
              {filterData().map((data) => (
                <div className="padreModals01">
                  <div className="content-info">
                    <div>
                      <label>
                        <b>Fecha</b>
                      </label>
                    </div>
                    {data.Fe_act}
                  </div>
                  <div className="content-info">
                    <div>
                      <label>
                        <b>Producto</b>
                      </label>
                    </div>
                    {data.ti_pro}
                  </div>
                  <div className="content-info">
                    <div>
                      <label>
                        <b>Valor</b>
                      </label>
                    </div>
                    {separator(data.Valor)}
                  </div>
                  <div className="content-info">
                    <div>
                      <label>
                        <b>Cuenta</b>
                      </label>
                    </div>
                    {data.No_cuec}
                    {data.No_cuej}
                  </div>
                </div>
              ))}
              <div>
                <div className="content_actionsPage01">
                  <button onClick={() => prevPage()}>Atras</button>
                  <button onClick={() => nextPage()}>Siguiente</button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div
                style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <h1>
                  <b>No hay registros</b>
                </h1>
              </div>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant="danger" onClick={() => handleShow()}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const McuentasPN = ({ handleShow, mostrar, datam1 }) => {
  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }
  const [currentPage, setCurrentPage] = useState(0);

  const filterData = () => {
    return datam1.slice(currentPage, currentPage + 5);
  };

  const nextPage = () => {
    if (currentPage >= datam1.length) return;
    setCurrentPage(currentPage + 5);
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 5);
    }
  };

  return (
    <>
      <Modal isOpen={mostrar}>
        <ModalHeader closeButton>Registros de Cuenta</ModalHeader>
        <ModalBody>
          {datam1.length >= 1 ? (
            <div>
              {filterData().map((data) => (
                <div className="padreModals01">
                  <div className="content-info">
                    <div>
                      <label>
                        <b>Fecha</b>
                      </label>
                    </div>
                    {data.Fe_act}
                  </div>
                  <div className="content-info">
                    <div>
                      <label>
                        <b>Producto</b>
                      </label>
                    </div>
                    {data.ti_pro}
                  </div>
                  <div className="content-info">
                    <div>
                      <label>
                        <b>Valor</b>
                      </label>
                    </div>
                    {separator(data.Valor)}
                  </div>
                  <div className="content-info">
                    <div>
                      <label>
                        <b>Cuenta</b>
                      </label>
                    </div>
                    {data.No_cuec}
                    {data.No_cuej}
                  </div>
                </div>
              ))}
              <div>
                <div className="content_actionsPage01">
                  <button onClick={() => prevPage()}>Atras</button>
                  <button onClick={() => nextPage()}>Siguiente</button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div
                style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <h1>
                  <b>No hay registros</b>
                </h1>
              </div>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant="danger" onClick={() => handleShow()}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
