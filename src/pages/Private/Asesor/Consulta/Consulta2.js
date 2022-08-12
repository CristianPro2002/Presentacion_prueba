import React, { useContext } from "react";
import "./Consulta2.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../stateManagement/provider";
import "bootstrap/dist/css/bootstrap.min.css";

const Consulta2 = () => {
  const [data, setData] = useContext(AppContext);
  let Navigate = useNavigate();
  console.log(data);
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
          Datos de: <b>{data.Pri_nom}</b>
        </h1>
      </div>
      <div className="Tabla2">
        <div className="row" id="rowbg">
          <div className="col-md-4" id="estilos_row">
            <div>
              <label>
                <h3>Tipo de solicitud:</h3>
                <b>Vinculacion</b>
              </label>
            </div>
          </div>
          <div className="col-md-4" id="estilos_row">
            <div>
              <label>
                <h3>Fecha de diligenciamiento:</h3>
                <b>{data.Fec_dil}</b>
              </label>
            </div>
          </div>
          <div className="col-md-4" id="estilos_row">
            <div>
              <label>
                <h3>Tipo de solicitante:</h3>
                <b>{data.Nomti_sol}</b>
              </label>
            </div>
          </div>
        </div>
        <center>
          <label>
            <h2>Datos Personales</h2>
          </label>
        </center>
        <div className="table-responsive-sm">
          <table className="table table-hover table-borderless table-light">
            <thead className="">
              <tr>
                <th>Identificacion</th>
                <th>Primer Nombre</th>
                <th>Segundo Nombre</th>
                <th>Primer Apellido</th>
                <th>Segundo Apellido</th>
                <th>Tipo de Documento</th>
                <th>Fecha de expedicion</th>
              </tr>
            </thead>
            <tbody>
              <tr key={data.No_ide}>
                <td>{data.No_ide}</td>
                <td>{data.Pri_nom}</td>
                <td>{data.Seg_nom}</td>
                <td>{data.Pri_ape}</td>
                <td>{data.Seg_ape}</td>
                <td>{data.Nom_doc}</td>
                <td>{data.Fec_exp}</td>
              </tr>
            </tbody>
            <thead className="">
              <tr>
                <th>Lugar de expedicion</th>
                <th>Fecha de nacimiento</th>
                <th>Ciudad de nacimiento</th>
                <th>Genero</th>
                <th>Estado civil</th>
                <th>Nacionalidad</th>
                <th>Otra nacionalidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.Lug_exp}</td>
                <td>{data.Fec_nac}</td>
                <td>{data.Ciu_nac}</td>
                <td>{data.Nom_gen}</td>
                <td>{data.Nom_civ}</td>
                <td>{data.Nom_nac}</td>
                <td>{data.Otr_nac}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="Tabla2">
        <center>
          <label>
            <h2>Informacion de contacto personal</h2>
          </label>
        </center>
        <div className="table-responsive-sm">
          <table className="table table-hover table-borderless table-light">
            <thead className="">
              <tr>
                <th>Direccion</th>
                <th>Bloque/Torre</th>
                <th>Apto/Casa</th>
                <th>Barrio</th>
                <th>Ciudad</th>
              </tr>
            </thead>
            <tbody>
              <tr key={data.No_ide}>
                <td>{data.Dir_re}</td>
                <td>{data.Blo_to}</td>
                <td>{data.Ap_ca}</td>
                <td>{data.Barrio}</td>
                <td>{data.Ciu_mu}</td>
              </tr>
            </tbody>
            <thead className="">
              <tr>
                <th>Departamento</th>
                <th>Pais</th>
                <th>Telefono</th>
                <th>Celular</th>
                <th>Correo electronico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.Depart}</td>
                <td>{data.Pais}</td>
                <td>{data.Telef}</td>
                <td>{data.Celular}</td>
                <td>{data.Corr_ele}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="Tabla2">
        <center>
          <label>
            <h2>Actividad economica</h2>
          </label>
        </center>
        <div className="table-responsive-sm">
          <table className="table table-hover table-borderless table-light">
            <thead className="">
              <tr>
                <th>Profesion</th>
                <th>Ocupacion/Oficio</th>
                <th>Detalle de actividad</th>
                <th>Codigo CIUU</th>
                <th>Numero de empleados</th>
              </tr>
            </thead>
            <tbody>
              <tr key={data.No_ide}>
                <td>{data.Profe}</td>
                <td>{data.Nom_ocu}</td>
                <td>{data.Det_act}</td>
                <td>{data.Cod_ciuu}</td>
                <td>{data.No_emp}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="Tabla2">
            <center>
              <label>
                <h2>Información laboral(Para Empleados e Independientes)</h2>
              </label>
            </center>
            <div className="table-responsive-sm">
              <table className="table table-hover table-borderless table-light">
                <thead className="">
                  <tr>
                    <th>Nombre de la empresa</th>
                    <th>
                      Dirección de la empresa o lugar donde desarrolla su
                      actividad
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={data.No_ide}>
                    <td>{data.Nom_emp}</td>
                    <td>{data.Dir_emp}</td>
                  </tr>
                </tbody>
                <thead className="">
                  <tr>
                    <th>Barrio</th>
                    <th>Ciudad/Municipio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={data.No_ide}>
                    <td>{data.Barr_lab}</td>
                    <td>{data.Ciu_lab}</td>
                  </tr>
                </tbody>
                <thead className="">
                  <tr>
                    <th>Departamento</th>
                    <th>Pais</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={data.No_ide}>
                    <td>{data.Dep_lab}</td>
                    <td>{data.Pais_lab}</td>
                  </tr>
                </tbody>
                <thead className="">
                  <tr>
                    <th>Teléfono</th>
                    <th>Ext</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={data.No_ide}>
                    <td>{data.Tel_lab}</td>
                    <td>{data.Ext}</td>
                  </tr>
                </tbody>
                <thead className="">
                  <tr>
                    <th>Celular</th>
                    <th>Correo electrónico laboral</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={data.No_ide}>
                    <td>{data.Cel_lab}</td>
                    <td>{data.Corr_lab}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="Tabla2">
            <center>
              <label>
                <h2>Detalle información financiera</h2>
              </label>
            </center>
            <div className="table-responsive-sm">
              <table className="table table-hover table-borderless table-light">
                <thead className="">
                  <tr>
                    <th>Ingresos mensuales $</th>
                    <th>Otros ingresos mensuales $</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={data.No_ide}>
                    <td>{data.Ing_men}</td>
                    <td>{data.Otr_ing}</td>
                  </tr>
                </tbody>
                <thead className="">
                  <tr>
                    <th>
                      Detalle otros ingresos mensuales (diferentes a su
                      actividad económica principal)
                    </th>
                    <th>Total activos $</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={data.No_ide}>
                    <td>{data.Det_otr}</td>
                    <td>{data.To_act}</td>
                  </tr>
                </tbody>
                <thead className="">
                  <tr>
                    <th>Total pasivos $</th>
                    <th>Total egresos mensuales $</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={data.No_ide}>
                    <td>{data.To_pa}</td>
                    <td>{data.To_egr}</td>
                  </tr>
                </tbody>
                <thead className="">
                  <tr>
                    <th>Ventas anuales $</th>
                    <th>Fecha de cierre de ventas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={data.No_ide}>
                    <td>{data.Vent_a}</td>
                    <td>{data.Fe_ci}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulta2;
