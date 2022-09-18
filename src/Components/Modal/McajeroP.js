import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Button from "react-bootstrap/Button";
import "./Modals.css";

export const Mcajero1 = ({ handleShow, mostrar, datam1 }) => {
  return (
    <>
      <Modal isOpen={mostrar}>
        <ModalHeader closeButton>Registros Cajero #1</ModalHeader>
        <ModalBody>
          {datam1.length >= 1 ? (
            datam1.map((data) => (
              <div className="padreModals01">
                <div className="content-info">
                  <div>
                    <label>
                      <b>Id</b>
                    </label>
                  </div>
                  {data.Id_act}
                </div>
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
                  {data.Valor}
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
            ))
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

export const Mcajero2 = ({ handleShowDos, mostrarDos, datam2 }) => {
  return (
    <>
      <Modal isOpen={mostrarDos}>
        <ModalHeader closeButton>Registros Cajero #2</ModalHeader>
        <ModalBody>
          {" "}
          {datam2.length >= 1 ? (
            datam2.map((data) => (
              <div className="padreModals01">
                <div className="content-info">
                  <div>
                    <label>
                      <b>Id</b>
                    </label>
                  </div>
                  {data.Id_act}
                </div>
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
                  {data.Valor}
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
            ))
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
          <Button variant="danger" onClick={() => handleShowDos()}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const Mcajero3 = ({ handleShowTres, mostrarTres, datam3 }) => {
  return (
    <>
      <Modal isOpen={mostrarTres}>
        <ModalHeader closeButton>Registros Cajero #3</ModalHeader>
        <ModalBody>
          {datam3.length >= 1 ? (
            datam3.map((data) => (
              <div className="padreModals01">
                <div className="content-info">
                  <div>
                    <label>
                      <b>Id</b>
                    </label>
                  </div>
                  {data.Id_act}
                </div>
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
                  {data.Valor}
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
            ))
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
          <Button variant="danger" onClick={() => handleShowTres()}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const Mcajero4 = ({ handleShowCuatro, mostrarCuatro, datam4 }) => {
  return (
    <>
      <Modal isOpen={mostrarCuatro}>
        <ModalHeader closeButton>Registros Cajero #4</ModalHeader>
        <ModalBody>
          {datam4.length >= 1 ? (
            datam4.map((data) => (
              <div className="padreModals01">
                <div className="content-info">
                  <div>
                    <label>
                      <b>Id</b>
                    </label>
                  </div>
                  {data.Id_act}
                </div>
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
                  {data.Valor}
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
            ))
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
          <Button variant="danger" onClick={() => handleShowCuatro()}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const Mcajero5 = ({ handleShowCinco, mostrarCinco, datam5 }) => {
  return (
    <>
      <Modal isOpen={mostrarCinco}>
        <ModalHeader closeButton>Registros Cajero #5</ModalHeader>
        <ModalBody>
          {datam5.length >= 1 ? (
            datam5.map((data) => (
              <div className="padreModals01">
                <div className="content-info">
                  <div>
                    <label>
                      <b>Id</b>
                    </label>
                  </div>
                  {data.Id_act}
                </div>
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
                  {data.Valor}
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
            ))
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
          <Button variant="danger" onClick={() => handleShowCinco()}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
