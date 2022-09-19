import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


export const useRegFormPn = () => {
  let Navigate = useNavigate();

  const baseUrl = "http://localhost:8080/Banca/bd_crud/principal.php";

  const [data, setData] = useState([]);
  const notifyNatural = () => toast.success("El formulario se ha enviado Exitosamente ✔");


  const peticionPost = async (dataForm) => {
    var f = new FormData();
    f.append("No_ide", dataForm.No_ide);
    f.append("Idti_sol", dataForm.Idti_sol);
    f.append("Idti_solicit", dataForm.Idti_solicit);
    f.append("Fec_dil", dataForm.Fec_dil);
    f.append("Pri_nom", dataForm.Pri_nom);
    f.append("No_cuenta", dataForm.No_cuenta);
    f.append("Idti_cue", dataForm.Idti_cue);
    f.append("Seg_nom", dataForm.Seg_nom);
    f.append("Pri_ape", dataForm.Pri_ape);
    f.append("Seg_ape", dataForm.Seg_ape);
    f.append("Idti_doc", dataForm.Idti_doc);
    f.append("Lug_exp", dataForm.Lug_exp);
    f.append("Fec_exp", dataForm.Fec_exp);
    f.append("Fec_nac", dataForm.Fec_nac);
    f.append("Ciu_nac", dataForm.Ciu_nac);
    f.append("Id_gen", dataForm.Id_gen);
    f.append("Idest_ci", dataForm.Idest_ci);
    f.append("Id_nac", dataForm.Id_nac);
    f.append("Otr_nac", dataForm.Otr_nac);
    f.append("Dir_re", dataForm.Dir_re);
    f.append("Blo_to", dataForm.Blo_to);
    f.append("Ap_ca", dataForm.Ap_ca);
    f.append("Barrio", dataForm.Barrio);
    f.append("Ciu_mu", dataForm.Ciu_mu);
    f.append("Depart", dataForm.Depart);
    f.append("Pais", dataForm.Pais);
    f.append("Telef", dataForm.Telef);
    f.append("Celular", dataForm.Celular);
    f.append("Corr_ele", dataForm.Corr_ele);
    f.append("Profe", dataForm.Profe);
    f.append("Idocu_ofii", dataForm.Idocu_ofii);
    f.append("Det_act", dataForm.Det_act);
    f.append("Cod_ciuu", dataForm.Cod_ciuu);
    f.append("No_emp", dataForm.No_emp);
    f.append("Nom_emp", dataForm.Nom_emp);
    f.append("Dir_emp", dataForm.Dir_emp);
    f.append("Barr_lab", dataForm.Barr_lab);
    f.append("Ciu_lab", dataForm.Ciu_lab);
    f.append("Dep_lab", dataForm.Dep_lab);
    f.append("Pais_lab", dataForm.Pais_lab);
    f.append("Tel_lab", dataForm.Tel_lab);
    f.append("Ext", dataForm.Ext);
    f.append("Cel_lab", dataForm.Cel_lab);
    f.append("Corr_lab", dataForm.Corr_lab);
    f.append("Ing_men", dataForm.Ing_men);
    f.append("Otr_ing", dataForm.Otr_ing);
    f.append("Det_otr", dataForm.Det_otr);
    f.append("To_act", dataForm.To_act);
    f.append("To_pa", dataForm.To_pa);
    f.append("To_egr", dataForm.To_egr);
    f.append("Vent_a", dataForm.Vent_a);
    f.append("Fe_ci", dataForm.Fe_ci);
    f.append("Dec_rent", dataForm.Dec_rent);
    f.append("Age_ret", dataForm.Age_ret);
    f.append("Idtireg_iva", dataForm.Idtireg_iva);
    f.append("Ob_tri", dataForm.Ob_tri);
    f.append("Notri_est", dataForm.Notri_est);
    f.append("Pais_1", dataForm.Pais_1);
    f.append("Pais_2", dataForm.Pais_2);
    f.append("No_tri1", dataForm.No_tri1);
    f.append("No_tri2", dataForm.No_tri2);
    f.append("Prov_bie", dataForm.Prov_bie);
    f.append("Pais_bi", dataForm.Pais_bi);
    f.append("Ciu_bie", dataForm.Ciu_bie);
    f.append("Op_ext", dataForm.Op_ext);
    f.append("Idtiop_m", dataForm.Idtiop_m);
    f.append("Otro_mo", dataForm.Otro_mo);
    f.append("Nom_ent", dataForm.Nom_ent);
    f.append("Idtipro_m", dataForm.Idtipro_m);
    f.append("Otro_mo2", dataForm.Otro_mo2);
    f.append("No_pro", dataForm.No_pro);
    f.append("Mo_pro", dataForm.Mo_pro);
    f.append("Moneda", dataForm.Moneda);
    f.append("Ciu_ent", dataForm.Ciu_ent);
    f.append("Pa_ent", dataForm.Pa_ent);
    f.append("Idtien_re", dataForm.Idtien_re);
    f.append("Idti_soli", dataForm.Idti_soli);
    f.append("No_solicit", dataForm.No_solicit);
    f.append("Nom_solicit", dataForm.Nom_solicit);
    f.append("Firma", dataForm.Firma);
    f.append("Cod_vend", dataForm.Cod_vend);
    f.append("Nom_vend", dataForm.Nom_vend);
    f.append("Oficina", dataForm.Oficina);
    f.append("Obser", dataForm.Obser);
    f.append("Firma_vend", dataForm.Firma_vend);
    f.append("METHOD", "FORMN");
    await axios.post(baseUrl, f).then((response) => {
      setData(data.concat(response.data));
      notifyNatural()
      Navigate(-1);
    })
    .catch(error => {
       console.log(error);
    })
  };

  const ActionsFormPn = {
    peticionPost,
  };

  return { ActionsFormPn };
};