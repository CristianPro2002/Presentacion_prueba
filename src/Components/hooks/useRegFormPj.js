import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Principal } from "../../helpers/url";

export const useRegFormPj = () => {
  let Navigate = useNavigate();
  const [data, setData] = useState([]);

  const notifyJuridica = () =>
    toast.success("El formulario se ha enviado Exitosamente ✔");

  const peticionPost = async (dataForm, EstadoCuentas) => {
    var f = new FormData();
    f.append("Fe_dil", dataForm.Fe_dil);
    f.append("Idti_sol", dataForm.Idti_sol);
    f.append("tidoc_ent", dataForm.tidoc_ent);
    f.append("Nit", dataForm.Nit);
    f.append("No_cuenta", dataForm.No_cuenta);
    f.append("Idti_cue", dataForm.Idti_cue);
    f.append("Idti_doc", dataForm.Idti_doc);
    f.append("Idti_doc2", dataForm.Idti_doc2);
    f.append("Pri_no", dataForm.Pri_no);
    f.append("Seg_no", dataForm.Seg_no);
    f.append("Pri_ape", dataForm.Pri_ape);
    f.append("Seg_ape", dataForm.Seg_ape);
    f.append("Pri_ape2", dataForm.Pri_ape2);
    f.append("Seg_ape2", dataForm.Seg_ape2);
    f.append("Cargo", dataForm.Cargo);
    f.append("Cargo2", dataForm.Cargo2);
    f.append("Dir_lab", dataForm.Dir_lab);
    f.append("Dir_lab2", dataForm.Dir_lab2);
    f.append("Barrio", dataForm.Barrio);
    f.append("Barrio2", dataForm.Barrio2);
    f.append("Barrio3", dataForm.Barrio3);
    f.append("Ciu_mu", dataForm.Ciu_mu);
    f.append("Ciu_mu2", dataForm.Ciu_mu2);
    f.append("Ciu_mu3", dataForm.Ciu_mu3);
    f.append("Depart", dataForm.Depart);
    f.append("Depart2", dataForm.Depart2);
    f.append("Depart3", dataForm.Depart3);
    f.append("Pais", dataForm.Pais);
    f.append("Pais2", dataForm.Pais2);
    f.append("Pais3", dataForm.Pais3);
    f.append("Tel_lab", dataForm.Tel_lab);
    f.append("Tel_lab2", dataForm.Tel_lab2);
    f.append("Ext", dataForm.Ext);
    f.append("Ext2", dataForm.Ext2);
    f.append("Ext3", dataForm.Ext3);
    f.append("Celular", dataForm.Celular);
    f.append("Celular2", dataForm.Celular2);
    f.append("Corr_lab", dataForm.Corr_lab);
    f.append("Corr_lab2", dataForm.Corr_lab2);
    f.append("Fidei", dataForm.Fidei);
    f.append("No_fide", dataForm.No_fide);
    f.append("Nom_ra", dataForm.Nom_ra);
    f.append("Nom_cor", dataForm.Nom_cor);
    f.append("Fe_cons", dataForm.Fe_cons);
    f.append("Ciu_cons", dataForm.Ciu_cons);
    f.append("Pai_cons", dataForm.Pai_cons);
    f.append("Dir_se", dataForm.Dir_se);
    f.append("Telefono", dataForm.Telefono);
    f.append("Corr_se", dataForm.Corr_se);
    f.append("No_doc", dataForm.No_doc);
    f.append("Pre_1", dataForm.Pre_1);
    f.append("Pre_2", dataForm.Pre_2);
    f.append("No_docu", dataForm.No_docu);
    f.append("Pri_nom", dataForm.Pri_nom);
    f.append("Seg_nom", dataForm.Seg_nom);
    f.append("Idti_na", dataForm.Idti_na);
    f.append("Co_ciuu", dataForm.Co_ciuu);
    f.append("Det_act", dataForm.Det_act);
    f.append("No_emp", dataForm.No_emp);
    f.append("Idti_soci", dataForm.Idti_soci);
    f.append("Otro_com", dataForm.Otro_com);
    f.append("Idti_en", dataForm.Idti_en);
    f.append("Otro_ent", dataForm.Otro_ent);
    f.append("Idti_es", dataForm.Idti_es);
    f.append("Otro_est", dataForm.Otro_est);
    f.append("Idti_des", dataForm.Idti_des);
    f.append("Ing_op", dataForm.Ing_op);
    f.append("Ino_op", dataForm.Ino_op);
    f.append("Detno", dataForm.Detno);
    f.append("vent_an", dataForm.vent_an);
    f.append("Fe_ci", dataForm.Fe_ci);
    f.append("Egre_me", dataForm.Egre_me);
    f.append("Util_ne", dataForm.Util_ne);
    f.append("Tot_act", dataForm.Tot_act);
    f.append("Tot_pas", dataForm.Tot_pas);
    f.append("Tot_pat", dataForm.Tot_pat);
    f.append("Idti_cont", dataForm.Idti_cont);
    f.append("Idcla_cont", dataForm.Idcla_cont);
    f.append("Res_iva", dataForm.Res_iva);
    f.append("Aut_ing", dataForm.Aut_ing);
    f.append("Int_merc", dataForm.Int_merc);
    f.append("Vig_sup", dataForm.Vig_sup);
    f.append("Obli_est", dataForm.Obli_est);
    f.append("No_id_tr", dataForm.No_id_tr);
    f.append("Patri_1", dataForm.Patri_1);
    f.append("Patri_2", dataForm.Patri_2);
    f.append("NoidTrib_1", dataForm.NoidTrib_1);
    f.append("NoidTrib_2", dataForm.NoidTrib_2);
    f.append("Idtripro_bi", dataForm.Idtripro_bi);
    f.append("Otro_fue", dataForm.Otro_fue);
    f.append("Idfue_rec", dataForm.Idfue_rec);
    f.append("Otro_pro", dataForm.Otro_pro);
    f.append("Pais_or", dataForm.Pais_or);
    f.append("Ciu_or", dataForm.Ciu_or);
    f.append("Nat_recu", dataForm.Nat_recu);
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
    f.append("estadoCuenta", EstadoCuentas);
    f.append("METHOD", "FORMJ");
    await axios
      .post(Principal, f)
      .then((response) => {
        setData(data.concat(response.data));
        notifyJuridica();
        Navigate(-1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ActionsFormPj = {
    peticionPost,
  };

  return { ActionsFormPj };
};
