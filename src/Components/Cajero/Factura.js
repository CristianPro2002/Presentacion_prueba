import { useRef, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
import "./Factura.css";
import axios from "axios";
import logo from "../Cajero/imagen/logo.webp";
import {useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const Factura = () => {
  const baseUrl = "http://localhost:8080/Banca/bd_crud/cajero.php";
  const [data, setData] = useState([]);
  const [dataUsuario, setDataUsuario] = useState({
    Id_act: "",
    Fecha_act: "",
    Tip_pro: "",
    Valor_act: "",
    Cajero: "",
  });

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    peticionGet();
  }, [data]);

  let Navigate = useNavigate();
  return (
    <>
      <div class="print__section" ref={componentRef}>
        <div class="container-F">
          <div class="row">
            <div class="col-md-12 car">
              <div>
                <Col className="img-text">
                <h3 className="titulo">Factura</h3>
                <img className="imagen" src={logo} alt=""/>
                </Col>
              </div>

              <div className="card">
                <div class="float__start">
                  <h3 class="card-title mb-0">Información del cliente</h3>
                </div>
                <div class="float__infoss">
                  <div class="texto-cont ">
                    <Row className="cont ">
                      <label>
                        {" "}
                        Nombre del cliente:{" "}
                        <span className="span"> Pepito perez</span>
                      </label>
                      <br></br>
                      <br></br>
                      <label>
                        {" "}
                        Identificación del cliente:
                        <span className="span">1323624477</span>
                      </label>
                      <br></br>
                      <br></br>
                      <label>
                        {" "}
                        Fecha de apertura:{" "}
                        <span className="span">20/05/2022 03:33 p. m. </span>
                      </label>
                      <br></br>
                      <br></br>
                      <label>
                        {" "}
                        Tipo de producto:{" "}
                        <span className="span"> Consignación</span>
                      </label>
                      <br></br>
                      <br></br>
                      <label>
                        {" "}
                        N° Cajero: <span className="span"> Cajero2</span>
                      </label>
                      <br></br>
                      <br></br>
                      <div class="linea"></div>
                      <br></br>
                      <br></br>
                      <label class="Valor">VALOR TOTAL: $100.000</label>
                      
                    </Row>
                  </div>
                </div>

                <footer class="bg-light text-center text-lg-start">
                  <div class="text-center p-3">
                    © 2022 Copyright:
                    <a class="text-dark" href="http://localhost:3000/">
                      {" "}
                      Banca 4.0
                    </a>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="print">
        <button onClick={handlePrint} className="print__button">
          {" "}
          Imprimir{" "}
        </button>
        <a onClick={()=> Navigate(-1)} className="print_button printa">
          Cerrar
        </a>
      </div>
    </>
  );
};
export default Factura;
