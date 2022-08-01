import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import './Consulta.css'
import { AppContext } from "../../../stateManagement/provider";

const Consulta = () => {
  let Navigate = useNavigate();
  const [data, setData] = useContext(AppContext);
  return (
    <div className="fondobg">
      <div className="inicio5">
        <i
          class="bi bi-arrow-left-circle-fill"
          id="cir5"
          onClick={() => Navigate(-1)}
        ></i>
      </div>
      <div className="contenT">
        <h1>
          Datos de: <b>{data.Nom_ra}</b>
        </h1>
      </div>
      <div className="Tabla2">
        <div className="row" id="rowbg">
          <div className="col-md-6" id="estilos_row">
            <div>
              <label>
                <h3>Tipo de solicitud:</h3><b>Vinculacion</b>
              </label>
            </div>
          </div>
          <div className="col-md-6" id="estilos_row">
            <div>
              <label>
                <h3>Fecha de diligenciamiento:</h3>
                <b>{data.Fe_dil}</b>
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
          <table className="table table-hover table-borderless table-light">
            <thead className="">
              <tr>
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
              <tr key={data.Nit}>
                <td>{data.Nit}</td>
                <td>{data.Nom_ra}</td>
                <td>{data.Nom_cor}</td>
                <td>{data.Fe_cons}</td>
                <td>{data.Ciu_cons}</td>
                <td>{data.Pai_cons}</td>
                <td>{data.Dir_se}</td>
              </tr>
            </tbody>
            <thead className="">
              <tr>
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
              <tr>
                <td>{data.Barrio}</td>
                <td>{data.Ciu_mu}</td>
                <td>{data.Depart}</td>
                <td>{data.Pais}</td>
                <td>{data.Telefono}</td>
                <td>{data.Ext}</td>
                <td>{data.Corr_se}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  )
}

export default Consulta