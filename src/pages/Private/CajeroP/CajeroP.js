import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CajeroP.css";
import img111 from "../../../assets/Imagenes/pngwing.com.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import cajeroimgp from "../../../assets/Imagenes/cajero-4.webp";
import {
  Mcajero1,
  Mcajero2,
  Mcajero3,
  Mcajero4,
  Mcajero5,
} from "../../../Components/Modal/McajeroP";
import { useModalCajeros } from "../../../Components/hooks/useModalCajeros";
import { useCajeroP } from "../../../Components/hooks/useCajeroP";

const CajeroP = () => {
  const [mostrar, setMostrar] = useState(false);
  const handleShow = () => setMostrar(!mostrar);

  const [mostrarDos, setMostrarDos] = useState(false);
  const handleShowDos = () => setMostrarDos(!mostrarDos);

  const [mostrarTres, setMostrarTres] = useState(false);
  const handleShowTres = () => setMostrarTres(!mostrarTres);

  const [mostrarCuatro, setMostrarCuatro] = useState(false);
  const handleShowCuatro = () => setMostrarCuatro(!mostrarCuatro);

  const [mostrarCinco, setMostrarCinco] = useState(false);
  const handleShowCinco = () => setMostrarCinco(!mostrarCinco);

  const { ModalesData, datam1, datam2, datam3, datam4, datam5 } =
    useModalCajeros();
  const {
    CajeroPactions,
    value1,
    value2,
    value3,
    value4,
    value5,
    rest1,
    rest2,
    rest3,
    rest4,
    rest5,
  } = useCajeroP();

  const ConsultaFatherM1 = () => {
    ModalesData.ConsultaM1();
    handleShow();
  };

  const ConsultaFatherM2 = () => {
    ModalesData.ConsultaM2();
    handleShowDos();
  };

  const ConsultaFatherM3 = () => {
    ModalesData.ConsultaM3();
    handleShowTres();
  };

  const ConsultaFatherM4 = () => {
    ModalesData.ConsultaM4();
    handleShowCuatro();
  };

  const ConsultaFatherM5 = () => {
    ModalesData.ConsultaM5();
    handleShowCinco();
  };

  const ConsultaFatherPrincipal = () => {
    CajeroPactions.DeleteValues()
    if(CajeroPactions.DeleteValues()){
    CajeroPactions.ConsultaValue1();
    CajeroPactions.ConsultaValue2();
    CajeroPactions.ConsultaValue3();
    CajeroPactions.ConsultaValue4();
    CajeroPactions.ConsultaValue5();
    CajeroPactions.ConsultaRest1();
    CajeroPactions.ConsultaRest2();
    CajeroPactions.ConsultaRest3();
    CajeroPactions.ConsultaRest4();
    CajeroPactions.ConsultaRest5();
    }
  }

  
  const initialValue = 0;
  const sumCaj1 = value1
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  const sumCaj2 = value2
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  const sumCaj3 = value3
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  const sumCaj4 = value4
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  const sumCaj5 = value5
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );

  const restCaj1 = rest1
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  const restCaj2 = rest2
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  const restCaj3 = rest3
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  const restCaj4 = rest4
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  const restCaj5 = rest5
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );

  const ValorC1 = sumCaj1 - restCaj1;
  const ValorC2 = sumCaj2 - restCaj2;
  const ValorC3 = sumCaj3 - restCaj3;
  const ValorC4 = sumCaj4 - restCaj4;
  const ValorC5 = sumCaj5 - restCaj5;

  const sumTotal = ValorC1 + ValorC2 + ValorC3 + ValorC4 + ValorC5;
  let Navigate = useNavigate();

  useEffect(() => {
    ModalesData.ConsultaM1();
    ModalesData.ConsultaM2();
    ModalesData.ConsultaM3();
    ModalesData.ConsultaM4();
    ModalesData.ConsultaM5();
    CajeroPactions.ConsultaValue1();
    CajeroPactions.ConsultaValue2();
    CajeroPactions.ConsultaValue3();
    CajeroPactions.ConsultaValue4();
    CajeroPactions.ConsultaValue5();
    CajeroPactions.ConsultaRest1();
    CajeroPactions.ConsultaRest2();
    CajeroPactions.ConsultaRest3();
    CajeroPactions.ConsultaRest4();
    CajeroPactions.ConsultaRest5();
  }, []);

  setTimeout(() => {
    ModalesData.ConsultaM1();
    ModalesData.ConsultaM2();
    ModalesData.ConsultaM3();
    ModalesData.ConsultaM4();
    ModalesData.ConsultaM5();
    CajeroPactions.ConsultaValue1();
    CajeroPactions.ConsultaValue2();
    CajeroPactions.ConsultaValue3();
    CajeroPactions.ConsultaValue4();
    CajeroPactions.ConsultaValue5();
    CajeroPactions.ConsultaRest1();
    CajeroPactions.ConsultaRest2();
    CajeroPactions.ConsultaRest3();
    CajeroPactions.ConsultaRest4();
    CajeroPactions.ConsultaRest5();
  } , 6000);

  return (
    <div className="pantallaP">
      <div className="pantallaP2">
        <div className="io">
          <i
            class="bi bi-arrow-left-circle-fill"
            id="cir"
            onClick={() => Navigate(-1)}
          ></i>
        </div>
        <div className="titulocajerop">
          <h1 className="cajp">Cajero Principal</h1>
        </div>
        <div className="containerPri">
          <div className="row" id="row">
            <div className="container111" id="contre">
              <h2>Cajero #1</h2>
              <img src={img111} alt="" className="Imagenes111" />
              <h1>Saldo Actual</h1>
              <p className="letricas">{ValorC1}</p>
              <div className="cadministrar">
                <button
                  className="administrar5"
                  id="administrar"
                  onClick={() => ConsultaFatherM1()}
                >
                  Ver registros
                </button>
              </div>
            </div>
            <div className="container222" id="contre">
              <h2>Cajero #2</h2>
              <img src={img111} alt="" className="Imagenes111" />
              <h1>Saldo Actual</h1>
              <p className="letricas">{ValorC2}</p>
              <div className="cadministrar">
                <button
                  className="administrar5"
                  id="administrar"
                  onClick={() => ConsultaFatherM2()}
                >
                  Ver registros
                </button>
              </div>
            </div>
            <div className="container333" id="contre">
              <h2>Cajero #3</h2>
              <img src={img111} alt="" className="Imagenes111" />
              <h1>Saldo Actual</h1>
              <p className="letricas">{ValorC3}</p>
              <div className="cadministrar">
                <button
                  className="administrar5"
                  id="administrar"
                  onClick={() => ConsultaFatherM3()}
                >
                  Ver registros
                </button>
              </div>
            </div>
            <div className="container444" id="contre">
              <h2>Cajero #4</h2>
              <img src={img111} alt="" className="Imagenes111" />
              <h1>Saldo Actual</h1>
              <p className="letricas">{ValorC4}</p>
              <div className="cadministrar">
                <button
                  className="administrar5"
                  id="administrar"
                  onClick={() => ConsultaFatherM4()}
                >
                  Ver registros
                </button>
              </div>
            </div>
            <div className="container555" id="contre">
              <h2>Cajero #5</h2>
              <img src={img111} alt="" className="Imagenes111" />
              <h1>Saldo Actual</h1>
              <p className="letricas">{ValorC5}</p>
              <div className="cadministrar">
                <button
                  className="administrar5"
                  id="administrar"
                  onClick={() => ConsultaFatherM5()}
                >
                  Ver registros
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="conteinerPri2">
          <div className="conteinerSec">
            <div className="buttonreset">
              <button className="resetb" type="button" onClick={()=> ConsultaFatherPrincipal()}>Resetear Valores</button>
            </div>
            <div className="cimgcp">
              <img src={cajeroimgp} alt="" className="imgcp" />
            </div>
            <div className="textointerno">
              <h3 className="textointernoh3">Valor Total:</h3>
              <p className="textointernop">{sumTotal}</p>
            </div>
          </div>
        </div>
      </div>
      <Mcajero1 handleShow={handleShow} mostrar={mostrar} datam1={datam1} />
      <Mcajero2
        handleShowDos={handleShowDos}
        mostrarDos={mostrarDos}
        datam2={datam2}
      />
      <Mcajero3
        handleShowTres={handleShowTres}
        mostrarTres={mostrarTres}
        datam3={datam3}
      />
      <Mcajero4
        handleShowCuatro={handleShowCuatro}
        mostrarCuatro={mostrarCuatro}
        datam4={datam4}
      />
      <Mcajero5
        handleShowCinco={handleShowCinco}
        mostrarCinco={mostrarCinco}
        datam5={datam5}
      />
    </div>
  );
};

export default CajeroP;
