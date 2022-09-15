<?php

include './BD.php';

header('Access-Control-Allow-Origin: *');

$conexion = mysqli_connect('localhost', 'root', '', 'banca4.0');

if($_SERVER['REQUEST_METHOD']=='GET'){
    if(isset($_GET['Id_usu'])){
        $query="select * from reg_usu where Id_usu=".$_GET['Id_usu'];
        $resultado=metodoGet($query);
         echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
     }else{
        $query="select DISTINCT * from entidad 
        inner join ti_sol on entidad.Idti_sol = ti_sol.Idti_sol
        inner join repr_le on entidad.No_doc = repr_le.No_doc 
        inner join cont_ent on entidad.No_docu = cont_ent.No_docu 
        inner join ti_nat on entidad.Idti_na = ti_nat.Idti_nat 
        inner join ti_soc on entidad.Idti_soci = ti_soc.Idti_soc 
        inner join ti_ent on entidad.Idti_en = ti_ent.Idti_ent 
        inner join ti_est on entidad.Idti_es = ti_est.Idti_est 
        inner join ti_desc on entidad.Idti_des = ti_desc.Idti_desc 
        inner join ti_contr on entidad.Idti_cont = ti_contr.Idti_contr 
        inner join cla_contr on entidad.Idcla_cont = cla_contr.Idcla_contr 
        inner join tipro_bie on entidad.Idtripro_bi= tipro_bie.Idtripro_bie 
        inner join fue_recu on entidad.Idfue_rec = fue_recu.Idfue_recu 
        inner join tiop_mo on entidad.Idtiop_m = tiop_mo.Idtiop_mo 
        inner join tipro_mo on entidad.Idtipro_m = tipro_mo.Idtipro_mo 
        inner join tien_re on entidad.Idtien_re = tien_re.Idtien_re 
        inner join solicitante on entidad.No_solicit = solicitante.No_solicit 
        inner join vendedor on entidad.Cod_vend = vendedor.Cod_vend where Nit=11111111";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetchAll());     
     }

     exit();
}

?>