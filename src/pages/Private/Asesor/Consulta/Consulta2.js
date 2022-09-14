import React, { useContext } from "react";
import "./Consulta.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../stateManagement/provider";
import "bootstrap/dist/css/bootstrap.min.css";
import { usePageConsultas } from "../../../../Components/hooks/usePageConsultas";

const Consulta2 = () => {
  const [data, setData] = useContext(AppContext);
  let Navigate = useNavigate();
  const { consultasActions, currentPage, items } = usePageConsultas(data);
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
              Datos de: <b>{item.Pri_nom}</b>
            </h1>
          </div>
          <div>
            <div className="content_actionsPage01">
              <button onClick={() => consultasActions.prevHandler()}>
                Atras
              </button>
              <div className="content-num-page">
                <p>{currentPage}</p>
              </div>
              <button onClick={() => consultasActions.nextHandler()}>
                Siguiente
              </button>
            </div>
          </div>
          <div className="Format01">
            <center>
              <label>
                <h3 className="title-content-info01">
                  Solicitud No {item.Id_client}
                </h3>
              </label>
            </center>
            <div className="Tabla2">
              <div className="row" id="rowbg">
                <div className="col-md-4" id="estilos_row">
                  <div>
                    <label>
                      <h3 className="title-content-info01">
                        Tipo de solicitud:
                      </h3>
                      <div className="div_infocontent01">{item.Nom_sol}</div>
                    </label>
                  </div>
                </div>
                <div className="col-md-4" id="estilos_row">
                  <div>
                    <label>
                      <h3 className="title-content-info01">
                        Fecha de diligenciamiento:
                      </h3>
                      <div className="div_infocontent01">{item.Fec_dil}</div>
                    </label>
                  </div>
                </div>
                <div className="col-md-4" id="estilos_row">
                  <div>
                    <label>
                      <h3 className="title-content-info01">
                        Tipo de solicitante:
                      </h3>
                      <div className="div_infocontent01">{item.Nomti_sol}</div>
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
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
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
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.No_ide}</td>
                      <td>{item.Pri_nom}</td>
                      <td>{item.Seg_nom}</td>
                      <td>{item.Pri_ape}</td>
                      <td>{item.Seg_ape}</td>
                      <td>{item.Nom_doc}</td>
                      <td>{item.Fec_exp}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
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
                    <tr className="tr1-info">
                      <td>{item.Lug_exp}</td>
                      <td>{item.Fec_nac}</td>
                      <td>{item.Ciu_nac}</td>
                      <td>{item.Nom_gen}</td>
                      <td>{item.Nom_civ}</td>
                      <td>{item.Nom_nac}</td>
                      <td>{item.Otr_nac}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="Tabla2">
              <center>
                <label>
                  <h2 className="title-content-info01">
                    Informacion de contacto personal
                  </h2>
                </label>
              </center>
              <div className="table-responsive-sm">
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
                      <th>Direccion</th>
                      <th>Bloque/Torre</th>
                      <th>Apto/Casa</th>
                      <th>Barrio</th>
                      <th>Ciudad</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Dir_re}</td>
                      <td>{item.Blo_to}</td>
                      <td>{item.Ap_ca}</td>
                      <td>{item.Barrio}</td>
                      <td>{item.Ciu_mu}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Departamento</th>
                      <th>Pais</th>
                      <th>Telefono</th>
                      <th>Celular</th>
                      <th>Correo electronico</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr1-info">
                      <td>{item.Depart}</td>
                      <td>{item.Pais}</td>
                      <td>{item.Telef}</td>
                      <td>{item.Celular}</td>
                      <td>{item.Corr_ele}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="Tabla2">
              <center>
                <label>
                  <h2 className="title-content-info01">Actividad economica</h2>
                </label>
              </center>
              <div className="table-responsive-sm">
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
                      <th>Profesion</th>
                      <th>Ocupacion/Oficio</th>
                      <th>Detalle de actividad</th>
                      <th>Codigo CIUU</th>
                      <th>Numero de empleados</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Profe}</td>
                      <td>{item.Nom_ocu}</td>
                      <td>{item.Det_act}</td>
                      <td>{item.Cod_ciuu}</td>
                      <td>{item.No_emp}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="Tabla2">
              <center>
                <label>
                  <h2 className="title-content-info01">
                    Información laboral(Para Empleados e Independientes)
                  </h2>
                </label>
              </center>
              <div className="table-responsive-sm">
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
                      <th>Nombre de la empresa</th>
                      <th>
                        Dirección de la empresa o lugar donde desarrolla su
                        actividad
                      </th>
                      <th>Barrio</th>
                      <th>Ciudad/Municipio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Nom_emp}</td>
                      <td>{item.Dir_emp}</td>
                      <td>{item.Barr_lab}</td>
                      <td>{item.Ciu_lab}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Departamento</th>
                      <th>Pais</th>
                      <th>Teléfono</th>
                      <th>Ext</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Dep_lab}</td>
                      <td>{item.Pais_lab}</td>
                      <td>{item.Tel_lab}</td>
                      <td>{item.Ext}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Celular</th>
                      <th>Correo electrónico laboral</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Cel_lab}</td>
                      <td>{item.Corr_lab}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="Tabla2">
              <center>
                <label>
                  <h2 className="title-content-info01">
                    Detalle información financiera
                  </h2>
                </label>
              </center>
              <div className="table-responsive-sm">
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
                      <th>Ingresos mensuales $</th>
                      <th>Otros ingresos mensuales $</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Ing_men}</td>
                      <td>{item.Otr_ing}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>
                        Detalle otros ingresos mensuales (diferentes a su
                        actividad económica principal)
                      </th>
                      <th>Total activos $</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Det_otr}</td>
                      <td>{item.To_act}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Total pasivos $</th>
                      <th>Total egresos mensuales $</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.To_pa}</td>
                      <td>{item.To_egr}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Ventas anuales $</th>
                      <th>Fecha de cierre de ventas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Vent_a}</td>
                      <td>{item.Fe_ci}</td>
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
              <button onClick={() => consultasActions.prevHandler()}>
                Atras
              </button>
              <div className="content-num-page">
                <p>{currentPage}</p>
              </div>
              <button onClick={() => consultasActions.nextHandler()}>
                Siguiente
              </button>
            </div>
          </div>
    </div>
  );
};

export default Consulta2;
