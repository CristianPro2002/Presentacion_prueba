import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import "./EstilosJ.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import React, { useState } from "react";

const PersonaJuridica = () => {
  let Navigate = useNavigate();

  /*
 const formik = useFormik({
    initialValues: {
      Tipo_Solicitud: "",
      Fecha: "",
      N_documento: "",
      Nombre_RazonSocial: "",
      NombreCorto_Sigla: "",
      Fecha_Constitucion: "",
      Ciudad_Constitucion: "",
      Pais_Constitucion: "",
      DireccionSedePrincipal: "",
      Barrio: "",
      Ciudad_Municipio: "",
      Departamento: "",
      Pais: "",
      Telefono: "",
      Ext: "",
      CorreoElectronicoSedePrincipal: "",
      Tipo_Documento: "",
      N_Documento2: "",
      PrimerNombre: "",
      SegundoNombre: "",
      PrimerApellido: "",
      SegundoApellido: "",
      Cargo: "",
      DireccionLaboral: "",
      Barrio2: "",
      Ciudad_Municipio2: "",
      Departamento2: "",
      Pais2: "",
      TelefonoLaboral: "",
      Ext2: "",
      Celular: "",
      CorreoElectronicoLaboral: "",
      Socios_Accionistas: "",
      Socios_Accionistas_Entidad: "",
      Tipo_Documento2: "",
      N_Documento3: "",
      PrimerNombre2: "",
      SegundoNombre2: "",
      PrimerApellido2: "",
      SegundoApellido2: "",
      Cargo2: "",
      DireccionLaboral2: "",
      Barrio3: "",
      Ciudad_Municipio3: "",
      Departamento3: "",
      Pais3: "",
      TelefonoLaboral2: "",
      Ext3: "",
      Celular2: "",
      CorreoElectronicoLaboral2: "",
      NaturalezaEntidad: "",
      CodigoCiiu: "",
      DetalleActividadEconomicaPrincipal: "",
      N_Empleados: "",
      SociedadComercial_Civil: "",
      TipoEntidad_Asociacion: "",
      EntidadesEstatales: "",
      EntidadesEstatalesDescentralizadasOrden: "",
      IngresosOperacionalesMensuales: "",
      IngresosNoOperacionalesMensuales: "",
      DetalleIngresosNoOperacionales: "",
      VentasAnuales: "",
      FechaCierreVentas: "",
      EgresosMensuales: "",
      UtilidadNeta: "",
      TotalActivos: "",
      TotalPasivos: "",
      TotalPatrimonio: "",
      TipoContribuyente: "",
      ClaseContribuyente: "",
      ResponsableIva: "",
      AutorretenedorIngresos: "",
      IntermediarioMercadoCambiario: "",
      VigiladoSuperintendenciaFinanciera: "",
      ObligadoTributarEEUU: "",
      NumeroIdTributario: "",
      N_Id_Tributario: "",
      OrigenBienesProviene: "",
      RecursosEntregueProvienen: "",
      PaisOrigen: "",
      CiudadOrigenBienes: "",
      RecursosPublicosNaturaleza: "",
      OperacionesMonedaExtranjera: "",
      CualesOperacionesRealizaMonedaExtranjera: "",
      NombreEntidad: "",
      TipoProducto: "",
      N_Producto: "",
      MontoMensualPromedio: "",
      Moneda: "",
      Ciudad: "",
      Pais4: "",
      NombreEntidad2: "",
      TipoProducto2: "",
      N_Producto2: "",
      MontoMensualPromedio2: "",
      Moneda2: "",
      Ciudad2: "",
      Pais5: "",
      ReporteAnualCostosTotales: "",
      ActuaEnCalidadDe: "",
      Nombre: "",
      N_Identificacion: "",
      CodigoVendedor: "",
      Nombre2: "",
      Oficina: "",
      Observaciones: "",
    },

    validationSchema: Yup.object({
      Fecha: Yup.date().default(function () {
        return new Date();
      }),
      N_documento: Yup.string()
        .max(10, `Máximo 10 caracteres`)
        .required("el N° documento es obligatorio"),
      Nombre_RazonSocial: Yup.string()
        .max(15, `Máximo 15 caracteres`)
        .required("Este campo es obligatorio"),
      Tipo_Documento: Yup.string().required("Este campo es requerido"),
    }),
    onSubmit: (formData) => {
      console.log(formData);
    },
  });
*/

  const baseUrl = "http://localhost:8080/Banca/bd_crud/principal.php";

  var min=100000; 
  var max=999999;  
  var random =Math.floor(Math.random() * (+max - +min)) + +min; 
  //console.log("el valor random es:"+ random)

  const [data, setData] = useState([]);
  const [dataUsuario, setDataUsuario] = useState({
    Fe_dil: "",
    Idti_sol: "",
    tidoc_ent: "",
    Nit: "",
    Idti_doc: "",
    Idti_doc2: "",
    Pri_no: "",
    Seg_no: "",
    No_cuenta: random,
    Pri_ape: "",
    Seg_ape: "",
    Pri_ape2: "",
    Seg_ape2: "",
    Cargo: "",
    Cargo2: "",
    Dir_lab: "",
    Dir_lab2: "",
    Barrio: "",
    Barrio2: "",
    Barrio3: "",
    Ciu_mu: "",
    Ciu_mu2: "",
    Ciu_mu3: "",
    Depart: "",
    Depart2: "",
    Depart3: "",
    Pais: "",
    Pais2: "",
    Pais3: "",
    Tel_lab: "",
    Tel_lab2: "",
    Ext: "",
    Ext2: "",
    Ext3: "",
    Celular: "",
    Celular2: "",
    Corr_lab: "",
    Corr_lab2: "",
    Fidei: "",
    No_fide: "",
    Nom_ra: "",
    Nom_cor: "",
    Fe_cons: "",
    Ciu_cons: "",
    Pai_cons: "",
    Dir_se: "",
    Telefono: "",
    Corr_se: "",
    No_doc: "",
    Pre_1: "",
    Pre_2: "",
    No_docu: "",
    Pri_nom: "",
    Seg_nom: "",
    Idti_na: "",
    Co_ciuu: "",
    Det_act: "",
    No_emp: "",
    Idti_soci: "",
    Otro_com: "",
    Idti_en: "",
    Otro_ent: "",
    Idti_es: "",
    Otro_est: "",
    Idti_des: "",
    Ing_op: "",
    Ino_op: "",
    Detno: "",
    vent_an: "",
    Fe_ci: "",
    Egre_me: "",
    Util_ne: "",
    Tot_act: "",
    Tot_pas: "",
    Tot_pat: "",
    Idti_cont: "",
    Idcla_cont: "",
    Res_iva: "",
    Aut_ing: "",
    Int_merc: "",
    Vig_sup: "",
    Obli_est: "",
    No_id_tr: "",
    Patri_1: "",
    Patri_2: "",
    NoidTrib_1: "",
    NoidTrib_2: "",
    Idtripro_bi: "",
    Otro_fue: "",
    Idfue_rec: "",
    Otro_pro: "",
    Pais_or: "",
    Ciu_or: "",
    Nat_recu: "",
    Op_ext: "",
    Idtiop_m: "",
    Otro_mo: "",
    Nom_ent: "",
    Idtipro_m: "",
    Otro_mo2: "",
    No_pro: "",
    Mo_pro: "",
    Moneda: "",
    Ciu_ent: "",
    Pa_ent: "",
    Idtien_re: "",
    Idti_soli: "",
    No_solicit: "",
    Nom_solicit: "",
    Firma: "",
    Cod_vend: "",
    Nom_vend: "",
    Oficina: "",
    Obser: "",
    Firma_vend: "",
  });

  const peticionPost = async () => {
    var f = new FormData();
    f.append("Fe_dil", dataUsuario.Fe_dil);
    f.append("Idti_sol", dataUsuario.Idti_sol);
    f.append("tidoc_ent", dataUsuario.tidoc_ent);
    f.append("Nit", dataUsuario.Nit);
    f.append("No_cuenta", dataUsuario.No_cuenta);
    f.append("Idti_doc", dataUsuario.Idti_doc);
    f.append("Idti_doc2", dataUsuario.Idti_doc2);
    f.append("Pri_no", dataUsuario.Pri_no);
    f.append("Seg_no", dataUsuario.Seg_no);
    f.append("Pri_ape", dataUsuario.Pri_ape);
    f.append("Seg_ape", dataUsuario.Seg_ape);
    f.append("Pri_ape2", dataUsuario.Pri_ape2);
    f.append("Seg_ape2", dataUsuario.Seg_ape2);
    f.append("Cargo", dataUsuario.Cargo);
    f.append("Cargo2", dataUsuario.Cargo2);
    f.append("Dir_lab", dataUsuario.Dir_lab);
    f.append("Dir_lab2", dataUsuario.Dir_lab2);
    f.append("Barrio", dataUsuario.Barrio);
    f.append("Barrio2", dataUsuario.Barrio2);
    f.append("Barrio3", dataUsuario.Barrio3);
    f.append("Ciu_mu", dataUsuario.Ciu_mu);
    f.append("Ciu_mu2", dataUsuario.Ciu_mu2);
    f.append("Ciu_mu3", dataUsuario.Ciu_mu3);
    f.append("Depart", dataUsuario.Depart);
    f.append("Depart2", dataUsuario.Depart2);
    f.append("Depart3", dataUsuario.Depart3);
    f.append("Pais", dataUsuario.Pais);
    f.append("Pais2", dataUsuario.Pais2);
    f.append("Pais3", dataUsuario.Pais3);
    f.append("Tel_lab", dataUsuario.Tel_lab);
    f.append("Tel_lab2", dataUsuario.Tel_lab2);
    f.append("Ext", dataUsuario.Ext);
    f.append("Ext2", dataUsuario.Ext2);
    f.append("Ext3", dataUsuario.Ext3);
    f.append("Celular", dataUsuario.Celular);
    f.append("Celular2", dataUsuario.Celular2);
    f.append("Corr_lab", dataUsuario.Corr_lab);
    f.append("Corr_lab2", dataUsuario.Corr_lab2);
    f.append("Fidei", dataUsuario.Fidei);
    f.append("No_fide", dataUsuario.No_fide);
    f.append("Nom_ra", dataUsuario.Nom_ra);
    f.append("Nom_cor", dataUsuario.Nom_cor);
    f.append("Fe_cons", dataUsuario.Fe_cons);
    f.append("Ciu_cons", dataUsuario.Ciu_cons);
    f.append("Pai_cons", dataUsuario.Pai_cons);
    f.append("Dir_se", dataUsuario.Dir_se);  
    f.append("Telefono", dataUsuario.Telefono);  
    f.append("Corr_se", dataUsuario.Corr_se);
    f.append("No_doc", dataUsuario.No_doc);
    f.append("Pre_1", dataUsuario.Pre_1);
    f.append("Pre_2", dataUsuario.Pre_2);
    f.append("No_docu", dataUsuario.No_docu);
    f.append("Pri_nom", dataUsuario.Pri_nom);
    f.append("Seg_nom", dataUsuario.Seg_nom);
    f.append("Idti_na", dataUsuario.Idti_na);
    f.append("Co_ciuu", dataUsuario.Co_ciuu);
    f.append("Det_act", dataUsuario.Det_act);
    f.append("No_emp", dataUsuario.No_emp);
    f.append("Idti_soci", dataUsuario.Idti_soci);
    f.append("Otro_com", dataUsuario.Otro_com);
    f.append("Idti_en", dataUsuario.Idti_en);
    f.append("Otro_ent", dataUsuario.Otro_ent);
    f.append("Idti_es", dataUsuario.Idti_es);
    f.append("Otro_est", dataUsuario.Otro_est);
    f.append("Idti_des", dataUsuario.Idti_des);
    f.append("Ing_op", dataUsuario.Ing_op);
    f.append("Ino_op", dataUsuario.Ino_op);
    f.append("Detno", dataUsuario.Detno);
    f.append("vent_an", dataUsuario.vent_an);
    f.append("Fe_ci", dataUsuario.Fe_ci);
    f.append("Egre_me", dataUsuario.Egre_me);
    f.append("Util_ne", dataUsuario.Util_ne);
    f.append("Tot_act", dataUsuario.Tot_act);
    f.append("Tot_pas", dataUsuario.Tot_pas);
    f.append("Tot_pat", dataUsuario.Tot_pat);
    f.append("Idti_cont", dataUsuario.Idti_cont);
    f.append("Idcla_cont", dataUsuario.Idcla_cont);
    f.append("Res_iva", dataUsuario.Res_iva);
    f.append("Aut_ing", dataUsuario.Aut_ing);
    f.append("Int_merc", dataUsuario.Int_merc);
    f.append("Vig_sup", dataUsuario.Vig_sup);
    f.append("Obli_est", dataUsuario.Obli_est);
    f.append("No_id_tr", dataUsuario.No_id_tr);
    f.append("Patri_1", dataUsuario.Patri_1);
    f.append("Patri_2", dataUsuario.Patri_2);
    f.append("NoidTrib_1", dataUsuario.NoidTrib_1);
    f.append("NoidTrib_2", dataUsuario.NoidTrib_2);
    f.append("Idtripro_bi", dataUsuario.Idtripro_bi);
    f.append("Otro_fue", dataUsuario.Otro_fue);
    f.append("Idfue_rec", dataUsuario.Idfue_rec);
    f.append("Otro_pro", dataUsuario.Otro_pro);
    f.append("Pais_or", dataUsuario.Pais_or);
    f.append("Ciu_or", dataUsuario.Ciu_or);
    f.append("Nat_recu", dataUsuario.Nat_recu);
    f.append("Op_ext", dataUsuario.Op_ext);
    f.append("Idtiop_m", dataUsuario.Idtiop_m);
    f.append("Otro_mo", dataUsuario.Otro_mo);
    f.append("Nom_ent", dataUsuario.Nom_ent);
    f.append("Idtipro_m", dataUsuario.Idtipro_m);
    f.append("Otro_mo2", dataUsuario.Otro_mo2);
    f.append("No_pro", dataUsuario.No_pro);
    f.append("Mo_pro", dataUsuario.Mo_pro);
    f.append("Moneda", dataUsuario.Moneda);
    f.append("Ciu_ent", dataUsuario.Ciu_ent);
    f.append("Pa_ent", dataUsuario.Pa_ent);
    f.append("Idtien_re", dataUsuario.Idtien_re);
    f.append("Idti_soli", dataUsuario.Idti_soli);
    f.append("No_solicit", dataUsuario.No_solicit);
    f.append("Nom_solicit", dataUsuario.Nom_solicit);
    f.append("Firma", dataUsuario.Firma);
    f.append("Cod_vend", dataUsuario.Cod_vend);
    f.append("Nom_vend", dataUsuario.Nom_vend);
    f.append("Oficina", dataUsuario.Oficina);
    f.append("Obser", dataUsuario.Obser);
    f.append("Firma_vend", dataUsuario.Firma_vend);
    f.append("METHOD", "FORMJ");
    await axios
      .post(baseUrl, f)
      .then((response) => {
        setData(data.concat(response.data));
        Navigate(-1);
      })
      .catch((error) => {
        alert("Error en el post");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUsuario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(dataUsuario);
  };

  return (
    <div className="FONDO">
      <div>
        <i
          class="bi bi-arrow-left-circle-fill"
          id="cir2"
          onClick={() => Navigate(-1)}
        ></i>
      </div>
      <div className="hijo">
        <h1 className="Titulo-principal">PERSONA JURIDICA</h1>
        <form className="row red-red">
          <div className="col-md-8 mb-1 " id="Container-1">
            <Col>
              <h5 className="Titulo">Tipo de solicitud</h5>
              <label className="label-5">
                <input
                  name="Idti_sol"
                  type="radio"
                  id="r1"
                  value="1"
                  className="cursor-pointer"
                  onChange={handleChange}
                  required
                />{" "}
                <label for="r1">Vinculación</label>
              </label>
              <label className="label-5">
                <input
                  name="Idti_sol"
                  type="radio"
                  id="r2"
                  value="2"
                  className="cursor-pointer"
                  onChange={handleChange}
                  required
                />{" "}
                <label for="r2">Actualización</label>
              </label>
            </Col>
          </div>

          <div className="col-md-4 mb-1" id="Container-1">
            <Col>
              <h5 className="Titulo">Fecha diligenciamiento </h5>

              <label className="label">
                <input
                  type="date"
                  name="Fe_dil"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <div>
                <h5 className="Titulo">Información general de la entidad</h5>
              </div>
              <div className="label-13">
                <label className="">
                  Tipo de documento{" "}
                  <input
                    type="checkbox"
                    name="tidoc_ent"
                    value="Nit"
                    className="cursor-pointer"
                    onChange={handleChange}
                  />{" "}
                  NIT
                </label>
              </div>
              <label className="label-2">
                <div>Nº documento</div>
                <input
                  type="number"
                  name="Nit"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <h5 className="Titulo-3"></h5>
              <div className="label-13">
                <label className="label-14">
                  <input
                    type="checkbox"
                    value="Fideicomiso"
                    name="Fidei"
                    className="cursor-pointer"
                    onChange={handleChange}
                  />{" "}
                  Fideicomiso{" "}
                </label>
              </div>
              <label className="label-6">
                Nº de fideicomiso{" "}
                <input
                  type="number"
                  name="No_fide"
                  className="Border"
                  onChange={handleChange}
                />
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                Nombre o razón social{" "}
                <input
                  type="text"
                  name="Nom_ra"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-7" id="Container-1">
            <Col>
              <label className="label-2">
                Nombre corto o sigla
                <input
                  type="text"
                  name="Nom_cor"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-5" id="Container-1">
            <Col>
              <label className="center">
                Fecha de constitución{" "}
                <input
                  type="date"
                  name="Fe_cons"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">
                Ciudad de constitución{" "}
                <input
                  type="text"
                  name="Ciu_cons"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">
                Pais de constitución{" "}
                <input
                  type="text"
                  name="Pai_cons"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                Dirección sede principal
                <input
                  type="text"
                  name="Dir_se"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Barrio
                <input
                  type="text"
                  name="Barrio"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Ciudad/Municipio
                <input
                  type="text"
                  name="Ciu_mu"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Departamento
                <input
                  type="text"
                  name="Depart"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-6">
                País
                <input
                  type="text"
                  name="Pais"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-4">
                Teléfono
                <input
                  type="number"
                  name="Telefono"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="label-4">
                Ext
                <input
                  type="number"
                  name="Ext"
                  className="Border"
                  onChange={handleChange}
                />
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                Correo electrónico sede principal
                <input
                  type="text"
                  name="Corr_se"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
            <br />
          </div>

          <div className="col-md-7" id="Container-1">
            <Col>
              <div>
                <h5 className="Titulo">Información del representante legal</h5>
              </div>
              <label className="label-2">
                {" "}
                <div>Tipo de documento</div>
                <select
                  className="Select-One"
                  onChange={handleChange}
                  name="Idti_doc"
                  required
                >
                  <option >
                    Seleccione su documento de identidad
                  </option>
                  <option value="1">CC</option>
                  <option value="4">Cédula de extranjeria</option>
                  <option value="5">Pasaporte</option>
                  <option value="6">Carné diplomático</option>
                </select>
              </label>
            </Col>
          </div>

          <div className="col-md-5" id="Container-1">
            <Col>
              <h5 className="Titulo-3"></h5>
              <label className="label-2">
                N° de documento
                <input
                  type="number"
                  name="No_doc"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label">
                Primer nombre{" "}
                <input
                  type="text"
                  name="Pri_no"
                  className="Border"
                  onChange={handleChange}
                  required
                />{" "}
              </label>
              <label className="label">
                Segundo nombre{" "}
                <input
                  type="text"
                  name="Seg_no"
                  className="Border"
                  onChange={handleChange}
                />
              </label>
            </Col>
            <Col>
              <label className="label">
                Primer apellido{" "}
                <input
                  type="text"
                  name="Pri_ape"
                  className="Border"
                  onChange={handleChange}
                  required
                />{" "}
              </label>
              <label className="label">
                Segundo apellido{" "}
                <input
                  type="text"
                  name="Seg_ape"
                  className="Border"
                  onChange={handleChange}
                />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">
                Cargo{" "}
                <input
                  type="text"
                  name="Cargo"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">
                Dirección laboral{" "}
                <input
                  type="text"
                  name="Dir_lab"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Barrio
                <input
                  type="text"
                  name="Barrio2"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Ciudad/Municipio
                <input
                  type="text"
                  name="Ciu_mu2"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Departamento
                <input
                  type="text"
                  name="Depart2"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                País
                <input
                  type="text"
                  name="Pais2"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-5" id="Container-1">
            <Col>
              <label className="label-4">
                Teléfono laboral
                <input
                  type="number"
                  name="Tel_lab"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="label-4">
                Ext
                <input
                  type="number"
                  name="Ext2"
                  className="Border"
                  onChange={handleChange}
                />
              </label>
            </Col>
          </div>

          <div className="col-md-3" id="Container-1">
            <Col>
              <div>
                <label className="label-2">
                  Celular
                  <input
                    type="number"
                    name="Celular"
                    className="Border-3"
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            </Col>
          </div>

          <div className="col-md-12 mb-4" id="Container-1">
            <Col>
              <label className="label-2">
                Correo electrónico laboral
                <input
                  type="text"
                  name="Corr_lab"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <h5 className="Titulo">Información de socios o accionistas</h5>
              <div>
                <p className="Texto label">
                  ¿Tienes socios o accionistas con participación directa o
                  indirecta superior al 5%?
                  <label className="label-16">
                    Sí{" "}
                    <input
                      type="radio"
                      name="Pre_1"
                      value="Si"
                      className="cursor-pointer"
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="label">
                    No{" "}
                    <input
                      type="radio"
                      name="Pre_1"
                      value="No"
                      className="cursor-pointer"
                      onChange={handleChange}
                      required
                    />
                  </label>
                </p>
              </div>
            </Col>
          </div>
          <div className="col-md-12" id="Container-1">
            <Col>
              <div>
                <p className="Texto label">
                  ¿Tienes socios o accionistas con participación directa o
                  indirecta igual o inferior al 5% y que tengan control sobre la
                  entidad?
                  <label className="label">
                    Sí{" "}
                    <input
                      type="radio"
                      name="Pre_2"
                      value="Si"
                      className="cursor-pointer"
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="label">
                    No{" "}
                    <input
                      type="radio"
                      name="Pre_2"
                      value="No"
                      className="cursor-pointer"
                      onChange={handleChange}
                      required
                    />
                  </label>
                </p>
              </div>
            </Col>
          </div>
          <div className="col-md-12" id="Container-1">
            <Col>
              <div>
                <p className="Texto-3">
                  Si alguna de las respuestas es afirmativa, adjunte a esta
                  solicitud el anexo de Conocimiento Socios o Accionistas.
                </p>
              </div>
            </Col>
          </div>
          <div className="col-md-7" id="Container-1">
            <Col>
              <h5 className="Titulo">
                Información de un contacto en la entidad
              </h5>
              <label className="label-2">
                {" "}
                Tipo de documento
                <select
                  className="Select-One"
                  name="Idti_doc2"
                  onChange={handleChange}
                  required
                >
                  <option >
                    Seleccione su documento de identidad
                  </option>
                  <option value="1">CC</option>
                  <option value="4">Cédula de extranjeria</option>
                  <option value="5">Pasaporte</option>
                  <option value="6">Carné diplomático</option>
                </select>
              </label>
            </Col>
          </div>

          <div className="col-md-5" id="Container-1">
            <Col>
              <h5 className="Titulo-7">
                {" "}
                (Diligencie esta Información para un contacto diferente al
                representante legal){" "}
              </h5>
              <label className="label-2">
                N° de documento
                <input
                  type="number"
                  name="No_docu"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label">
                Primer nombre{" "}
                <input
                  type="text"
                  name="Pri_nom"
                  className="Border"
                  onChange={handleChange}
                  required
                />{" "}
              </label>
              <label className="label">
                Segundo nombre{" "}
                <input
                  type="text"
                  name="Seg_nom"
                  className="Border"
                  onChange={handleChange}
                />
              </label>
            </Col>
            <Col>
              <label className="label">
                Primer apellido{" "}
                <input
                  type="text"
                  name="Pri_ape2"
                  className="Border"
                  onChange={handleChange}
                  required
                />{" "}
              </label>
              <label className="label">
                Segundo apellido{" "}
                <input
                  type="text"
                  name="Seg_ape2"
                  className="Border"
                  onChange={handleChange}
                />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">
                Cargo{" "}
                <input
                  type="text"
                  name="Cargo2"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">
                Dirección laboral{" "}
                <input
                  type="text"
                  name="Dir_lab2"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Barrio
                <input
                  type="text"
                  name="Barrio3"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Ciudad/Municipio
                <input
                  type="text"
                  name="Ciu_mu3"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Departamento
                <input
                  type="text"
                  name="Depart3"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-9">
                País
                <input
                  type="text"
                  name="Pais3"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-5" id="Container-1">
            <Col>
              <label className="label-4">
                Teléfono laboral
                <input
                  type="number"
                  name="Tel_lab2"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="label-4">
                Ext
                <input
                  type="number"
                  name="Ext3"
                  className="Border"
                  onChange={handleChange}
                />
              </label>
            </Col>
          </div>

          <div className="col-md-3" id="Container-1">
            <Col>
              <label className="label-2">
                Celular
                <input
                  type="number"
                  name="Celular2"
                  className="Border-3"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-12 mb-4" id="Container-1">
            <Col>
              <label className="label-2">
                Correo electrónico laboral
                <input
                  type="text"
                  name="Corr_lab2"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>
          <div className="col-md-8" id="Container-1">
            <Col>
              <h5 className="Titulo">
                Información de la naturaleza y tipo de entidad jurídica
              </h5>
              <div className="Div">
                <label className="label">
                  <p className="Texto-2">Naturaleza de la entidad</p>
                  <input
                    type="radio"
                    name="Idti_na"
                    value="1"
                    className="cursor-pointer"
                    onChange={handleChange}
                    required
                  />{" "}
                  Privada
                </label>
                <label className="label">
                  <input
                    type="radio"
                    name="Idti_na"
                    value="2"
                    className="cursor-pointer"
                    onChange={handleChange}
                    required
                  />{" "}
                  Pública
                </label>
                <label className="label">
                  <input
                    type="radio"
                    name="Idti_na"
                    value="3"
                    className="cursor-pointer"
                    onChange={handleChange}
                    required
                  />{" "}
                  Mixta
                </label>
              </div>
            </Col>
          </div>
          <div className="col-md-4" id="Container-1">
            <Col>
              <h5 className="Titulo-3"></h5>
              <label className="label">
                Código CIIU{" "}
                <input
                  type="number"
                  name="Co_ciuu"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>
          <div className="col-md-9" id="Container-1">
            <Col>
              <label className="label-2">
                Detalle de la actividad económica principal{" "}
                <input
                  type="text"
                  name="Det_act"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>
          <div className="col-md-3" id="Container-1">
            <Col>
              <label className="label-6">
                N°. Empleados{" "}
                <input
                  type="number"
                  name="No_emp"
                  className="Border-3"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                {" "}
                Sociedad comercial o civil
                <select
                  className="Select-One"
                  name="Idti_soci"
                  onChange={handleChange}
                  required
                >
                  <option >Seleccione una opcion</option>
                  <option value="1">Por acciones simplificadas S.A.S</option>
                  <option value="2">Anónima</option>
                  <option value="3">Limitada</option>
                  <option value="4">En comandita simple</option>
                  <option value="5">En comandita por acciones</option>
                  <option value="6">Sin animo de lucro</option>
                  <option value="7">Surcusal de sociedad extranjera</option>
                  <option value="8">Empresa unipersonal</option>
                  <option value="9">Asociación civil</option>
                  <option value="10">Sociedad de hecho</option>
                  <option value="11">Colectiva</option>
                  <option value="12">Ninguna</option>
                </select>
                <Col className="">
                  <label className="label-12">
                    Otra, ¿cuál?{" "}
                    <input
                      type="text"
                      name="Otro_com"
                      className="Border"
                      onChange={handleChange}
                    />
                  </label>
                </Col>
              </label>
            </Col>
          </div>
          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                {" "}
                Tipo de entidad/asociación
                <select
                  className="Select-One"
                  name="Idti_en"
                  onChange={handleChange}
                  required
                >
                  <option >Seleccione una opcion</option>
                  <option value="1">Establecimiento público</option>
                  <option value="2">
                    Empresa industrial y comercial del estado
                  </option>
                  <option value="3">Sociedad de economía mixta</option>
                  <option value="4">Empresa social del estado</option>
                  <option value="5">
                    Empresa servicios públicos domiciliarios
                  </option>
                  <option value="6">Entidades financieras</option>
                  <option value="7">Fondos mutuos de inversión</option>
                  <option value="8">Fondos de empleados</option>
                  <option value="9">Cooperativas</option>
                  <option value="10">Precooperativas</option>
                  <option value="11">Copropiedades</option>
                  <option value="12">
                    Personas jurídicas de derecho canónico
                  </option>
                  <option value="13">Entidades religiosas no católicas</option>
                  <option value="14">Sindicatos</option>
                  <option value="15">Fundaciones</option>
                  <option value="16">Corporaciones y asociaciones</option>
                  <option value="17">Partido político</option>
                  <option value="18">*Consorcio</option>
                  <option value="19">*Unión temporal</option>
                </select>
                <Col className="">
                  <label className="label-2">
                    <p className="">
                      Si el tipo de entidad es Consorcio o Unión temporal
                      diligencie el anexo Conocimiento del Cliente Consorcio o
                      Unión temporal.
                    </p>
                  </label>
                  <label className="label-12">
                    Otra, ¿cuál?{" "}
                    <input
                      type="text"
                      name="Otro_ent"
                      className="Border"
                      onChange={handleChange}
                    />
                  </label>
                </Col>
              </label>
            </Col>
          </div>
          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                {" "}
                Entidades estatales
                <select
                  className="Select-One"
                  name="Idti_es"
                  onChange={handleChange}
                  required
                >
                  <option >Seleccione una opcion</option>
                  <option value="1">Nación</option>
                  <option value="2">Departamento</option>
                  <option value="3">Municipio</option>
                </select>
                <Col className="">
                  <label className="label-12">
                    Otra, ¿cuál?{" "}
                    <input
                      type="text"
                      name="Otro_est"
                      className="Border"
                      onChange={handleChange}
                    />
                  </label>
                </Col>
              </label>
            </Col>
          </div>
          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                {" "}
                Entidades estatales descentralizadas de orden
                <select
                  className="Select-One"
                  name="Idti_des"
                  onChange={handleChange}
                  required
                >
                  <option >Seleccione una opcion</option>
                  <option value="1">Nacional</option>
                  <option value="2">Departamental</option>
                  <option value="3">Municipal</option>
                </select>
              </label>
            </Col>
            <br />
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <h5 className="Titulo">Información financiera </h5>
              <label className="label-2">
                Ingresos operacionales mensuales
              </label>
              <label className="label float-left">
                {" "}
                ${" "}
                <input
                  type="number"
                  name="Ing_op"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>
          <div className="col-md-6" id="Container-1">
            <Col>
              <h5 className="Titulo-3"></h5>
              <label className="label-2">
                Ingresos no operacionales mensuales
              </label>
              <label className="label float-left">
                {" "}
                ${" "}
                <input
                  type="numer"
                  name="Ino_op"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                Detalle de ingresos no operacionales u originados en actividades
                diferentes a la principal
                <input
                  type="text"
                  name="Detno"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-7" id="Container-1">
            <Col>
              <label className="label-18">
                Ventas anuales ${" "}
                <input
                  type="number"
                  name="vent_an"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-5" id="Container-1">
            <Col>
              <label className="label-11">
                Fecha de cierre de ventas{" "}
                <input
                  type="date"
                  name="Fe_ci"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-18">
                Egresos mensuales ${" "}
                <input
                  type="number"
                  name="Egre_me"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-18">
                Utilidad neta ${" "}
                <input
                  type="number"
                  name="Util_ne"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-18">
                Total activos ${" "}
                <input
                  type="number"
                  name="Tot_act"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">Total pasivos</label>
              <label className="label float-left">
                {" "}
                ${" "}
                <input
                  type="number"
                  name="Tot_pas"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>
          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">Total patrimonio </label>
              <label className="label float-left">
                {" "}
                ${" "}
                <input
                  type="number"
                  name="Tot_pat"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
            <br />
          </div>

          <div className="col-md-7" id="Container-1">
            <Col>
              <h5 className="Titulo">Información tributaria</h5>
              <label className="label-2">
                {" "}
                Tipo de contribuyente
                <select
                  className="Select-One"
                  name="Idti_cont"
                  onChange={handleChange}
                  required
                >
                  <option >Seleccione una opcion</option>
                  <option value="1">
                    Persona juridicas, comerciales y civiles, consorcios y
                    uniones temporales
                  </option>
                  <option value="2">
                    Corporaciones, fundaciones y asociaciones sin ánimo de lucro
                  </option>
                  <option value="3">
                    Entidad pública nacional o territorial
                  </option>
                  <option value="4">Cooperativa</option>
                  <option value="5">No contribuyente</option>
                </select>
              </label>
            </Col>
          </div>

          <div className="col-md-5" id="Container-1">
            <Col>
              <h5 className="Titulo-3"></h5>
              <label className="label">Clase de contribuyente</label>
              <label className="label">
                <input
                  type="radio"
                  name="Idcla_cont"
                  value="1"
                  className="Border"
                  onChange={handleChange}
                  required
                />{" "}
                Gran contribuyente{" "}
                <input
                  type="radio"
                  name="Idcla_cont"
                  value="2"
                  className="Border"
                  onChange={handleChange}
                  required
                />{" "}
                No gran contribuyente
              </label>
            </Col>
          </div>

          <div className="col-md-3" id="Container-1">
            <Col>
              <label className="label">Responsable de iva</label>
              <label className="label">
                <input
                  type="radio"
                  name="Res_iva"
                  value="Si"
                  className="cursor-pointer"
                  onChange={handleChange}
                  required
                />{" "}
                Si{" "}
                <input
                  type="radio"
                  name="Res_iva"
                  Value="No"
                  className="cursor-pointer"
                  onChange={handleChange}
                  required
                />{" "}
                No
              </label>
            </Col>
          </div>

          <div className="col-md-3" id="Container-1">
            <Col>
              <label className="label">Autorretenedor otros ingresos</label>
              <label className="label">
                <input
                  type="radio"
                  name="Aut_ing"
                  value="Si"
                  className="cursor-pointer"
                  onChange={handleChange}
                  required
                />{" "}
                Si{" "}
                <input
                  type="radio"
                  name="Aut_ing"
                  value="No"
                  className="cursor-pointer"
                  onChange={handleChange}
                  required
                />{" "}
                No
              </label>
            </Col>
          </div>

          <div className="col-md-3" id="Container-1">
            <Col>
              <label className="label">
                Intermediario del mercado cambiario
              </label>
              <label className="label">
                <input
                  type="radio"
                  name="Int_merc"
                  value="Si"
                  className="cursor-pointer"
                  onChange={handleChange}
                  required
                />{" "}
                Si{" "}
                <input
                  type="radio"
                  name="Int_merc"
                  Value="No"
                  className="cursor-pointer"
                  onChange={handleChange}
                  required
                />{" "}
                No
              </label>
            </Col>
          </div>

          <div className="col-md-3" id="Container-1">
            <Col>
              <label className="label">
                Es vigilado por la superintendencia financiera
              </label>
              <label className="label">
                <input
                  type="radio"
                  name="Vig_sup"
                  value="Si"
                  className="cursor-pointer"
                  onChange={handleChange}
                  required
                />{" "}
                Si{" "}
                <input
                  type="radio"
                  name="Vig_sup"
                  value="No"
                  className="cursor-pointer"
                  onChange={handleChange}
                  required
                />{" "}
                No
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-12">
                Obligado a tributar en Estados Unidos
              </label>
              <div className="Div">
                <label className="label">
                  <input
                    type="radio"
                    name="Obli_est"
                    value="Si"
                    className="cursor-pointer"
                    onChange={handleChange}
                    required
                  />{" "}
                  Si{" "}
                  <input
                    type="radio"
                    name="Obli_est"
                    Value="No"
                    className="cursor-pointer"
                    onChange={handleChange}
                    required
                  />{" "}
                  No
                </label>
              </div>

              <p>
                <label className="label-12">
                  Si su respuesta es afirmativa indique el número de ID
                  tributario (TIN)
                  <label className="label">
                    <input
                      type="number"
                      name="No_id_tr"
                      className="Border"
                      onChange={handleChange}
                    />
                  </label>
                </label>
              </p>
            </Col>
          </div>

          <div className="col-md-12 mb-2" id="Container-1">
            <Col>
              <label className="label-2">
                <p>
                  {" "}
                  Si está obligado a tributar en otro país{" "}
                  <label className="color">diferente a Colombia,</label> indique
                  cuál (es):
                </p>
              </label>

              <div className="col-md-12">
                <Col>
                  <label className="label">
                    1.{" "}
                    <input
                      type="text"
                      name="Patri_1"
                      className="Border"
                      onChange={handleChange}
                    />
                  </label>
                  <label className="label">
                    <p className="Texto-3">N°. Id. Tributario</p>
                    1.{" "}
                    <input
                      type="number"
                      name="NoidTrib_1"
                      className="Border"
                      onChange={handleChange}
                    />
                  </label>
                </Col>
                <Col>
                  <label className="label">
                    2.{" "}
                    <input
                      type="text"
                      name="Patri_2"
                      className="Border"
                      onChange={handleChange}
                    />{" "}
                  </label>
                  <label className="label">
                    2.{" "}
                    <input
                      type="number"
                      name="NoidTrib_2"
                      className="Border"
                      onChange={handleChange}
                    />
                  </label>
                </Col>
              </div>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <h5 className="Titulo">
                Declaración de origen de bienes y/o fondos
              </h5>
              <label className="label-2">
                {" "}
                <p>
                  {" "}
                  Declaro que: <label className="color">i)</label> El origen de
                  mis bienes proviene de:{" "}
                </p>
                <select
                  className="Select-One"
                  name="Idtripro_bi"
                  onChange={handleChange}
                  required
                >
                  <option >Seleccione una opcion</option>
                  <option value="1">Compraventa</option>
                  <option value="2">Aporte de socios</option>
                  <option value="3">Utilidades</option>
                </select>
                <label className="label-12">
                  Otra, ¿cuál?{" "}
                  <input
                    type="text"
                    name="Otro_fue"
                    className="Border"
                    onChange={handleChange}
                  />
                </label>
              </label>

              <label className="label-2">
                <p>
                  <label className="color">ii)</label> Los recursos que entregue
                  provienen de la siguiente fuente:
                </p>
                <select
                  className="Select-One"
                  name="Idfue_rec"
                  onChange={handleChange}
                  required
                >
                  <option >Seleccione una opcion</option>
                  <option value="1">Capitalización por parte de socios</option>
                  <option value="2">Desarrollo del objeto social</option>
                  <option value="3">Utilidades del negocio</option>
                </select>
                <label className="label-12">
                  Otra, ¿cuál?{" "}
                  <input
                    type="text"
                    name="Otro_pro"
                    className="Border"
                    onChange={handleChange}
                  />
                </label>
              </label>
            </Col>
          </div>

          <div className="col-md-6" id="Container-1">
            <Col>
              <h5 className="Titulo-6">El país origen</h5>
              <label className="label-2">
                <input
                  type="text"
                  name="Pais_or"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>
          <div className="col-md-6" id="Container-1">
            <Col>
              <h5 className="Titulo-6">
                La ciudad origen de bienes y/o fondos
              </h5>
              <label className="label-2">
                <input
                  type="text"
                  name="Ciu_or"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>
          <div className="col-md-12" id="Container-1">
            <Col>
              <p className="Texto-3">
                <label className="color">iii)</label> No permitiré el depósito
                de recursos a mis cuentas o a las cuentas de mi representada,
                por parte de terceros producto de actividades ilícitas;{" "}
                <label className="color">iv)</label> No realizaré transferencias
                de recursos a cuentas de personas relacionadas con actividades
                ilícitas; <label className="color">v)</label> En la constitución
                de Negocios Fiduciarios declaro que los bienes entregados se
                detallaran en el contrato o documentos de apertura del producto.
                Todo lo anterior de acuerdo con el marco legal aplicable
                nacional e internacional.
              </p>
            </Col>
          </div>
          <div className="col-md-12" id="Container-1">
            <Col>
              <h5 className="Titulo">Declaración naturaleza de los recursos</h5>
              <p className="Texto-3">
                <label className="color">vi)</label> En las cuentas de las
                cuales sea titular mi representada, se manejan recursos públicos
                de naturaleza inembargable:
                <label className="padding">
                  <input
                    type="radio"
                    name="Nat_recu"
                    value="Si"
                    className="cursor-pointer"
                    onChange={handleChange}
                    required
                  />{" "}
                  Sí{" "}
                  <input
                    type="radio"
                    name="Nat_recu"
                    value="No"
                    className="cursor-pointer"
                    onChange={handleChange}
                    required
                  />{" "}
                  No
                </label>
                <br />
                *En caso de responder afirmativamente favor diligenciar el anexo
                de Declaración Naturaleza de los Recursos. Todo lo anterior de
                acuerdo con el marco legal aplicable nacional e internacional.
              </p>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <h5 className="Titulo">
                Información de operaciones internacionales
              </h5>
              <label className="label-18">
                ¿Realiza operaciones en moneda extranjera?
                <label className="label padding">
                  {" "}
                  <input
                    type="radio"
                    value="Si"
                    name="Op_ext"
                    className="cursor-pointer"
                    onChange={handleChange}
                    required
                  />{" "}
                  Sí{" "}
                  <input
                    type="radio"
                    value="No"
                    name="Op_ext"
                    className="cursor-pointer"
                    onChange={handleChange}
                    required
                  />{" "}
                  No
                </label>
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                ¿Cuál(es) de las siguientes operaciones realiza en moneda
                extranjera?
              </label>
              <label className="label-2">
                <select
                  className="Select-One"
                  name="Idtiop_m"
                  onChange={handleChange}
                  required
                >
                  <option >Seleccione una opcion</option>
                  <option value="1">Exportador e importador</option>
                  <option value="2">Pago de servicios</option>
                  <option value="3">Préstamos</option>
                  <option value="4">Exportador</option>
                  <option value="6">Importador</option>
                  <option value="5">Inversiones</option>
                  <option value="7">Envío/Recepción de giros y remesas</option>
                </select>
                <Col className="">
                  <label className="label-12">
                    Otra, ¿cuál?{" "}
                    <input
                      type="text"
                      name="Otro_mo"
                      className="Border"
                      onChange={handleChange}
                    />
                  </label>
                </Col>
              </label>
            </Col>
          </div>

          <div className="col-md-12" id="Container-1">
            <Col>
              <h5 className="Titulo-6">
                Descripción de los productos financieros en moneda extranjera
              </h5>
              <label className="label-2">
                Nombre de la entidad
                <input
                  type="text"
                  name="Nom_ent"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>
          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">
                Tipo de producto
                <select
                  className="Select-One"
                  name="Idtipro_m"
                  onChange={handleChange}
                  required
                >
                  <option >Seleccione una opcion</option>
                  <option value="1">Cuenta de ahorro</option>
                  <option value="2">Cuenta corriente</option>
                </select>
                <Col>
                  <label className="label-12">
                    Otra, ¿cuál?{" "}
                    <input
                      type="text"
                      name="Otro_mo2"
                      className="Border"
                      onChange={handleChange}
                    />
                  </label>
                </Col>
              </label>
            </Col>
          </div>

          <div className="col-md-6">
            <Col className="column">
              <label className="center">
                N° de Producto{" "}
                <input
                  type="number"
                  name="No_pro"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>

            <Col className="Col-4">
              <label className="center">
                Monto mensual promedio ${" "}
                <input
                  type="number"
                  name="Mo_pro"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>
          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Moneda
                <input
                  type="text"
                  name="Moneda"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                Ciudad
                <input
                  type="text"
                  name="Ciu_ent"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-4" id="Container-1">
            <Col>
              <label className="label-2">
                país
                <input
                  type="text"
                  name="Pa_ent"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          {/*       <div className="col-md-12" id="Container-1">
            <Col>
              <label className="label-2">
                Nombre de la entidad
                <input
                  type="text"
                  name="Nom_ent"
                  maxLength={60}
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>
          <div className="col-md-6" id="Container-1">
            <Col>
              <label className="label-2">
                Tipo de producto
                <select
                  className="Select-One"
                  name="Idtipro_m"
                  onChange={handleChange}
                  required
                >
                  <option value="1">Cuenta de ahorro</option>
                  <option value="2">Cuenta corriente</option>
                </select>
                <Col className="">
                  <label className="label-12">
                    Otra, ¿cuál?{" "}
                    <input
                      type="text"
                      name="Otro_mo2"
                      maxLength={300}
                      className="Border"
                      onChange={handleChange}
                    />
                  </label>
                </Col>
              </label>
            </Col>
          </div>

          <div className="col-md-6">
            <Col className="column">
              <label className="center ">
                N° de Producto{" "}
                <input
                  type="number"
                  name="No_pro"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>

            <Col className="Col-4">
              <label className="center">
                Monto mensual promedio ${" "}
                <input
                  type="number"
                  name="Mo_pro"
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>
          <div className="col-md-4 mb-2" id="Container-1">
            <Col>
              <label className="label-2">
                Moneda
                <input
                  type="text"
                  name="Moneda"
                  maxLength={60}
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-4 mb-2" id="Container-1">
            <Col>
              <label className="label-2">
                Ciudad
                <input
                  type="text"
                  name="Ciu_ent"
                  maxLength={30}
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div>

          <div className="col-md-4 mb-2" id="Container-1">
            <Col>
              <label className="label-2">
                país
                <input
                  type="text"
                  name="Pa_ent"
                  maxLength={30}
                  className="Border"
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </div> */}
          <div className="col-md-12" id="Container-1">
            <Col>
              <h5 className="Titulo">Autorizaciones y declaraciones</h5>
              <p className="Texto-3">
                * LAS ENTIDADES: entiéndase como BANCOLOMBIA S.A. y cada una de
                las entidades que pertenezcan o llegaren a pertenecer a su Grupo
                Empresarial, a sus filiales y/o subsidiarias en virtud de la
                presente Solicitud Única de Grupo; y a las entidades en las
                cuales éstas, directa o indirectamente tengan participación
                accionaria o sean asociados, domiciliadas en Colombia y/o en el
                exterior.
              </p>
            </Col>
          </div>
          <div className="col-md-12" id="Container-1">
            <Col>
              <h5 className="Titulo-6">Tratamiento de datos personales</h5>
              <p className="Texto-3">
                Autorizo en forma permanente a LAS ENTIDADES, o a quienes
                representen sus derechos u ostenten en el futuro la calidad de
                acreedor, cesionario, o cualquier calidad frente a mi o frente a
                la persona que represento, como titular de la información, en
                adelante LAS ENTIDADES y en virtud de la Solicitud Única de
                Grupo, para que realicen los tratamientos que se indican a
                continuación, por considerarse necesarios e inherentes para el
                cumplimiento de la ley, el funcionamiento de la operación
                financiera, el ofrecimiento y administración de productos y/o
                servicios, entre otros:{" "}
                <p className="color">
                  I. Autorizaciones necesarias para el desarrollo de la
                  actividad de LAS ENTIDADES. LAS ENTIDADES están autorizadas
                  para que:{" "}
                </p>{" "}
                <label className="color">(i)</label> soliciten, almacenen,
                consulten, compartan, informen, reporten, rectifiquen, procesen,
                modifiquen, actualicen, aclaren, retiren o divulguen, ante
                operadores de información, riesgo y de seguridad social y
                parafiscales, o ante cualquier otra entidad que maneje o
                administre bases de datos en Colombia y en el exterior, todo lo
                referente a mi información financiera, comercial y crediticia y
                aquella relacionada con la liquidación o pago de aportes al
                sistema de seguridad social y parafiscales (presente, pasada y
                futura) o de mi representada, incluyendo mis datos biométricos o
                de mi representada, y aquella relacionada con los derechos y
                obligaciones originados en virtud de cualquier contrato
                celebrado u operación que haya llegado o llegare a celebrar o
                realizar yo o la persona que represento, con cualquiera de LAS
                ENTIDADES. <label className="color">(ii)</label> accedan,
                recolecten, procesen, actualicen, conserven, compartan y
                destruyan mi información y documentación o la de la persona que
                represento, incluso cuando no se haya perfeccionado una relación
                contractual o después de finalizada la misma.{" "}
                <label className="color">(iii)</label> suministren, consulten,
                verifiquen y compartan la información financiera, comercial,
                crediticia mía o de mi representada y/o mis datos biométricos o
                de mi representada, con contratistas o cualquier otra entidad
                nacional o extranjera que preste servicios de verificación o
                análisis de administración de riesgo; y actualicen mi
                información o la de mi representada, de acuerdo con el análisis
                realizado. <label className="color">(iv)</label> compilen y
                remitan a las autoridades competentes, incluyendo las fiscales y
                los reguladores financieros, nacionales o extranjeros, la
                información relacionada con la titularidad de los productos y
                servicios contratados o que llegare a contratar yo y/o mi
                representada; datos de contacto, movimientos, saldos, y toda
                aquella información mía y/o de mi representada que reposare en
                la entidad que sea solicitada por las normas nacionales o
                extranjeras. <label className="color">(v)</label> consulten
                multas y sanciones a mi cargo o a cargo de mi representada ante
                las diferentes autoridades administrativas y judiciales.{" "}
                <label className="color">(vi)</label> consulten, soliciten o
                verifiquen la información sobre mis activos, bienes o derechos
                míos o de mi representada en entidades públicas o privadas, o
                que conozcan personas naturales o jurídicas, o que se encuentren
                en buscadores públicos, redes sociales o publicaciones físicas o
                electrónicas, bien fuere en Colombia o en el exterior.{" "}
                <label className="color">(vii)</label> Compartan, transmitan,
                transfieran y divulguen información y documentación mía o de mi
                representada aquí suministrada y cualquier información necesaria
                y relacionada con el presente trámite de financiación con las
                siguientes personas: la constructora del inmueble a financiar,
                la inmobiliaria, la fiduciaria que actúe como vocera y
                administradora del Fideicomiso enajenante del inmueble, los
                abogados externos a cargo del estudio de títulos del inmueble y
                la entidad titularizadora en caso de titularización de mi
                crédito o el de mi representada;{" "}
                <label className="color">(viii)</label> Consulten, soliciten o
                verifiquen mi información de ubicación o contacto o de mi
                representada en entidades públicas o privadas.
                <p className="color">
                  II. Autorizaciones por la naturaleza del producto y/o
                  servicio. LAS ENTIDADES están autorizadas para que:{" "}
                </p>{" "}
                a nivel nacional e internacional compartan, transmitan,
                transfieran y divulguen mi información y documentación y/o la de
                mi representada, siempre que por la naturaleza del producto o
                servicio adquirido se requiera este tratamiento, con las
                siguientes personas: <label className="color">(a)</label>{" "}
                quienes ofrezcan, presten o suministren bienes y servicios a LAS
                ENTIDADES para la adecuada prestación de sus productos o
                servicios; o a quienes en alianza ofrezcan productos o servicios
                que conllevan beneficios para mí y/o para mi representada en
                virtud de productos que tengo con LAS ENTIDADES; o a las
                remesadoras con las cuales LAS ENTIDADES han celebrado convenios
                para la gestión y entrega de recursos enviados del exterior;{" "}
                <label className="color">(b)</label> entidades con las cuales
                tengan celebrados o celebren a futuro contratos de uso de red;{" "}
                <label className="color">(c)</label> la(s) aseguradora(s) con
                la(s) cual(es) LAS ENTIDADES tengan contratadas pólizas o con
                las cuales yo y/o mi representada haya decidido contratarlas,
                los intermediarios de seguros o reaseguros;{" "}
                <label className="color">(d)</label> el comercializador o
                proveedor de los bienes o servicios financiados por LAS
                ENTIDADES; <label className="color">(e)</label> los terceros
                contratados por LAS ENTIDADES para la cobranza y/o que realizan
                investigación de bienes y derechos tanto míos como de mi
                representada; <label className="color">(f)</label> las entidades
                que realizan pagos de subsidios o beneficios a mi favor y/o de
                mi representada; <label className="color">(g)</label> los
                terceros contratados por LAS ENTIDADES o personas que en virtud
                de cualquier relación contractual con dichos terceros, llevan a
                cabo avalúos; <label className="color">(h)</label> las entidades
                operadoras de sistemas de pago de alto y bajo valor y demás
                entidades nacionales o internacionales que participan en dichos
                sistemas; <label className="color">(i)</label> las entidades de
                corresponsalía en el exterior y/o bancos corresponsales en
                virtud de las operaciones realizadas a través de, o con estas
                entidades; <label className="color">(j)</label> las personas que
                estén interesadas en la adquisición de cartera de LAS ENTIDADES
                o que la adquieran a cualquier título;{" "}
                <label className="color">(k)</label> las bolsas de valores,
                administradores de sistemas de negociación y registro, a los
                proveedores de precios, a los organismos de autorregulación, los
                depósitos de valores, entidades que custodian valores y demás
                proveedores de infraestructura del mercado de valores, para que
                recopilen, administren, intercambien información entre ellos y
                la pongan en circulación en el mercado de valores;{" "}
                <label className="color">(l)</label> las entidades de
                redescuento en virtud de las operaciones realizadas con las
                mismas; <label className="color">(m)</label> a quienes son
                contratados para la realización de actividades de educación
                financiera; <label className="color">(n)</label> la entidad
                administradora del programa de lealtad de LAS ENTIDADES, para
                que me contacten o contacten a mi representada para ofrecer,
                vincular, promocionar, gestionar dicho programa, y los puntos y
                beneficios asociados a éste.{" "}
                <p className="color">
                  III. Autorizaciones para fines comerciales, el ofrecimiento y
                  administración de productos y/o servicios. LAS ENTIDADES están
                  autorizadas para que:{" "}
                </p>{" "}
                <label className="color"> i) </label> Me contacten a mí o a mi
                representada vía telefónica, mensajería instantánea directamente
                o a través de sus proveedores, me envíen mensajes por cualquier
                medio, así como correos electrónicos y redes sociales;{" "}
                <label className="color"> ii) </label> Compartan mi información
                o la de mi representada con proveedores o aliados;{" "}
                <label className="color"> iii) </label> Consulten, soliciten o
                verifiquen mi información de ubicación o contacto o la de mi
                representada en entidades públicas o privadas, en Colombia o en
                el exterior. Los anteriores tratamientos, además de considerar
                las finalidades antes señaladas, también consideran las
                siguientes: para que LAS ENTIDADES:{" "}
                <label className="color">(a)</label> Conozcan mi comportamiento
                financiero, comercial y crediticio, y todo lo relacionado con la
                liquidación o pago de aportes al sistema de seguridad social y
                parafiscales, y el cumplimiento de mis obligaciones legales o de
                mi representada; <label className="color">(b) </label> Realicen
                todas las gestiones necesarias tendientes a confirmar y
                actualizar la información mía o de mi representada;{" "}
                <label className="color">(c) </label> Validen y verifiquen mi
                identidad o la de mi representada para el ofrecimiento y
                administración de productos y servicios, así mismo para que se
                compartan la información; <label className="color"> (d) </label>{" "}
                Establezcan, mantengan, terminen una relación contractual y
                actualicen mi información o la de mi representada;{" "}
                <label className="color"> (e) </label> Ofrezcan y presten sus
                productos o servicios a través de cualquier medio o canal para
                mi beneficio y el de mi representada y de acuerdo con el perfil
                de cada uno; <label className="color">(f)</label> Realicen una
                adecuada prestación y administración de los servicios
                financieros, incluyendo la gestión de cobranza;{" "}
                <label className="color">(g)</label> Suministren información
                comercial, legal, de productos, de seguridad, de servicio o de
                cualquier otra índole; <label className="color">(h)</label>{" "}
                Conozcan mi ubicación y datos de contacto o los de mi
                representada para efectos de notificaciones con fines de
                seguridad y ofrecimiento de beneficios y ofertas comerciales;{" "}
                <label className="color">(i)</label> Efectúen análisis e
                investigaciones comerciales, estadísticas, de riesgos, de
                mercado, interbancaria y financiera incluyendo contactarme o
                contactar a mi representada para estos fines. <br />
                <label className="color"> Revocatorias. </label> Sin perjuicio
                de las autorizaciones que he otorgado a LAS ENTIDADES para el
                tratamiento de datos personales, declaro que conozco el derecho
                que me asiste para revocar en los términos que prevé la ley,
                cualquiera de las siguientes autorizaciones:{" "}
                <label className="color">(i)</label> envío de mensajes de texto
                para ofertas comerciales; <label className="color">(ii)</label>{" "}
                envío de correos electrónicos para ofertas comerciales;{" "}
                <label className="color">(iii)</label> oferta comercial por
                televentas de productos que no poseo en LAS ENTIDADES; y{" "}
                <label className="color">(iv)</label> compartir información con
                terceros aliados para que estos ofrezcan sus productos, a través
                de los canales de LAS ENTIDADES.
              </p>
            </Col>
          </div>
          <div className="col-md-12 mb-2" id="Container-1">
            <Col>
              <p className="Texto-3">
                <label className="color"> Antilavado y anticorrupción. </label>{" "}
                Nos obligamos con LAS ENTIDADES a implementar las medidas
                tendientes a evitar que sus operaciones puedan ser utilizadas
                como instrumentos para el ocultamiento, manejo, inversión o
                aprovechamiento en cualquier forma de dinero u otros bienes
                provenientes de actividades ilícitas o para dar apariencia de
                legalidad a estas actividades. En tal sentido, declaro (amos)
                conocer y aceptar (amos) que LAS ENTIDADES podrán dar por
                terminado de manera unilateral e inmediata la relación comercial
                existente, sin que haya lugar al pago de indemnización alguna
                por parte de LAS ENTIDADES cuando, la sociedad, sus asociados
                directos e indirectos con una participación mayor o igual al 5%
                en el capital social, o sus directivos o agentes en condición de
                tales, en cualquier tiempo hayan sido o llegaren a ser:{" "}
                <label className="color"> i) </label> condenado(s) por parte de
                las autoridades competentes por el delito de lavado de activos,
                los delitos fuente de éste, incluidos los delitos contra la
                administración pública o el delito de financiación del
                terrorismo o administración de recursos relacionados con
                actividades terroristas; <label className="color">ii) </label>{" "}
                sancionado(s) administrativamente por violaciones a cualquier
                norma anticorrupción; <label className="color"> iii) </label>{" "}
                incluido(s) en listas administradas por cualquier autoridad
                nacional o extranjera para el control de lavado de activos y/o
                financiación del terrorismo y/o corrupción en cualquiera de sus
                modalidades; <label className="color">iv) </label> vinculado(s)
                a cualquier tipo de investigación, proceso judicial o
                administrativo, adelantado por las autoridades competentes del
                orden nacional o extranjero, por la presunta comisión de delitos
                o infracciones relacionadas con el lavado de activos, delitos
                fuente de lavado de activos, incluidos delitos contra la
                administración pública, y/o financiación del terrorismo o
                administración de recursos relacionados con actividades
                terroristas. Igualmente cuando llegare a incumplir la obligación
                de actualización de información establecida por la Entidad.{" "}
                <br />
                <label className="color">Información. </label> Declaramos que:{" "}
                <label className="color">i) </label> esta información es cierta,
                puede ser utilizada para el proceso de actualización y es
                verificable en cualquier momento y nos comprometemos a
                actualizarla o confirmarla al menos una vez al año o cada vez
                que un producto o servicio lo amerite. Igualmente nos obligamos
                a informarles cualquier cambio relacionado con los datos de
                contacto, residencia fiscal, domicilio y actividad comercial,
                dentro de los 20 días siguientes a la fecha en que se produjo el
                cambio. <label className="color"> ii) </label> para la
                actualización solo diligenciamos la información que ha cambiado
                en el último año, en consecuencia la información no diligenciada
                permanece vigente; <label className="color"> iii) </label>{" "}
                Conocemos que la presentación de esta solicitud no implica
                compromiso de LAS ENTIDADES para autorizar la vinculación y/
                actualización. <label className="color"> iv) </label> Aceptamos
                que cualquier inexactitud detectada, cancelará el proceso de
                vinculación y/o actualización solicitado;{" "}
                <label className="color"> v) </label> Autorizamos a LAS
                ENTIDADES la destrucción de este formulario, de los documentos
                soportes de la solicitud en el evento de que el proceso
                vinculación y/o actualización haya sido desfavorable. <br />
                <label className="color">
                  Producto, costos y tarifas.{" "}
                </label>{" "}
                Declaro que he conocido las características y condiciones de los
                productos o servicios para los cuales estoy solicitando la
                vinculación y/o actualización, las cuales podré consultar en las
                oficinas y en la página web de LAS ENTIDADES. <br />
                <label className="color"> Fogafin. </label> Declaro que me ha
                sido suministrada la información concerniente al seguro de
                depósitos del Fondo de Garantías de Instituciones Financieras
                FOGAFIN, y que la misma está a mi disposición en la página web
                de LAS ENTIDADES. <br />
                <label className="color">Débito automático. </label> Autorizo a
                LAS ENTIDADES o a quien represente sus derechos u ostente en el
                futuro la calidad de acreedor hasta la cancelación total de la
                obligación, para debitar de la cuenta designada y de cualquier
                depósito a mi nombre o de mi representada en LAS ENTIDADES, el
                valor total de las cuotas de amortización, cánones, seguros,
                comisiones y demás valores a mi cargo, de conformidad con las
                condiciones previamente acordadas.
                <br />
                <label className="color">Compensación. </label> Autorizo a LAS
                ENTIDADES o a quien represente sus derechos u ostente en el
                futuro la calidad de acreedor, en forma permanente e
                irrevocable, para compensar de cualquier depósito a mi nombre o
                de mi representada, aun cuando ello genere sobregiro, las
                tarifas, comisiones, cánones, cuota (s) de amortización a
                capital, intereses, impuestos, seguros, costos y gastos de
                cobranza judicial y extrajudicial y, demás obligaciones a mi
                cargo por cualquier producto o servicio prestado por LAS
                ENTIDADES.
                <br />
                <label className="color">
                  {" "}
                  Declaración de cambio, monetización.{" "}
                </label>{" "}
                Autorizo a Bancolombia S.A. a monetizar los giros recibidos a mi
                nombre desde el exterior en moneda extranjera que no
                correspondan a operaciones obligatoriamente canalizables y a
                suministrar al Banco de la República la información que yo
                provea a Bancolombia S.A. sobre los datos mínimos de las
                operaciones de cambio por servicios, transferencias y otros
                conceptos (Declaración de Cambio), por cada operación que sea
                monetizada y negociada directamente por Bancolombia S.A.;
                igualmente, lo autorizo para aplicar dichos recursos al pago de
                las cuotas, cánones y demás gastos asociados a todas las
                obligaciones que tenga con el Banco en general y, en especial, a
                mis obligaciones hipotecarias/leasing habitacional, con el
                mismo. Adicionalmente declaro que todos los giros recibidos y
                enviados desde y hacia el exterior corresponden a operaciones de
                cambio no obligatoriamente canalizables.
                <br />
                <label className="color">Correspondencia.</label> Autorizo que
                la correspondencia en general y los extractos me sean enviados a
                través de los medios virtuales, previamente habilitados e
                informados por LAS ENTIDADES. Declaramos conocer y aceptar que
                si deseamos recibirlos por otro medio, podemos solicitarlo a
                través de la sucursal virtual/actualización de datos, o a través
                de la sucursal telefónica.
                <br /> El Reporte Anual de Costos Totales lo deseo recibir
                <label className="padding">
                  Virtual{" "}
                  <input
                    type="radio"
                    value="1"
                    name="Idtien_re"
                    className="cursor-pointer"
                    onChange={handleChange}
                    required
                  />{" "}
                  Fisico{" "}
                  <input
                    type="radio"
                    value="2"
                    name="Idtien_re"
                    className="cursor-pointer"
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <label className="color"> Firma y huella. </label> Autorizo a
                LAS ENTIDADES a que la firma y huella, impuesta en este formato
                puedan ser utilizadas para verificaciones internas y
                cumplimiento a los trámites que por Ley se requiera.
              </p>
            </Col>
          </div>
          <div className="col-md-12 mb-2" id="Container-1">
            <Col>
              <h5 className="Titulo">Medidas de seguridad</h5>
              <p className="Texto-3">
                Declaro que: <label className="color"> i) </label> fui informado
                sobre las medidas y recomendaciones de seguridad que debo
                observar y cumplir al utilizar los diferentes instrumentos y
                canales que ofrecen LAS ENTIDADES para realizar transacciones,
                dentro de las que se encuentran las siguientes: el manejo de
                claves, activación y bloqueos; no aceptar la ayuda de extraños;
                utilizar el servicio de alertas y notificaciones; personalizar
                las transacciones; mantener actualizados mis datos; el manejo de
                la sucursal virtual digitando en todo caso la página web
                completa y no a través de enlaces; el manejo de la sucursal
                virtual a través del celular; mantener actualizado mi computador
                y mi móvil con herramientas de seguridad como antivirus,
                antispyware, firewall personal y del sistema operativo con el
                fin de protegernos de programas que sustraigan información;{" "}
                <label className="color">ii)</label> conozco y comprendo que
                estas medidas y recomendaciones no son las únicas existentes y
                por ello entiendo que puedo consultarlas y estudiarlas
                periódicamente y que las mismas están a mi disposición, entre
                otras, en la página web de LAS ENTIDADES, con el fin de estar
                siempre informado sobre las mismas y prevenir situaciones que
                puedan vulnerar la seguridad de las transacciones y afectarme a
                mí o a mi representada.
              </p>
            </Col>
          </div>
          <div className="col-md-12 mb-2" id="Container-1">
            <p className="Texto-3">
              Se firma en señal de conformidad, entendimiento y aceptación de la
              información aquí consagrada, entre las que se encuentran, las
              Autorizaciones y Declaraciones, en especial la Autorización para
              el Tratamiento de Datos Personales y el derecho a la Revocatoria
              que me asiste en los términos de ley.
            </p>
            <div id="Container-6">
              <label className="label">
                <input
                  className="Firma_solicitante"
                  type="text"
                  name="Firma"
                  onChange={handleChange}
                ></input>
                <p>Firma del Solicitante</p>
              </label>
            </div>
            <div id="Container-5">
              <Col>
                <label className="label">
                  <canvas id="rectangulo" width="140" height="188">
                    {" "}
                  </canvas>
                </label>
              </Col>
            </div>

            <div className="col-md-8" id="Container-2">
              <p className="label-21">
                {" "}
                * Solo diligenciar si actúa en calidad de:{" "}
              </p>
              <label className="label-22">
                <input
                  type="radio"
                  value="1"
                  name="Idti_soli"
                  className="cursor-pointer"
                  onChange={handleChange}
                  required
                />{" "}
                Representante{" "}
                <input
                  type="radio"
                  value="2"
                  name="Idti_soli"
                  className="cursor-pointer"
                  onChange={handleChange}
                  required
                />{" "}
                Apoderado
              </label>

              <div className="float-left">
                <label>
                  Nombre{" "}
                  <input
                    type="text"
                    name="Nom_solicit"
                    className="Border"
                    onChange={handleChange}
                    required
                  />
                </label>
                <div className="label-19">
                  <input
                    type="text"
                    name=""
                    className="Border"
                    onChange={handleChange}
                    required
                  />
                </div>

                <label className="label-20">
                  No. Identificación{" "}
                  <input
                    type="number"
                    name="No_solicit"
                    className="Border"
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="col-md-12" id="margin-bottom">
            <h5 className="Titulo">
              Para uso exclusivo de las Entidades del Grupo Empresarial
            </h5>
          </div>

          <div className="col-md-4" id="Container-7">
            <label className="Texto-5">
              Código vendedor
              <input
                type="number"
                name="Cod_vend"
                className="Border"
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="col-md-4" id="Container-7">
            <label className="Texto-5">
              Nombre
              <input
                type="text"
                name="Nom_vend"
                className="Border"
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="col-md-4" id="Container-7">
            <label className="Texto-5">
              Oficina
              <input
                type="text"
                name="Oficina"
                className="Border"
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="col-md-9" id="Container-1">
            <p className="Texto-3">
              <label className="Subtitulo"> Concepto Comercial:</label> En
              virtud de haber participado en el proceso de conocimiento del
              cliente, reconozco que soy responsable del completo
              diligenciamiento de la información que ha sido consignada de forma
              libre en el presente formato y con la finalidad que LAS ENTIDADES
              adelanten dicho proceso.
            </p>
            <div>
              <Col>
                <label className="Observaciones1">
                  <p> Observaciones</p>
                  <input
                    className="Observaciones"
                    type="text"
                    name="Obser"
                    onChange={handleChange}
                  />
                </label>
              </Col>
            </div>
          </div>

          <div className="col-md-3" id="Container-1">
            <label>
              <Row>
                <input
                  className="Row"
                  type="text"
                  name="Firma_vend"
                  onChange={handleChange}
                ></input>
                <p>Firma</p>
              </Row>
            </label>
          </div>
          <div className="col-md-12">
            <Button
              type="submit"
              className="BOTON"
              variant="primary"
              onClick={() => peticionPost()}
            >
              Guardar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonaJuridica;
