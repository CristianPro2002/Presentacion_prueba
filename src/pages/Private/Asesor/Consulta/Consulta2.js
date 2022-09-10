import React, { useContext } from "react";
import "./Consulta2.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../stateManagement/provider";
import "bootstrap/dist/css/bootstrap.min.css";
import { usePageConsultas } from "../../../../Components/hooks/usePageConsultas";

const Consulta2 = () => {
  const [data, setData] = useContext(AppContext);
  let Navigate = useNavigate();
  const {consultasActions, currentPage, items } = usePageConsultas(data);
  return (
    <div className="fondobg">
      <div className="inicio5">
        <i
          class="bi bi-arrow-left-circle-fill"
          id="cir5"
          onClick={() => Navigate(-1)}
        ></i>
      </div>
      {items.map((item) => (<>
      <div className="contenT">
        <h1>
          Datos de: <b>{item.Pri_nom}</b>
        </h1>
      </div>
      <div className="Format01">
      <h3 style={{color: "black"}}>
          Solicitud No {item.Id_client}
        </h3>
      <div className="Tabla2">
        <div className="row" id="rowbg">
          <div className="col-md-4" id="estilos_row">
            <div>
              <label>
                <h3>Tipo de solicitud:</h3>
                <div className="div_info01">
                  {item.Nom_sol}
                </div>
              </label>
            </div>
          </div>
          <div className="col-md-4" id="estilos_row">
            <div>
              <label>
                <h3>Fecha de diligenciamiento:</h3>
                <div className="div_info01">{item.Fec_dil}</div>
              </label>
            </div>
          </div>
          <div className="col-md-4" id="estilos_row">
            <div>
              <label>
                <h3>Tipo de solicitante:</h3>
                <div className="div_info01">{item.Nomti_sol}</div>
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
              <tr key={item.No_ide}>
                <td><div className="div_info01">{item.No_ide}</div></td>
                <td><div className="div_info01">{item.Pri_nom}</div></td>
                <td><div className="div_info01">{item.Seg_nom}</div></td>
                <td><div className="div_info01">{item.Pri_ape}</div></td>
                <td><div className="div_info01">{item.Seg_ape}</div></td>
                <td><div className="div_info01">{item.Nom_doc}</div></td>
                <td><div className="div_info01">{item.Fec_exp}</div></td>
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
                <td><div className="div_info01">{item.Lug_exp}</div></td>
                <td><div className="div_info01">{item.Fec_nac}</div></td>
                <td><div className="div_info01">{item.Ciu_nac}</div></td>
                <td><div className="div_info01">{item.Nom_gen}</div></td>
                <td><div className="div_info01">{item.Nom_civ}</div></td>
                <td><div className="div_info01">{item.Nom_nac}</div></td>
                <td><div className="div_info01">{item.Otr_nac}</div></td>
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
          <table className="table table-hover table-borderless table-transparent">
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
              <tr key={item.No_ide}>
                <td><div className="div_info01">{item.Dir_re}</div></td>
                <td><div className="div_info01">{item.Blo_to}</div></td>
                <td><div className="div_info01">{item.Ap_ca}</div></td>
                <td><div className="div_info01">{item.Barrio}</div></td>
                <td><div className="div_info01">{item.Ciu_mu}</div></td>
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
                <td><div className="div_info01">{item.Depart}</div></td>
                <td><div className="div_info01">{item.Pais}</div></td>
                <td><div className="div_info01">{item.Telef}</div></td>
                <td><div className="div_info01">{item.Celular}</div></td>
                <td><div className="div_info01">{item.Corr_ele}</div></td>
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
          <table className="table table-hover table-borderless table-transparent">
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
              <tr key={item.No_ide}>
                <td><div className="div_info01">{item.Profe}</div></td>
                <td><div className="div_info01">{item.Nom_ocu}</div></td>
                <td><div className="div_info01">{item.Det_act}</div></td>
                <td><div className="div_info01">{item.Cod_ciuu}</div></td>
                <td><div className="div_info01">{item.No_emp}</div></td>
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
              <table className="table table-hover table-borderless table-transparent">
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
                  <tr key={item.No_ide}>
                    <td><div className="div_info01">{item.Nom_emp}</div></td>
                    <td><div className="div_info01">{item.Dir_emp}</div></td>
                  </tr>
                </tbody>
                <thead className="">
                  <tr>
                    <th>Barrio</th>
                    <th>Ciudad/Municipio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={item.No_ide}>
                    <td><div className="div_info01">{item.Barr_lab}</div></td>
                    <td><div className="div_info01">{item.Ciu_lab}</div></td>
                  </tr>
                </tbody>
                <thead className="">
                  <tr>
                    <th>Departamento</th>
                    <th>Pais</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={item.No_ide}>
                    <td><div className="div_info01">{item.Dep_lab}</div></td>
                    <td><div className="div_info01">{item.Pais_lab}</div></td>
                  </tr>
                </tbody>
                <thead className="">
                  <tr>
                    <th>Teléfono</th>
                    <th>Ext</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={item.No_ide}>
                    <td><div className="div_info01">{item.Tel_lab}</div></td>
                    <td><div className="div_info01">{item.Ext}</div></td>
                  </tr>
                </tbody>
                <thead className="">
                  <tr>
                    <th>Celular</th>
                    <th>Correo electrónico laboral</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={item.No_ide}>
                    <td><div className="div_info01">{item.Cel_lab}</div></td>
                    <td><div className="div_info01">{item.Corr_lab}</div></td>
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
              <table className="table table-hover table-borderless table-transparent">
                <thead className="">
                  <tr>
                    <th>Ingresos mensuales $</th>
                    <th>Otros ingresos mensuales $</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={item.No_ide}>
                    <td><div className="div_info01">{item.Ing_men}</div></td>
                    <td><div className="div_info01">{item.Otr_ing}</div></td>
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
                  <tr key={item.No_ide}>
                    <td><div className="div_info01">{item.Det_otr}</div></td>
                    <td><div className="div_info01">{item.To_act}</div></td>
                  </tr>
                </tbody>
                <thead className="">
                  <tr>
                    <th>Total pasivos $</th>
                    <th>Total egresos mensuales $</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={item.No_ide}>
                    <td><div className="div_info01">{item.To_pa}</div></td>
                    <td><div className="div_info01">{item.To_egr}</div></td>
                  </tr>
                </tbody>
                <thead className="">
                  <tr>
                    <th>Ventas anuales $</th>
                    <th>Fecha de cierre de ventas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={item.No_ide}>
                    <td><div className="div_info01">{item.Vent_a}</div></td>
                    <td><div className="div_info01">{item.Fe_ci}</div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
      </div>
      </>))}
      <div>
        <div className="content_actionsPage01">
          <button onClick={()=> consultasActions.prevHandler()}>Atras</button>
          <p>{currentPage}</p>
          <button onClick={()=> consultasActions.nextHandler()}>Siguiente</button>
        </div>
      </div>
    </div>
  );
};

export default Consulta2;
