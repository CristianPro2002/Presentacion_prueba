import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import "./Tabla.css";
import { AiFillPrinter } from "react-icons/ai";
import DataTable from "react-data-table-component";

const columnas = [
  {
    name: "Identificacion de actividad de cliente",
    selector: "Id_act",
    sortable: true,
  },
  {
    name: "Fecha de actividad",
    selector: "Fecha_act",
    sortable: true,
  },
  {
    name: "Tipo del producto",
    selector: "Tip_pro",
    sortable: true,
  },
  {
    name: "Valor de actividad",
    selector: "Valor_act",
    sortable: true,
  },
  {
    name: "# Cajero",
    selector: "Cajero",
    sortable: true,
  },
];

const paginacionOpciones = {
  rowsPerPageText: "Filas por Página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

const Tabla = () => {
  const baseUrl = "http://localhost:8080/Banca/bd_crud/cajero.php";
  const [busqueda, setBusqueda]= useState("");
  const [data, setData] = useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [dataUsuario, setDataUsuario] = useState({
    Id_act: "",
    Fecha_act: "",
    Tip_pro: "",
    Valor_act: "",
    Cajero: "",
  });

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
      setTablaUsuarios(response.data);
    });
  };

  useEffect(() => {
    peticionGet();
  }, []);

  const handleChange=(e)=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }


  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
      if(elemento.Id_act.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    setData(resultadosBusqueda);
  }
  let Navigate = useNavigate();

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
        <h1 className="TITULO">Registro de Cajero</h1>
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
              <div className="col-md-3">
                <a className="reporte" href="http://localhost:8080/documen">
                  <AiFillPrinter />
                </a>
              </div>
            </div>
          }
          subHeaderAlign="right"
          noDataComponent="No se encuentra resultados." 
        
          /* <input type="number"
         placeholder="Buscar documento" 
         className="w-25 form-control search"
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         /> */
        />
      </div>
    </div>
  );
};

export default Tabla;

/* 
const Tabla = () => {
  const baseUrl = "http://localhost/Banca/bd_crud/cajero.php";

  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsetar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [dataUsuario, setDataUsuario] = useState({
    Id_act: "",
    Fecha_act: "",
    Tip_pro: "",
    Valor_act: "",
    Cajero: "",
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
    <div className="Background">
      <div className="salirB">
          <i
            class="bi bi-arrow-left-circle-fill"
            id="circulito"
            onClick={() => Navigate(-1)}
          ></i>
        </div>
      <center>
        <h1 className="TITULO">REGISTRO DE CAJERO</h1>
      </center>
      <div className="crud">
        
        <Table responsive striped hover className="tabla" >
          <thead>
            <tr className="">
              <th>Identificacion de actividad de cliente</th>
              <th>Fecha de actividad</th>
              <th>Tipo del producto</th>
              <th>Valor de actividad</th>
              <th># Cajero</th>
              <th><a className="reporte" href="http://localhost/documen"><AiFillPrinter/></a></th>
            </tr>
          </thead>
          <tbody>
            {data.map((Data) => (
              <tr key={Data.Id_act}>
                <td >{Data.Id_act}</td>
                <td>{Data.Fecha_act}</td>
                <td>{Data.Tip_pro}</td>
                <td>{Data.Valor_act}</td>
                <td>{Data.Cajero}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}; */
