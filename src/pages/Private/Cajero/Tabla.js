import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import "./Tabla.css";
import { AiFillPrinter } from "react-icons/ai";
import DataTable from "react-data-table-component";
import { useTablaCajero } from "../../../Components/hooks/useTablaCajero";

const columnas = [
  {
    name: "Identificacion de actividad",
    selector: "Idact_cli",
    sortable: true,
  },
  {
    name: "Identificacion de actividad de cliente",
    selector: "Id_act",
    sortable: true,
  },
  {
    name: "Fecha de actividad",
    selector: "Fe_act",
    sortable: true,
  },
  {
    name: "Tipo del producto",
    selector: "ti_pro",
    sortable: true,
  },
  {
    name: "Valor de actividad",
    selector: "Valor",
    sortable: true,
  },
  {
    name: "# Cajero",
    selector: "No_cajero",
    sortable: true,
  },
  {
    name: "# Cuenta Pn",
    selector: "No_cuec",
    sortable: true,
  },
  {
    name: "# Cuenta Pj",
    selector: "No_cuej",
    sortable: true,
  },
];

const paginacionOpciones = {
  rowsPerPageText: "Filas por Página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

const Tabla = ({ numeroCajero, cajero, link }) => {
  const { TablaActions, data, setData, tablaUsuarios } = useTablaCajero();

  /* eslint-disable */

  const [busqueda, setBusqueda] = useState("");
  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
      if (
        elemento.Id_act.toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setData(resultadosBusqueda);
  };

  let Navigate = useNavigate();

  useEffect(() => {
    TablaActions.getCuenta(cajero);
  }, []);

  /* eslint-enable */

  return (
    <div className="table-responsive Background">
      <br></br>
      <div className="salirB">
        <i
          class="bi bi-arrow-left-circle-fill"
          id="circulito"
          onClick={() => Navigate(-1)}
        ></i>
      </div>
      <center>
        {" "}
        <h1 className="TITULO">{numeroCajero}</h1>
      </center>
      <br></br>
      <div className="crud">
        <DataTable
          columns={columnas}
          data={data}
          pagination
          paginationComponentOptions={paginacionOpciones}
          fixedHeader
          fixedHeaderScrollHeight="auto"
          subHeader
          subHeaderComponent={
            <div className="row">
              <div className="col-md-9">
                <input
                  type="number"
                  placeholder="Buscar documento"
                  className="w-40 form-control"
                  value={busqueda}
                  onChange={handleChange}
                />
              </div>
              {/* eslint-disable */}
              <div className="col-md-3">
                <a className="reporte" href={link} target="_blank">
                  <AiFillPrinter />
                </a>
              </div>
              {/* eslint-enable */}
            </div>
          }
          subHeaderAlign="right"
          noDataComponent="No se encuentra resultados."
        />
      </div>
    </div>
  );
};

export default Tabla;
