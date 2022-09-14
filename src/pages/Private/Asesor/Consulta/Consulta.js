import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "./Consulta.css";
import { AppContext } from "../../../../stateManagement/provider";
import { usePageConsultas2 } from "../../../../Components/hooks/usePageConsultas";

const Consulta = () => {
  let Navigate = useNavigate();
  const [data, setData] = useContext(AppContext);

  const { consultasActions2, currentPage, items } = usePageConsultas2(data);

  return (
    <div className="fondobg">
      <div className="inicio5">
        <i
          class="bi bi-arrow-left-circle-fill"
          id="cir5"
          onClick={() => Navigate(-1)}
        ></i>
      </div>
      {items.map((item) => (
        <>
          <div className="contenT">
            <h1>
              Datos de: <b>{item.Nom_ra}</b>
            </h1>
          </div>
          <div>
            <div className="content_actionsPage01">
              <button onClick={() => consultasActions2.prevHandler()}>
                Atras
              </button>
              <div className="content-num-page">
                <p>{currentPage}</p>
              </div>
              <button onClick={() => consultasActions2.nextHandler()}>
                Siguiente
              </button>
            </div>
          </div>
          <div className="Format01">
            <center>
              <label>
                <h3 className="title-content-info01">
                  Solicitud No {item.Id_ent}
                </h3>
              </label>
            </center>
            <div className="Tabla2">
              <div className="row" id="rowbg">
                <div className="col-md-6" id="estilos_row">
                  <div>
                    <label>
                      <h3 className="title-content-info01">
                        Tipo de solicitud:
                      </h3>
                      <div className="div_infocontent01">Vinculacion</div>
                    </label>
                  </div>
                </div>
                <div className="col-md-6" id="estilos_row">
                  <div>
                    <label>
                      <h3 className="title-content-info01">
                        Fecha de diligenciamiento:
                      </h3>
                      <div className="div_infocontent01">{item.Fe_dil}</div>
                    </label>
                  </div>
                </div>
              </div>
              <center>
                <label>
                  <h2>Informacion General</h2>
                </label>
              </center>
              <div className="table-responsive-sm">
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
                      <th>Identificacion</th>
                      <th>Nombre o razon social</th>
                      <th>Nombre corto o sigla</th>
                      <th>Fecha de constitucion</th>
                      <th>Ciudad de constitucion</th>
                      <th>Pais de constitucion</th>
                      <th>Direccion de sede principal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.Nit} className="tr1-info">
                      <td>{item.Nit}</td>
                      <td>{item.Nom_ra}</td>
                      <td>{item.Nom_cor}</td>
                      <td>{item.Fe_cons}</td>
                      <td>{item.Ciu_cons}</td>
                      <td>{item.Pai_cons}</td>
                      <td>{item.Dir_se}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Barrio</th>
                      <th>Ciudad</th>
                      <th>Departamento</th>
                      <th>Pais</th>
                      <th>Telefono</th>
                      <th>Ext</th>
                      <th>Correo de la sede principal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr1-info">
                      <td>{item.Barrio}</td>
                      <td>{item.Ciu_mu}</td>
                      <td>{item.Depart}</td>
                      <td>{item.Pais}</td>
                      <td>{item.Telefono}</td>
                      <td>{item.Ext}</td>
                      <td>{item.Corr_se}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ))}
      <div>
        <div className="content_actionsPage01">
          <button onClick={() => consultasActions2.prevHandler()}>Atras</button>
          <div className="content-num-page">
            <p>{currentPage}</p>
          </div>
          <button onClick={() => consultasActions2.nextHandler()}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consulta;
