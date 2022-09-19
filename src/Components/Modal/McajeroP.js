import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Button from "react-bootstrap/Button";
import "./Modals.css";

export const Mcajero1 = ({ handleShow, mostrar, datam1 }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const filterData = () => {
    return datam1.slice(currentPage, currentPage + 5);
  };

  const nextPage = () => {
    if (currentPage >= datam1.length) return;
    setCurrentPageNum(currentPageNum + 1);
    setCurrentPage(currentPage + 5);
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPageNum(currentPageNum - 1);
      setCurrentPage(currentPage - 5);
    }
  };
  return (
    <>
      <Modal isOpen={mostrar}>
        <ModalHeader closeButton>Registros Cajero #1</ModalHeader>
        <ModalBody>
          {datam1.length >= 1 ? (
            <div>
              {filterData().map((data) => (
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
              ))}
              <div>
                <div className="content_actionsPage01">
                  <button onClick={() => prevPage()}>Atras</button>
                  <div className="content-num-page">
                    <p>{currentPageNum}</p>
                  </div>
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

export const Mcajero2 = ({ handleShowDos, mostrarDos, datam2 }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const filterData = () => {
    return datam2.slice(currentPage, currentPage + 5);
  };

  const nextPage = () => {
    if (currentPage >= datam2.length) return;
    setCurrentPageNum(currentPageNum + 1);
    setCurrentPage(currentPage + 5);
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPageNum(currentPageNum - 1);
      setCurrentPage(currentPage - 5);
    }
  };

  return (
    <>
      <Modal isOpen={mostrarDos}>
        <ModalHeader closeButton>Registros Cajero #2</ModalHeader>
        <ModalBody>
          {" "}
          {datam2.length >= 1 ? (
            <div>
              {filterData().map((data) => (
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
              ))}
              <div>
                <div className="content_actionsPage01">
                  <button onClick={() => prevPage()}>Atras</button>
                  <div className="content-num-page">
                    <p>{currentPageNum}</p>
                  </div>
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
          <Button variant="danger" onClick={() => handleShowDos()}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const Mcajero3 = ({ handleShowTres, mostrarTres, datam3 }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const filterData = () => {
    return datam3.slice(currentPage, currentPage + 5);
  };

  const nextPage = () => {
    if (currentPage >= datam3.length) return;
    setCurrentPageNum(currentPageNum + 1);
    setCurrentPage(currentPage + 5);
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPageNum(currentPageNum - 1);
      setCurrentPage(currentPage - 5);
    }
  };
  return (
    <>
      <Modal isOpen={mostrarTres}>
        <ModalHeader closeButton>Registros Cajero #3</ModalHeader>
        <ModalBody>
          {datam3.length >= 1 ? (
            <div>
              {filterData().map((data) => (
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
              ))}
              <div>
                <div className="content_actionsPage01">
                  <button onClick={() => prevPage()}>Atras</button>
                  <div className="content-num-page">
                    <p>{currentPageNum}</p>
                  </div>
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
          <Button variant="danger" onClick={() => handleShowTres()}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const Mcajero4 = ({ handleShowCuatro, mostrarCuatro, datam4 }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const filterData = () => {
    return datam4.slice(currentPage, currentPage + 5);
  };

  const nextPage = () => {
    if (currentPage >= datam4.length) return;
    setCurrentPageNum(currentPageNum + 1);
    setCurrentPage(currentPage + 5);
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPageNum(currentPageNum - 1);
      setCurrentPage(currentPage - 5);
    }
  };
  return (
    <>
      <Modal isOpen={mostrarCuatro}>
        <ModalHeader closeButton>Registros Cajero #4</ModalHeader>
        <ModalBody>
          {datam4.length >= 1 ? (
            <div>
              {filterData().map((data) => (
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
              ))}
              <div>
                <div className="content_actionsPage01">
                  <button onClick={() => prevPage()}>Atras</button>
                  <div className="content-num-page">
                    <p>{currentPageNum}</p>
                  </div>
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
          <Button variant="danger" onClick={() => handleShowCuatro()}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const Mcajero5 = ({ handleShowCinco, mostrarCinco, datam5 }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const filterData = () => {
    return datam5.slice(currentPage, currentPage + 5);
  };

  const nextPage = () => {
    if (currentPage >= datam5.length) return;
    setCurrentPageNum(currentPageNum + 1);
    setCurrentPage(currentPage + 5);
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPageNum(currentPageNum - 1);
      setCurrentPage(currentPage - 5);
    }
  };
  return (
    <>
      <Modal isOpen={mostrarCinco}>
        <ModalHeader closeButton>Registros Cajero #5</ModalHeader>
        <ModalBody>
          {datam5.length >= 1 ? (
            <div>
              {filterData().map((data) => (
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
              ))}
              <div>
                <div className="content_actionsPage01">
                  <button onClick={() => prevPage()}>Atras</button>
                  <div className="content-num-page">
                    <p>{currentPageNum}</p>
                  </div>
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
          <Button variant="danger" onClick={() => handleShowCinco()}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
