import React, { useContext, useState } from "react";
import "./Consulta.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../stateManagement/provider";
import "bootstrap/dist/css/bootstrap.min.css";
import { usePageConsultas } from "../../../../Components/hooks/usePageConsultas";
import { useConsultaCuentaPn } from "../../../../Components/hooks/useConsultasCuentas";
import { McuentasPJ } from "../../../../Components/Modal/Mcuentas";

const Consulta2 = () => {
  const [
    data,
    setData,
    dataCuenta,
    setDataCuenta,
    dataEstados,
    setDataEstados,
  ] = useContext(AppContext);
  let Navigate = useNavigate();
  const { consultasActions, currentPage, items } = usePageConsultas(data);
  const { CuentaActions, dataExtraCuenta } = useConsultaCuentaPn();
  const [mostrarCuenta, setMostrarCuenta] = useState(false);
  const handleShow = () => setMostrarCuenta(!mostrarCuenta);

  const peticionGetCuentaGeneral = (No_cuenta) => {
    CuentaActions.peticionGetCuenta(No_cuenta);
    handleShow();
  };

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

            <div className="Tabla2">
              <center>
                <label>
                  <h2 className="title-content-info01">
                    Información tributaria
                  </h2>
                </label>
              </center>
              <div className="table-responsive-sm">
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
                      <th>Declarante de renta?</th>
                      <th>Agente retenedor</th>
                      <th>Regimen de IVA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Dec_rent}</td>
                      <td>{item.Age_ret}</td>
                      <td>{item.Nom_reg}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Obligado a tributar en Estados Unidos</th>
                      <th>número de ID tributario (TIN)</th>
                      <th>Pais No 1 donde tributa diferente a colombia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Ob_tri}</td>
                      <td>{item.Notri_est}</td>
                      <td>{item.Pais_1}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Pais No 2 donde tributa diferente a colombia</th>
                      <th>N°. Id. Tributario 1</th>
                      <th>N°. Id. Tributario 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Pais_2}</td>
                      <td>{item.No_tri1}</td>
                      <td>{item.No_tri2}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="Tabla2">
              <center>
                <label>
                  <h2 className="title-content-info01">
                    Declaración de origen de bienes y/o fondos
                  </h2>
                </label>
              </center>
              <div className="table-responsive-sm">
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
                      <th>El origen de sus bienes provienen de:</th>
                      <th>El país origen de bienes y/o fondos</th>
                      <th>La ciudad origen de bienes y/o fondos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Prov_bie}</td>
                      <td>{item.Pais_bi}</td>
                      <td>{item.Ciu_bie}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="Tabla2">
              <center>
                <label>
                  <h2 className="title-content-info01">
                    Información de operaciones internacionales
                  </h2>
                </label>
              </center>
              <div className="table-responsive-sm">
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
                      <th>Operaciones en moneda extranjera?</th>
                      <th>Operaciones que realiza en moneda extranjera</th>
                      <th>Otra</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Op_ext}</td>
                      <td>{item.Nom_opm}</td>
                      <td>{item.Otro_mo}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="Tabla2">
              <center>
                <label>
                  <h2 className="title-content-info01">
                    Descripción de los productos financieros en moneda
                    extranjera
                  </h2>
                </label>
              </center>
              <div className="table-responsive-sm">
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
                      <th>Nombre de la entidad</th>
                      <th>Tipo de producto</th>
                      <th>Otro</th>
                      <th>No producto</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Nom_ent}</td>
                      <td>{item.Idtipro_m}</td>
                      <td>{item.Otro_mo2}</td>
                      <td>{item.No_pro}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Monto mensual promedio</th>
                      <th>Moneda</th>
                      <th>Ciudad</th>
                      <th>Pais</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Mo_pro}</td>
                      <td>{item.Moneda}</td>
                      <td>{item.Ciu_ent}</td>
                      <td>{item.Pa_ent}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="Tabla2">
              <center>
                <label>
                  <h2 className="title-content-info01">
                    Autorizaciones y declaraciones
                  </h2>
                </label>
              </center>
              <div className="table-responsive-sm">
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
                      <th>Recibe el reporte anual de costos:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Nom_tien}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="Tabla2">
              <div className="table-responsive-sm">
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
                      <th>Actua en calidad de:</th>
                      <th>Nombre de solicitante:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Idti_soli}</td>
                      <td>{item.Nom_solicit}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>No de identificacion:</th>
                      <th>Firma del solicitante:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.No_solicit}</td>
                      <td>{item.Firma}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="Tabla2">
              <center>
                <label>
                  <h2 className="title-content-info01">
                    Para uso Exclusivo de las Entidades del Grupo Empresarial
                  </h2>
                </label>
              </center>
              <div className="table-responsive-sm">
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
                      <th>Codigo de vendedor:</th>
                      <th>Nombre de vendedor:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Cod_vend}</td>
                      <td>{item.Nom_vend}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Oficina:</th>
                      <th>Observaciones:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Oficina}</td>
                      <td>{item.Obser}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Firma de vendedor:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.No_ide} className="tr1-info">
                      <td>{item.Firma_vend}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <center>
              <label>
                <h3 className="title-content-info01">
                  Solicitud No {item.Id_client}
                </h3>
              </label>
            </center>
          </div>
        </>
      ))}
      <div>
        <div className="content_actionsPage01">
          <button onClick={() => consultasActions.prevHandler()}>Atras</button>
          <div className="content-num-page">
            <p>{currentPage}</p>
          </div>
          <button onClick={() => consultasActions.nextHandler()}>
            Siguiente
          </button>
        </div>
      </div>

      <div className="content-cuentas">
        <div className="Cuentas">
          {dataCuenta.length === 0 ? (
            <>
              <h3>Este usuario no tiene numero de cuentas activas</h3>
            </>
          ) : (
            <>
              <div className="Cuenta-content01">
                <h3>Numero de cuentas activas</h3>
                <div className="row">
                  {dataCuenta.map((item) => (
                    <>
                      <div className="col-md-4 columnaCuentas">
                        <div className="Cuenta01">
                          <p>{item.No_cuenta}</p>
                          <button
                            type="submit"
                            onClick={() =>
                              peticionGetCuentaGeneral(item.No_cuenta)
                            }
                          >
                            Consultar Cuenta
                          </button>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="cont-info-estados">
        <div className="cont-estados">
          <h2>Estado de Solicitudes</h2>
          {dataEstados.length === 0 ? (
            <>
              <div>
                <h3>Este usuario no tiene solicitudes respondidas</h3>
              </div>
            </>
          ) : (
            <>
              <div>
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
                      <th>Numero de solicitud</th>
                      <th>Estado</th>
                      <th>Descripcion del estado de la solicitud</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataEstados.map((item) => (
                      <>
                        <tr key={item.Id_soli} className="tr1-info">
                          <td>{item.Id_soli}</td>
                          <td>{item.Esta_so}</td>
                          <td>{item.Des_soli}</td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>

      <McuentasPJ
        handleShow={handleShow}
        mostrar={mostrarCuenta}
        datam1={dataExtraCuenta}
      />
    </div>
  );
};

export default Consulta2;
