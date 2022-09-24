import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Consulta.css";
import { AppContext } from "../../../../stateManagement/provider";
import { usePageConsultas2 } from "../../../../Components/hooks/usePageConsultas";
import { useConsultaCuentaPj } from "../../../../Components/hooks/useConsultasCuentas";
import { McuentasPN } from "../../../../Components/Modal/Mcuentas";

const Consulta = () => {
  let Navigate = useNavigate();
  /* eslint-disable */
  const [
    data,
    setData,
    dataCuenta,
    setDataCuenta,
    dataEstados,
    setDataEstados,
  ] = useContext(AppContext);
  /* eslint-enable */
  const { consultasActions2, currentPage, items } = usePageConsultas2(data);
  const { CuentaActions, dataExtraCuenta } = useConsultaCuentaPj();
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
                      <div className="div_infocontent01">{item.Nom_sol}</div>
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
            </div>

            <div className="Tabla2">
              <center>
                <label>
                  <h2 className="title-content-info01">
                    Información general de la entidad
                  </h2>
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.Nit} className="tr1-info">
                      <td>{item.Nit}</td>
                      <td>{item.Nom_ra}</td>
                      <td>{item.Nom_cor}</td>
                      <td>{item.Fe_cons}</td>
                      <td>{item.Ciu_cons}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Pais de constitucion</th>
                      <th>Direccion de sede principal</th>
                      <th>Barrio</th>
                      <th>Ciudad</th>
                      <th>Departamento</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr1-info">
                      <td>{item.Pai_cons}</td>
                      <td>{item.Dir_se}</td>
                      <td>{item.Barrio}</td>
                      <td>{item.Ciu_mu}</td>
                      <td>{item.Depart}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Pais</th>
                      <th>Telefono</th>
                      <th>Ext</th>
                      <th>Correo de la sede principal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr1-info">
                      <td>{item.Pais}</td>
                      <td>{item.Telefono}</td>
                      <td>{item.Ext}</td>
                      <td>{item.Corr_se}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="Tabla2">
              <center>
                <label>
                  <h2 className="title-content-info01">
                    Información del representante legal
                  </h2>
                </label>
              </center>
              <div className="table-responsive-sm">
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
                      <th>Tipo de documento</th>
                      <th>No de documento</th>
                      <th>Primer nombre</th>
                      <th>Segundo nombre</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.Nit} className="tr1-info">
                      <td>{item.Idti_docr}</td>
                      <td>{item.No_doc}</td>
                      <td>{item.Pri_nor}</td>
                      <td>{item.Seg_nor}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Primer apellido</th>
                      <th>Segundo apellido</th>
                      <th>Cargo</th>
                      <th>Direccion laboral</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr1-info">
                      <td>{item.Pri_aper}</td>
                      <td>{item.Seg_aper}</td>
                      <td>{item.Cargo_r}</td>
                      <td>{item.Dir_labr}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Barrio</th>
                      <th>Ciudad/Municipio</th>
                      <th>Departamento</th>
                      <th>Pais</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr1-info">
                      <td>{item.Barrio_r}</td>
                      <td>{item.Ciu_mur}</td>
                      <td>{item.Depart_r}</td>
                      <td>{item.Pais_r}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Telefono laboral</th>
                      <th>Ext</th>
                      <th>Celular</th>
                      <th>Correo laboral</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr1-info">
                      <td>{item.Tel_labr}</td>
                      <td>{item.Ext_r}</td>
                      <td>{item.Celular_r}</td>
                      <td>{item.Corr_labr}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="Tabla2">
              <center>
                <label>
                  <h2 className="title-content-info01">
                    Información de socios o accionistas
                  </h2>
                </label>
              </center>
              <div className="table-responsive-sm">
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
                      <th>
                        ¿Tiene socios o accionistas con participación directa o
                        indirecta superior al 5%?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.Nit} className="tr1-info">
                      <td>{item.Pre_1}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>
                        ¿Tiene socios o accionistas con participación directa o
                        indirecta igual o inferior al 5% y que tengan control
                        sobre la entidad?{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr1-info">
                      <td>{item.Pre_2}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="Tabla2">
              <center>
                <label>
                  <h2 className="title-content-info01">
                    Información de un contacto en la entidad
                  </h2>
                </label>
              </center>
              <div className="table-responsive-sm">
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
                      <th>Tipo de documento</th>
                      <th>No de documento</th>
                      <th>Primer nombre</th>
                      <th>Segundo nombre</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.Nit} className="tr1-info">
                      <td>{item.Idti_doc}</td>
                      <td>{item.No_docu}</td>
                      <td>{item.Pri_nom}</td>
                      <td>{item.Seg_nom}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Primer apellido</th>
                      <th>Segundo apellido</th>
                      <th>Cargo</th>
                      <th>Direccion laboral</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr1-info">
                      <td>{item.Pri_apec}</td>
                      <td>{item.Seg_apec}</td>
                      <td>{item.Cargo_c}</td>
                      <td>{item.Dir_labc}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Barrio</th>
                      <th>Ciudad/Municipio</th>
                      <th>Departamento</th>
                      <th>Pais</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr1-info">
                      <td>{item.Barrio_c}</td>
                      <td>{item.Ciu_muc}</td>
                      <td>{item.Depart_c}</td>
                      <td>{item.Pais_c}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Telefono laboral</th>
                      <th>Ext</th>
                      <th>Celular</th>
                      <th>Correo laboral</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr1-info">
                      <td>{item.Tel_lab_c}</td>
                      <td>{item.Ext_c}</td>
                      <td>{item.Celular_c}</td>
                      <td>{item.Corr_lab_c}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="Tabla2">
              <center>
                <label>
                  <h2 className="title-content-info01">
                    Información de la naturaleza y tipo de entidad jurídica
                  </h2>
                </label>
              </center>
              <div className="table-responsive-sm">
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
                      <th>Naturaleza de la entidad</th>
                      <th>Codigo CIUU</th>
                      <th>Detalle actividad economica principal</th>
                      <th>No empleados</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.Nit} className="tr1-info">
                      <td>{item.Nom_nat}</td>
                      <td>{item.Co_ciuu}</td>
                      <td>{item.Det_act}</td>
                      <td>{item.No_emp}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Sociedad comercial o civil</th>
                      <th>Otra sociedad</th>
                      <th>Tipo de entidad/asociación</th>
                      <th>Otro tipo de entidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr1-info">
                      <td>{item.nom_ti}</td>
                      <td>{item.Otro_com}</td>
                      <td>{item.Noti_ent}</td>
                      <td>{item.Otro_ent}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Entidades estatales</th>
                      <th>Otra</th>
                      <th>Entidades estatales descentralizadas de orden</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr1-info">
                      <td>{item.Nom_est}</td>
                      <td>{item.Otro_est}</td>
                      <td>{item.Nom_desc}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="Tabla2">
              <center>
                <label>
                  <h2 className="title-content-info01">
                    Información financiera
                  </h2>
                </label>
              </center>
              <div className="table-responsive-sm">
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
                      <th>Ingresos operacionales mensuales</th>
                      <th>Ingresos no operacionales mensuales</th>
                      <th>Detalle de ingresos no operacionales</th>
                      <th>Ventas anuales</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.Nit} className="tr1-info">
                      <td>{item.Ing_op}</td>
                      <td>{item.Ino_op}</td>
                      <td>{item.Detno}</td>
                      <td>{item.vent_an}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Fecha de cierre de ventas</th>
                      <th>Egresos mensuales</th>
                      <th>Utilidad neta</th>
                      <th>Total activos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr1-info">
                      <td>{item.Fe_ci}</td>
                      <td>{item.Egre_me}</td>
                      <td>{item.Util_ne}</td>
                      <td>{item.Tot_act}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Total pasivos</th>
                      <th>Total patrimonio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr1-info">
                      <td>{item.Tot_pas}</td>
                      <td>{item.Tot_pat}</td>
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
                      <th>Tipo de contribuyente</th>
                      <th>Clase de contribuyente</th>
                      <th>Responsable de iva</th>
                      <th>Autorretenedor de otros ingresos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.Nit} className="tr1-info">
                      <td>{item.Nom_contr}</td>
                      <td>{item.Nom_cla}</td>
                      <td>{item.Res_iva}</td>
                      <td>{item.Aut_ing}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Intermediario del mercado cambiario</th>
                      <th>Es vigilado por la superintendencia financiera</th>
                      <th>Obligado a tributar en estados unidos</th>
                      <th>número de ID tributario (TIN)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr1-info">
                      <td>{item.Int_merc}</td>
                      <td>{item.Vig_sup}</td>
                      <td>{item.Obli_est}</td>
                      <td>{item.No_id_tr}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>Pais No 1 donde tributa diferente a colombia</th>
                      <th>Pais No 2 donde tributa diferente a colombia</th>
                      <th>N°. Id. Tributario 1</th>
                      <th>N°. Id. Tributario 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr1-info">
                      <td>{item.Patri_1}</td>
                      <td>{item.Patri_2}</td>
                      <td>{item.NoidTrib_1}</td>
                      <td>{item.NoidTrib_2}</td>
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
                      <th>Otro</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.Nit} className="tr1-info">
                      <td>{item.Nomti_bie}</td>
                      <td>{item.Otro_fue}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>
                        Los recursos entregados provienen de la fuente de:
                      </th>
                      <th>Otro</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr1-info">
                      <td>{item.Nom_rec}</td>
                      <td>{item.Otro_pro}</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="tr1">
                      <th>El país origen</th>
                      <th>La ciudad origen de bienes y/o fondos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr1-info">
                      <td>{item.Pais_or}</td>
                      <td>{item.Ciu_or}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="Tabla2">
              <center>
                <label>
                  <h2 className="title-content-info01">
                    Declaración naturaleza de los recursos
                  </h2>
                </label>
              </center>
              <div className="table-responsive-sm">
                <table className="table table-hover table-borderless table-transparent">
                  <thead className="">
                    <tr className="tr1">
                      <th>
                        {" "}
                        En las cuentas de las cuales sea titular mi
                        representada, se manejan recursos públicos de naturaleza
                        inembargable:{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.Nit} className="tr1-info">
                      <td>{item.Nat_recu}</td>
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
                      <th>¿Realiza operaciones en moneda extranjera?</th>
                      <th>Operaciones que realiza en moneda extranjera:</th>
                      <th>Otra</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item.Nit} className="tr1-info">
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
                  Solicitud No {item.Id_ent}
                </h3>
              </label>
            </center>
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
                        <tr key={item.Id_solij} className="tr1-info">
                          <td>{item.Id_solij}</td>
                          <td>{item.Esta_soj}</td>
                          <td>{item.Des_solij}</td>
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

      <McuentasPN
        handleShow={handleShow}
        mostrar={mostrarCuenta}
        datam1={dataExtraCuenta}
      />
    </div>
  );
};

export default Consulta;
