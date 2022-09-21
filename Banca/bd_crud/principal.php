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
         $query="select * from reg_usu, tip_rol where tip_rol.Idti_rol=reg_usu.Idti_rol";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetchAll()); 
       /* if($resultado==true){
            $query2="select * from entidad";
            $resultado2 = mysqli_query($conexion, $query2);
            $row = mysqli_fetch_assoc($resultado2);
            echo json_encode($row);
        }*/
        
     }
    header("HTTP/1.1 200 OK");
     exit();
}


// consulta cajero

if($_POST['METHOD']=='CONSULTACAJERO'){
    unset($_POST['METHOD']);
    $query="select * from cuenta_j inner join entidad on cuenta_j.Nit = entidad.Nit where No_cuenta=".$_POST['No_cuenta'];
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='CONSULTACAJERO2'){
    unset($_POST['METHOD']);
    $query="select * from cuenta_c inner join client_co on cuenta_c.No_ide = client_co.No_ide where No_cuenta=".$_POST['No_cuenta'];
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    header("HTTP/1.1 200 OK");
    exit();
}



//  Desplegable de tipo de rol
if($_POST['METHOD']=='ROLES'){
    unset($_POST['METHOD']);
    $query="select * from tip_rol";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

//  Modal de solicitudes
if($_POST['METHOD']=='SOLICITUD'){
    unset($_POST['METHOD']);
    $query="select * from reg_soli inner join client_co on reg_soli.No_ide = client_co.No_ide";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='SOLICITUD2'){
    unset($_POST['METHOD']);
    $query="select * from reg_soli inner join client_co on reg_soli.No_ide = client_co.No_ide where No_ide=".$_POST['No_ide'];
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll(PDO::FETCH_ASSOC));
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='SOLICITUDPJ'){
    unset($_POST['METHOD']);
    $query="select * from reg_solij inner join entidad on reg_solij.Nit = entidad.Nit";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

//Consulta de informacion de persona natural

if($_POST['METHOD']=='CONSULTAID'){
    unset($_POST['METHOD']);
    $query="select DISTINCT * from client_co inner join ti_sol on client_co.Idti_sol = ti_sol.Idti_sol 
    inner join ti_doc on client_co.Idti_doc = ti_doc.Idti_doc 
    inner join ti_solicit on client_co.Idti_solicit = ti_solicit.Idti_solicit 
    inner join genero on client_co.Id_gen = genero.Id_gen 
    inner join tiest_civ on client_co.Idest_ci = tiest_civ.Idest_ci 
    inner join ti_nac on client_co.Id_nac = ti_nac.Id_nac 
    inner join tiocu_ofi on client_co.Idocu_ofii = tiocu_ofi.Idocu_ofi 
    inner join tireg_iv on client_co.Idtireg_iva = tireg_iv.Idtireg_iv 
    inner join tiop_mo on client_co.Idtiop_m = tiop_mo.Idtiop_mo 
    inner join tipro_mo on client_co.Idtipro_m = tipro_mo.Idtipro_mo 
    inner join tien_re on client_co.Idtien_re = tien_re.Idtien_re 
    inner join solicitante on client_co.No_solicit = solicitante.No_solicit
    inner join vendedor on client_co.Cod_vend = vendedor.Cod_vend where No_ide=".$_POST['No_ide'];
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    exit();
}

if($_POST['METHOD']=='CONSULTAIDCUENTA'){
    unset($_POST['METHOD']);
    $query="select * from cuenta_c where No_ide=".$_POST['No_ide'];
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    exit();
}

if($_POST['METHOD']=='CONSULTACUENTAPN'){
    unset($_POST['METHOD']);
    $query="select * from act_cli where No_cuec=".$_POST['No_cuenta'];
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    exit();
}

if($_POST['METHOD']=='ESTADOSCUENTASPN'){
    unset($_POST['METHOD']);
    $query="select * from est_soli where Idclient=".$_POST['No_ide'];
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    exit();
}

if($_POST['METHOD']=='CONSULTAID2'){
    unset($_POST['METHOD']);
    $query="select * from client_co where No_ide=".$_POST['No_ide'];
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    header("HTTP/1.1 200 OK");
    exit();
}


if($_POST['METHOD']=='CONSULTAID3'){
    unset($_POST['METHOD']);
    $query="select * from client_co where Id_client=".$_POST['No_ide'];
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    header("HTTP/1.1 200 OK");
    exit();
}


if($_POST['METHOD']=='CONSULTAIPJ'){
    unset($_POST['METHOD']);
    $query="select * from entidad where Id_ent=".$_POST['Nit'];
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    header("HTTP/1.1 200 OK");
    exit();
}

/* Consultas Validar Numero de Roles */

//consulta validar numero de rol Director
if ($_POST ['METHOD']=='CONSULTAVAROLD'){
    unset($_POST['METHOD']);
    $query="select Idti_rol from reg_usu where Idti_rol  =1";
    $resultado=metodoGet($query);
    echo json_encode ($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

//consulta validar numero de rol Asesor 
if ($_POST ['METHOD']=='CONSULTAVAROLA'){
    unset($_POST['_POST']);
    $query="select Idti_rol from reg_usu where Idti_rol = 2";
    $resultado=metodoGet($query);
    echo json_encode ($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

//consulta validar numero de rol  Gerente
if ($_POST ['METHOD']=='CONSULTAVAROLG'){
    unset($_POST['_POST']);
    $query="select Idti_rol from reg_usu where Idti_rol = 3";
    $resultado=metodoGet($query);
    echo json_encode ($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

//consulta validar numero de rol  Cajero
if ($_POST ['METHOD']=='CONSULTAVAROLC'){
    unset($_POST['_POST']);
    $query="select Idti_rol from reg_usu where Idti_rol = 4";
    $resultado=metodoGet($query);
    echo json_encode ($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

//consulta validar numero de Cajero Principal
if ($_POST ['METHOD']=='CONSULTAVAROLCP'){
    unset($_POST['_POST']);
    $query="select Idti_rol from reg_usu where Idti_rol = 5";
    $resultado=metodoGet($query);
    echo json_encode ($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

//consulta de informacion de persona juridica
if($_POST['METHOD']=='CONSULTAIDENT'){
    unset($_POST['METHOD']);
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
    inner join vendedor on entidad.Cod_vend = vendedor.Cod_vend where Nit=".$_POST['Nit'];
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    exit();
}

if($_POST['METHOD']=='CONSULTAIDENTCUENTA'){
    unset($_POST['METHOD']);
    $query="select * from cuenta_j where Nit=".$_POST['Nit'];
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    exit();
}

if($_POST['METHOD']=='CONSULTACUENTAPJ'){
    unset($_POST['METHOD']);
    $query="select * from act_cli where No_cuej=".$_POST['No_cuenta'];
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    exit();
}

if($_POST['METHOD']=='ESTADOSCUENTASPJ'){
    unset($_POST['METHOD']);
    $query="select * from est_solij where idclientj=".$_POST['Nit'];
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    exit();
}


//consultas cajero principal
if($_POST['METHOD']=='CONSULTAM1'){
    unset($_POST['METHOD']);
    $query="select * from act_cli where No_cajero = 'Cajero1'";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='CONSULTAM2'){
    unset($_POST['METHOD']);
    $query="select * from act_cli where No_cajero = 'Cajero2'";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='CONSULTAM3'){
    unset($_POST['METHOD']);
    $query="select * from act_cli where No_cajero = 'Cajero3'";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='CONSULTAM4'){
    unset($_POST['METHOD']);
    $query="select * from act_cli where No_cajero='Cajero4'";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='CONSULTAM5'){
    unset($_POST['METHOD']);
    $query="select * from act_cli where No_cajero='Cajero5'";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='CONSULTAVALUE1'){
    unset($_POST['METHOD']);
    $query="select * from act_val where No_cajero='Cajero1' and (ti_product='Apertura de Cuenta' or ti_product='Consignacion')";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='CONSULTAVALUE2'){
    unset($_POST['METHOD']);
    $query="select * from act_val where No_cajero='Cajero2' and (ti_product='Apertura de Cuenta' or ti_product='Consignacion')";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='CONSULTAVALUE3'){
    unset($_POST['METHOD']);
    $query="select * from act_val where No_cajero='Cajero3' and (ti_product='Apertura de Cuenta' or ti_product='Consignacion')";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='CONSULTAVALUE4'){
    unset($_POST['METHOD']);
    $query="select * from act_val where No_cajero='Cajero4' and (ti_product='Apertura de Cuenta' or ti_product='Consignacion')";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='CONSULTAVALUE5'){
    unset($_POST['METHOD']);
    $query="select * from act_val where No_cajero='Cajero5' and (ti_product='Apertura de Cuenta' or ti_product='Consignacion')";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='CONSULTAVALUEREST1'){
    unset($_POST['METHOD']);
    $query="select * from act_val where No_cajero='Cajero1' and ti_product='Retiro'";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='CONSULTAVALUEREST2'){
    unset($_POST['METHOD']);
    $query="select * from act_val where No_cajero='Cajero2' and ti_product='Retiro'";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='CONSULTAVALUEREST3'){
    unset($_POST['METHOD']);
    $query="select * from act_val where No_cajero='Cajero3' and ti_product='Retiro'";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='CONSULTAVALUEREST4'){
    unset($_POST['METHOD']);
    $query="select * from act_val where No_cajero='Cajero4' and ti_product='Retiro'";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='CONSULTAVALUEREST5'){
    unset($_POST['METHOD']);
    $query="select * from act_val where No_cajero='Cajero5' and ti_product='Retiro'";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD'] == 'REPORTCUENTA'){
    unset($_POST['METHOD']);
    $No_cuenta = $_POST['No_cuenta'];
    $query="select * from act_cli where No_cuec= '$No_cuenta' or No_cuej= '$No_cuenta'";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD'] == 'REPORTCUENTADATE'){
    unset($_POST['METHOD']);
    $Mindate = $_POST['Min_date'];
    $Maxdate = $_POST['Max_date'];
    $query="select * from act_cli where Fe_act >= '$Mindate' and Fe_act <= '$Maxdate'";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD'] == 'REPORTVALUEPCUENTA'){
    unset($_POST['METHOD']);
    $No_cuenta = $_POST['No_cuenta'];
    $query="select * from act_cli where (No_cuec='$No_cuenta' or No_cuej='$No_cuenta') and ti_pro='Consignacion'";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD'] == 'REPORTVALUENCUENTA'){
    unset($_POST['METHOD']);
    $No_cuenta = $_POST['No_cuenta'];
    $query="select * from act_cli where (No_cuec='$No_cuenta' or No_cuej='$No_cuenta') and ti_pro='Retiro'";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

//Registro de Fomulario persona natural
if($_POST['METHOD']=='FORMN'){
    unset($_POST['METHOD']);
    $No_ide =$_POST['No_ide'];
    $Idti_sol =$_POST['Idti_sol'];
    $Idti_solicit =$_POST['Idti_solicit'];
    $Fec_dil =$_POST['Fec_dil'];
    $Pri_nom =$_POST['Pri_nom'];
    $No_cuenta =$_POST['No_cuenta'];
    $Idti_cue =$_POST['Idti_cue'];
    $Seg_nom =$_POST['Seg_nom'];
    $Pri_ape =$_POST['Pri_ape'];
    $Seg_ape =$_POST['Seg_ape'];
    $Idti_doc =$_POST['Idti_doc'];
    $Lug_exp =$_POST['Lug_exp'];
    $Fec_exp =$_POST['Fec_exp'];
    $Fec_nac =$_POST['Fec_nac'];
    $Ciu_nac =$_POST['Ciu_nac'];
    $Id_gen =$_POST['Id_gen'];
    $Idest_ci =$_POST['Idest_ci'];
    $Id_nac =$_POST['Id_nac'];
    $Otr_nac =$_POST['Otr_nac'];
    $Dir_re =$_POST['Dir_re'];
    $Blo_to =$_POST['Blo_to'];
    $Ap_ca =$_POST['Ap_ca'];
    $Barrio =$_POST['Barrio'];
    $Ciu_mu =$_POST['Ciu_mu'];
    $Depart =$_POST['Depart'];
    $Pais =$_POST['Pais'];
    $Telef =$_POST['Telef'];
    $Celular =$_POST['Celular'];
    $Corr_ele =$_POST['Corr_ele'];
    $Profe =$_POST['Profe'];
    $Idocu_ofii =$_POST['Idocu_ofii'];
    $Det_act =$_POST['Det_act'];
    $Cod_ciuu =$_POST['Cod_ciuu'];
    $No_emp =$_POST['No_emp'];
    $Nom_emp =$_POST['Nom_emp'];
    $Dir_emp =$_POST['Dir_emp'];
    $Barr_lab =$_POST['Barr_lab'];
    $Ciu_lab =$_POST['Ciu_lab'];
    $Dep_lab =$_POST['Dep_lab'];
    $Pais_lab =$_POST['Pais_lab'];
    $Tel_lab =$_POST['Tel_lab'];
    $Ext =$_POST['Ext'];
    $Cel_lab =$_POST['Cel_lab'];
    $Corr_lab =$_POST['Corr_lab'];
    $Ing_men =$_POST['Ing_men'];
    $Otr_ing =$_POST['Otr_ing'];
    $Det_otr =$_POST['Det_otr'];
    $To_act =$_POST['To_act'];
    $To_pa =$_POST['To_pa'];
    $To_egr =$_POST['To_egr'];
    $Vent_a =$_POST['Vent_a'];
    $Fe_ci =$_POST['Fe_ci'];
    $Dec_rent =$_POST['Dec_rent'];
    $Age_ret =$_POST['Age_ret'];
    $Idtireg_iva =$_POST['Idtireg_iva'];
    $Ob_tri =$_POST['Ob_tri'];
    $Notri_est =$_POST['Notri_est'];
    $Pais_1 =$_POST['Pais_1'];
    $Pais_2 =$_POST['Pais_2'];
    $No_tri1 =$_POST['No_tri1'];
    $No_tri2 =$_POST['No_tri2'];
    $Prov_bie =$_POST['Prov_bie'];
    $Pais_bi =$_POST['Pais_bi'];
    $Ciu_bie =$_POST['Ciu_bie'];
    $Op_ext =$_POST['Op_ext'];
    $Idtiop_m =$_POST['Idtiop_m'];
    $Otro_mo =$_POST['Otro_mo'];
    $Nom_ent =$_POST['Nom_ent'];
    $Idtipro_m  =$_POST['Idtipro_m'];
    $Otro_mo2 =$_POST['Otro_mo2'];
    $No_pro =$_POST['No_pro'];
    $Mo_pro =$_POST['Mo_pro'];
    $Moneda =$_POST['Moneda'];
    $Ciu_ent =$_POST['Ciu_ent'];
    $Pa_ent =$_POST['Pa_ent'];
    $Idtien_re =$_POST['Idtien_re'];
    $Idti_soli =$_POST['Idti_soli'];
    $No_solicit =$_POST['No_solicit'];
    $Nom_solicit =$_POST['Nom_solicit'];
    $Firma =$_POST['Firma'];
    $Cod_vend =$_POST['Cod_vend'];
    $Nom_vend =$_POST['Nom_vend'];
    $Oficina =$_POST['Oficina'];
    $Obser =$_POST['Obser'];
    $Firma_vend =$_POST['Firma_vend'];
    $query ="insert into vendedor(Cod_vend,Nom_vend,Oficina,Obser,Firma_vend) values ('$Cod_vend','$Nom_vend','$Oficina','$Obser','$Firma_vend')";
    $resultado = mysqli_query( $conexion ,$query);
    if($resultado == 1){
    $query ="insert into solicitante(Idti_soli,No_solicit,Nom_solicit, Firma) values ('$Idti_soli','$No_solicit','$Nom_solicit','$Firma')";
    $resultado2 = mysqli_query($conexion, $query);
        if ($resultado2 == 1) {
        $query="insert into client_co(No_ide,Idti_solicit,Fec_dil,Idti_sol,Pri_nom,Seg_nom,Pri_ape,Seg_ape,Idti_doc,Lug_exp,Fec_exp,Fec_nac,Ciu_nac,Id_gen,Idest_ci,Id_nac,Otr_nac,Dir_re,Blo_to,Ap_ca,Barrio,Ciu_mu,Depart,Pais,Telef,Celular,Corr_ele,Profe,Idocu_ofii,Det_act,Cod_ciuu,No_emp,Nom_emp,Dir_emp,Barr_lab,Ciu_lab,Dep_lab,Pais_lab,Tel_lab,Ext,Cel_lab,Corr_lab,Ing_men,Otr_ing,Det_otr,To_act,To_pa,To_egr,Vent_a,Fe_ci,Dec_rent,Age_ret,Idtireg_iva,Ob_tri,Notri_est,Pais_1,Pais_2,No_tri1,No_tri2,Prov_bie,Pais_bi,Ciu_bie,Op_ext,Idtiop_m,Otro_mo,Nom_ent,Idtipro_m,Otro_mo2,No_pro,Mo_pro,Moneda,Ciu_ent,Pa_ent,Idtien_re,No_solicit,Cod_vend) 
        values ('$No_ide','$Idti_solicit','$Fec_dil','$Idti_sol','$Pri_nom','$Seg_nom','$Pri_ape','$Seg_ape','$Idti_doc','$Lug_exp','$Fec_exp','$Fec_nac','$Ciu_nac','$Id_gen','$Idest_ci','$Id_nac','$Otr_nac','$Dir_re','$Blo_to','$Ap_ca','$Barrio','$Ciu_mu','$Depart','$Pais','$Telef','$Celular','$Corr_ele','$Profe','$Idocu_ofii','$Det_act','$Cod_ciuu','$No_emp','$Nom_emp','$Dir_emp','$Barr_lab','$Ciu_lab','$Dep_lab','$Pais_lab','$Tel_lab','$Ext','$Cel_lab','$Corr_lab','$Ing_men','$Otr_ing','$Det_otr','$To_act','$To_pa','$To_egr','$Vent_a','$Fe_ci','$Dec_rent','$Age_ret','$Idtireg_iva','$Ob_tri','$Notri_est','$Pais_1','$Pais_2','$No_tri1','$No_tri2','$Prov_bie','$Pais_bi','$Ciu_bie','$Op_ext','$Idtiop_m','$Otro_mo','$Nom_ent','$Idtipro_m','$Otro_mo2','$No_pro','$Mo_pro','$Moneda','$Ciu_ent','$Pa_ent','$Idtien_re','$No_solicit','$Cod_vend')";
         $resultado3 = mysqli_query($conexion, $query);
         $ultimo_id = mysqli_insert_id($conexion);
            if($resultado3 == 1){
                $query= "insert into reg_soli(id_soli) values ('$ultimo_id')";
                $resultado5 = mysqli_query($conexion, $query);
                if($resultado5 == 1){
                    $query = "insert into cuenta_c(No_cuenta,No_ide,Idti_cue) values ('$No_cuenta', '$No_ide','$Idti_cue')";
                    $resultado6 = mysqli_query($conexion, $query);
                }  else{
                    echo("error en la quinta insersion");
                } 
            }else{
                echo("error en la cuarta insersion");
            }    
    } else{
        echo("error en la segunda insersion");
    }
} else{
    echo("error en la primera insersion");
}
    header("HTTP/1.1 200 OK");
    exit();
}

//Registro de Formulario de persona jurídica
if ($_POST['METHOD'] == 'FORMJ') {
    unset($_POST['METHOD']);
    $Fe_dil = $_POST['Fe_dil'];
    $tidoc_ent = $_POST['tidoc_ent'];
    $Nit = $_POST['Nit'];
    $No_cuenta =$_POST['No_cuenta'];
    $Idti_cue =$_POST['Idti_cue'];
    $Idti_sol = $_POST['Idti_sol'];
    $Idti_doc = $_POST['Idti_doc'];
    $Idti_doc2 = $_POST['Idti_doc2'];
    $Fidei = $_POST['Fidei'];
    $No_fide = $_POST['No_fide'];
    $Nom_ra = $_POST['Nom_ra'];
    $Nom_cor = $_POST['Nom_cor'];
    $Fe_cons = $_POST['Fe_cons'];
    $Ciu_cons = $_POST['Ciu_cons'];
    $Pai_cons = $_POST['Pai_cons'];
    $Dir_se = $_POST['Dir_se'];
    $Telefono = $_POST['Telefono'];
    $Corr_se = $_POST['Corr_se'];
    $No_doc = $_POST['No_doc'];
    $Pri_no = $_POST['Pri_no'];
    $Seg_no = $_POST['Seg_no'];
    $Pri_ape = $_POST['Pri_ape'];
    $Seg_ape = $_POST['Seg_ape'];
    $Pri_ape2 = $_POST['Pri_ape2'];
    $Seg_ape2 = $_POST['Seg_ape2'];
    $Cargo = $_POST['Cargo'];
    $Cargo2 = $_POST['Cargo2'];
    $Dir_lab = $_POST['Dir_lab'];
    $Dir_lab2 = $_POST['Dir_lab2'];
    $Barrio = $_POST['Barrio'];
    $Barrio2 = $_POST['Barrio2'];
    $Barrio3 = $_POST['Barrio3'];
    $Ciu_mu = $_POST['Ciu_mu'];
    $Ciu_mu2 = $_POST['Ciu_mu2'];
    $Ciu_mu3 = $_POST['Ciu_mu3'];
    $Depart = $_POST['Depart'];
    $Depart2 = $_POST['Depart2'];
    $Depart3 = $_POST['Depart3'];
    $Pais = $_POST['Pais'];
    $Pais2 = $_POST['Pais2'];
    $Pais3 = $_POST['Pais3'];
    $Tel_lab = $_POST['Tel_lab'];
    $Tel_lab2 = $_POST['Tel_lab2'];
    $Ext = $_POST['Ext'];
    $Ext2 = $_POST['Ext2'];
    $Ext3 = $_POST['Ext3'];
    $Celular = $_POST['Celular'];
    $Celular2 = $_POST['Celular2'];
    $Corr_lab = $_POST['Corr_lab'];
    $Corr_lab2 = $_POST['Corr_lab2'];
    $Pre_1 = $_POST['Pre_1'];
    $Pre_2 = $_POST['Pre_2'];
    $No_docu = $_POST['No_docu'];
    $Pri_nom = $_POST['Pri_nom'];
    $Seg_nom = $_POST['Seg_nom'];
    $Idti_na = $_POST['Idti_na'];
    $Co_ciuu = $_POST['Co_ciuu'];
    $Det_act = $_POST['Det_act'];
    $No_emp = $_POST['No_emp'];
    $Idti_soci = $_POST['Idti_soci'];
    $Otro_com = $_POST['Otro_com'];
    $Idti_en = $_POST['Idti_en'];
    $Otro_ent = $_POST['Otro_ent'];
    $Idti_es = $_POST['Idti_es'];
    $Otro_est = $_POST['Otro_est'];
    $Idti_des = $_POST['Idti_des'];
    $Ing_op = $_POST['Ing_op'];
    $Ino_op = $_POST['Ino_op'];
    $Detno = $_POST['Detno'];
    $vent_an = $_POST['vent_an'];
    $Fe_ci = $_POST['Fe_ci'];
    $Egre_me = $_POST['Egre_me'];
    $Util_ne = $_POST['Util_ne'];
    $Tot_act = $_POST['Tot_act'];
    $Tot_pas = $_POST['Tot_pas'];
    $Tot_pat = $_POST['Tot_pat'];
    $Idti_cont = $_POST['Idti_cont'];
    $Idcla_cont = $_POST['Idcla_cont'];
    $Res_iva = $_POST['Res_iva'];
    $Aut_ing = $_POST['Aut_ing'];
    $Int_merc = $_POST['Int_merc'];
    $Vig_sup = $_POST['Vig_sup'];
    $Obli_est = $_POST['Obli_est'];
    $No_id_tr = $_POST['No_id_tr'];
    $Patri_1 = $_POST['Patri_1'];
    $Patri_2 = $_POST['Patri_2'];
    $NoidTrib_1 = $_POST['NoidTrib_1'];
    $NoidTrib_2 = $_POST['NoidTrib_2'];
    $Idtripro_bi = $_POST['Idtripro_bi'];
    $Otro_fue = $_POST['Otro_fue'];
    $Idfue_rec = $_POST['Idfue_rec'];
    $Otro_pro = $_POST['Otro_pro'];
    $Pais_or = $_POST['Pais_or'];
    $Ciu_or = $_POST['Ciu_or'];
    $Nat_recu = $_POST['Nat_recu'];
    $Op_ext = $_POST['Op_ext'];
    $Idtiop_m = $_POST['Idtiop_m'];
    $Otro_mo = $_POST['Otro_mo'];
    $Nom_ent = $_POST['Nom_ent'];
    $Idtipro_m = $_POST['Idtipro_m'];
    $Otro_mo2 = $_POST['Otro_mo2'];
    $No_pro = $_POST['No_pro'];
    $Mo_pro = $_POST['Mo_pro'];
    $Moneda = $_POST['Moneda'];
    $Ciu_ent = $_POST['Ciu_ent'];
    $Pa_ent = $_POST['Pa_ent'];
    $Idtien_re = $_POST['Idtien_re'];
    $Idti_soli = $_POST['Idti_soli'];
    $No_solicit = $_POST['No_solicit'];
    $Nom_solicit = $_POST['Nom_solicit'];
    $Firma = $_POST['Firma'];
    $Cod_vend = $_POST['Cod_vend'];
    $Nom_vend = $_POST['Nom_vend'];
    $Oficina = $_POST['Oficina'];
    $Obser = $_POST['Obser'];
    $Firma_vend = $_POST['Firma_vend'];
    $query = "insert into vendedor(Cod_vend,Nom_vend,Oficina,Obser,Firma_vend) values ('$Cod_vend','$Nom_vend','$Oficina','$Obser','$Firma_vend')";
    $resultado5 = mysqli_query($conexion, $query);
    if ($resultado5 == 1) {
        $query = "insert into solicitante(Idti_soli,No_solicit,Nom_solicit,Firma) values ('$Idti_soli','$No_solicit','$Nom_solicit','$Firma')";
        $resultado6 = mysqli_query($conexion, $query);
        if ($resultado6 == 1) {
            $query = "insert into cont_ent(No_docu,Idti_doc,Pri_nom,Seg_nom,Pri_apec,Seg_apec,Cargo_c,Dir_labc,Barrio_c,Ciu_muc,Depart_c,Pais_c,Tel_lab_c,Ext_c,Celular_c,Corr_lab_c) values 
            ('$No_docu','$Idti_doc2','$Pri_nom','$Seg_nom','$Pri_ape2','$Seg_ape2','$Cargo2','$Dir_lab2','$Barrio3','$Ciu_mu3','$Depart3','$Pais3','$Tel_lab2','$Ext3','$Celular2','$Corr_lab2')"; 
            $resultado7 = mysqli_query($conexion, $query);
            if ($resultado7 == 1) {
                $query = "insert into repr_le(No_doc,Idti_docr,Pri_nor,Seg_nor,Pri_aper,Seg_aper,Cargo_r,Dir_labr,Barrio_r,Ciu_mur,Depart_r,Pais_r,Tel_labr,Ext_r,Celular_r,Corr_labr) values 
                ('$No_doc','$Idti_doc','$Pri_no','$Seg_no','$Pri_ape','$Seg_ape','$Cargo','$Dir_lab','$Barrio2','$Ciu_mu2','$Depart2','$Pais2','$Tel_lab','$Ext2','$Celular','$Corr_lab')";
                $resultado8 = mysqli_query($conexion, $query);         
                if ($resultado8 == 1) {
                    $query = "insert into entidad(Fe_dil,Idti_sol,tidoc_ent,Nit,Fidei,No_fide,Nom_ra,Nom_cor,Fe_cons,Ciu_cons,Pai_cons,Dir_se,Barrio,Ciu_mu,Depart,Pais,Telefono,Ext,Corr_se,No_doc,Pre_1,Pre_2,No_docu,Idti_na,Co_ciuu,Det_act,No_emp,Idti_soci,Otro_com,Idti_en,Otro_ent,Idti_es,Otro_est,Idti_des,Ing_op,Ino_op,Detno,vent_an,Fe_ci,Egre_me,Util_ne,Tot_act,Tot_pas,Tot_pat,Idti_cont,Idcla_cont,Res_iva,Aut_ing,Int_merc,Vig_sup,Obli_est,No_id_tr,Patri_1,Patri_2,NoidTrib_1,NoidTrib_2,Idtripro_bi,Otro_fue,Idfue_rec,Otro_pro,Pais_or,Ciu_or,Nat_recu,Op_ext,Idtiop_m,Otro_mo,Nom_ent,Idtipro_m,Otro_mo2,No_pro,Mo_pro,Moneda,Ciu_ent,Pa_ent,Idtien_re,No_solicit,Cod_vend) 
                    values ('$Fe_dil','$Idti_sol','$tidoc_ent','$Nit','$Fidei','$No_fide','$Nom_ra','$Nom_cor','$Fe_cons','$Ciu_cons','$Pai_cons','$Dir_se','$Barrio','$Ciu_mu','$Depart','$Pais','$Telefono','$Ext','$Corr_se','$No_doc','$Pre_1','$Pre_2','$No_docu','$Idti_na','$Co_ciuu','$Det_act','$No_emp','$Idti_soci','$Otro_com','$Idti_en','$Otro_ent','$Idti_es','$Otro_est','$Idti_des','$Ing_op','$Ino_op','$Detno','$vent_an','$Fe_ci','$Egre_me','$Util_ne','$Tot_act','$Tot_pas','$Tot_pat','$Idti_cont','$Idcla_cont','$Res_iva','$Aut_ing','$Int_merc','$Vig_sup','$Obli_est','$No_id_tr','$Patri_1','$Patri_2','$NoidTrib_1','$NoidTrib_2','$Idtripro_bi','$Otro_fue','$Idfue_rec','$Otro_pro','$Pais_or','$Ciu_or','$Nat_recu','$Op_ext','$Idtiop_m','$Otro_mo','$Nom_ent','$Idtipro_m','$Otro_mo2','$No_pro','$Mo_pro','$Moneda','$Ciu_ent','$Pa_ent','$Idtien_re','$No_solicit','$Cod_vend')";
                    $resultado9 = mysqli_query($conexion, $query);  
                    $ultimo_id2 = mysqli_insert_id($conexion);
                        if($resultado9 == 1){
                            $query= "insert into reg_solij(Id_solij) values ('$ultimo_id2')";
                            $resultado11 = mysqli_query($conexion, $query);
                            if($resultado11 == 1){
                                $query = "insert into cuenta_j(No_cuenta,Nit,Idti_cue) values ('$No_cuenta', '$Nit','$Idti_cue')";
                                $resultado12 = mysqli_query($conexion, $query);
                            }else{
                                echo "Error en la septima insersion ";
                            }
                        }else{
                            echo "Error en la sexta insersion ";
                        }  
                    } else {
                    echo ("error en la cuarta insersion");
                }
            } else {
                echo ("error en la tercera insersion");
            }
        } else {
            echo ("error en la segunda insersion");
        }
    } else {
        echo ("error en la primera insersion");
    }
    header("HTTP/1.1 200 OK");
    exit();
}


//Crud Completa

//Registro de Usuarios

if($_POST['METHOD']=='POST'){
    unset($_POST['METHOD']);
    $Id_usu=$_POST['Id_usu'];
    $Usuario=$_POST['Usuario'];
    $Contra=$_POST['Contra'];
    $Idti_rol=$_POST['Idti_rol'];
    $query="insert into reg_usu(Id_usu, Usuario, Contra, Idti_rol) values (null, '$Usuario', '$Contra','$Idti_rol')";
    $queryAutoIncrement="select MAX(Id_usu) as Id_usu from frameworks";
    $resultado=metodoPost($query, $queryAutoIncrement);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='POST2'){
    unset($_POST['METHOD']);
    $Id_usu=$_POST['Id_usu'];
    $Usuario=$_POST['Usuario'];
    $Contra=$_POST['Contra'];
    $Idti_rol=$_POST['Idti_rol'];
    $query="insert into reg_usu(Id_usu, Usuario, Contra, Idti_rol) values (null, '$Usuario', '$Contra','$Idti_rol')";
    $queryAutoIncrement="select MAX(Id_usu) as Id_usu from frameworks";
    $resultado=metodoPost($query, $queryAutoIncrement);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}
//Actualizacion de usuarios

if($_POST['METHOD']=='PUT'){
    unset($_POST['METHOD']);
    $Id_usu=$_POST['Id_usu'];
    $Usuario=$_POST['Usuario'];
    $Contra=$_POST['Contra'];
    $Idti_rol=$_POST['Idti_rol'];
    $query="UPDATE reg_usu SET Id_usu='$Id_usu', Usuario='$Usuario', Contra='$Contra' , Idti_rol='$Idti_rol' WHERE Id_usu='$Id_usu'";
    $resultado=metodoPut($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

//Eliminacion de usuarios

if($_POST['METHOD']=='DELETE'){
    unset($_POST['METHOD']);
    $Id_usu=$_GET['Id_usu'];
    $query="DELETE FROM reg_usu WHERE Id_usu='$Id_usu'";
    $resultado=metodoDelete($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

//Eliminacion de solicitudes

//aceptacion de solicitud y eliminacion de la misma
if($_POST['METHOD']=='DELETESOLI'){
    unset($_POST['METHOD']);
    $No_ide=$_GET['No_ide'];
    $Id_soli=$_GET['Id_soli'];
    $Id_reg=$_GET['Id_reg'];
    $query="insert into est_soli(Idclient,Id_soli,Esta_so,Des_soli) values ('$No_ide','$Id_soli','Aprobada','La solicitud fue aprobada')";
    $resultado = mysqli_query($conexion, $query); 
    if($resultado == 1){
        $query="DELETE FROM reg_soli WHERE Id_reg='$Id_reg'";
        $resultado2 = mysqli_query($conexion, $query); 
    }else{
        echo ("error en la insercion");
    }
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='DELETESOLIJ'){
    unset($_POST['METHOD']);
    $Nit=$_GET['Nit'];
    $Id_solij=$_GET['Id_solij'];
    $Id_regj=$_GET['Id_regj'];
    $query="insert into est_solij(Idclientj,Id_solij,Esta_soj,Des_solij) values ('$Nit','$Id_solij','Aprobada','La solicitud fue aprobada')";
    $resultado = mysqli_query($conexion, $query); 
    if($resultado == 1){
        $query="DELETE FROM reg_solij WHERE Id_regj='$Id_regj'";
        $resultado2 = mysqli_query($conexion, $query); 
    }else{
        echo ("error en la insercion");
    }
    header("HTTP/1.1 200 OK");
    exit();
}

//cancelacion de solicitud y eliminacion de la misma
if($_POST['METHOD']=='CANCELSOLI'){
    unset($_POST['METHOD']);
    $Des_soli=$_POST['Des_soli'];
    $No_ide=$_GET['No_ide'];
    $Id_soli=$_GET['Id_soli'];
    $Id_reg=$_GET['Id_reg'];
    $query="insert into est_soli(Idclient,Id_soli,Esta_so,Des_soli) values ('$No_ide','$Id_soli','Denegada','$Des_soli')";
    $resultado = mysqli_query($conexion, $query); 
    if($resultado == 1){
        $query="DELETE FROM reg_soli WHERE Id_reg='$Id_reg'";
        $resultado2 = mysqli_query($conexion, $query); 
    }else{
        echo ("error en la insercion");
    }
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='CANCELSOLIJ'){
    unset($_POST['METHOD']);
    $Des_soli=$_POST['Des_soli'];
    $Nit=$_GET['Nit'];
    $Id_solij=$_GET['Id_solij'];
    $Id_regj=$_GET['Id_regj'];
    $query="insert into est_solij(Idclientj,Id_solij,Esta_soj,Des_solij) values ('$Nit','$Id_solij','Denegada','$Des_soli')";
    $resultado = mysqli_query($conexion, $query); 
    if($resultado == 1){
        $query="DELETE FROM reg_solij WHERE Id_regj='$Id_regj'";
        $resultado2 = mysqli_query($conexion, $query); 
    }else{
        echo ("error en la insercion");
    }
    header("HTTP/1.1 200 OK");
    exit();
}

// if($_POST['METHOD']=='DELETETOTAL'){
//     unset($_POST['METHOD']);
//     $query="DELETE FROM act_val";
//     $resultado=mysqli_query($conexion, $query);
//     if($resultado == 1){
//         $query = "DELETE FROM act_cli";
//         $resultado2=mysqli_query($conexion, $query);
//         if($resultado2 == 1){
//             $query = "DELETE FROM cuenta_c";
//             $resultado3=mysqli_query($conexion, $query);
//             if($resultado3 == 1){
//                 $query = "DELETE FROM cuenta_j";
//                 $resultado4=mysqli_query($conexion, $query);
//                 if($resultado4 == 1){
//                     $query = "DELETE FROM cuenta_j";
//                     $resultado4=mysqli_query($conexion, $query);
//                 }else{
//                     echo ("error en la cuarta eliminacion");
//                 }
//             }else{
//                 echo ("error en la tercera eliminacion");
//             }
//         }else{
//             echo ("error en la segunda eliminacion");
//         }
//     }else{
//         echo ("error en la primera eliminacion");
//     }
//     header("HTTP/1.1 200 OK");
//     exit();
// }

if($_POST['METHOD']=='DELETETOTAL'){
    unset($_POST['METHOD']);
    $query="DELETE FROM act_val";
    $resultado=mysqli_query($conexion, $query);

    $query2 = "DELETE FROM act_cli";
    $resultado2=mysqli_query($conexion, $query2);
     
    $query3 = "DELETE FROM cuenta_c";
    $resultado3=mysqli_query($conexion, $query3);
          
    $query4 = "DELETE FROM cuenta_j";
    $resultado4=mysqli_query($conexion, $query4);

    $query5 = "DELETE FROM est_soli";
    $resultado5=mysqli_query($conexion, $query5);

    $query6 = "DELETE FROM est_solij";
    $resultado6=mysqli_query($conexion, $query6);

    $query7 = "DELETE FROM reg_soli";
    $resultado7=mysqli_query($conexion, $query7);

    $query8 = "DELETE FROM reg_solij";
    $resultado8=mysqli_query($conexion, $query8);

    $query9 = "DELETE FROM client_co";
    $resultado9=mysqli_query($conexion, $query9);
    
    $query10 = "DELETE FROM entidad";
    $resultado10=mysqli_query($conexion, $query10);

    $query11 = "DELETE FROM cont_ent";
    $resultado11=mysqli_query($conexion, $query11);

    $query12 = "DELETE FROM repr_le";
    $resultado12=mysqli_query($conexion, $query12);

    $query13 = "DELETE FROM solicitante";
    $resultado13=mysqli_query($conexion, $query13);

    $query14 = "DELETE FROM vendedor";
    $resultado14=mysqli_query($conexion, $query14);

    //Incremental en 1

    $query15 = "ALTER TABLE act_val AUTO_INCREMENT = 1";
    $resultado15=mysqli_query($conexion, $query15);

    $query16 = "ALTER TABLE act_cli AUTO_INCREMENT = 1";
    $resultado16=mysqli_query($conexion, $query16);

    $query17 = "ALTER TABLE cuenta_c AUTO_INCREMENT = 1";
    $resultado17=mysqli_query($conexion, $query17);

    $query18 = "ALTER TABLE cuenta_j AUTO_INCREMENT = 1";
    $resultado18=mysqli_query($conexion, $query18);

    $query19 = "ALTER TABLE est_soli AUTO_INCREMENT = 1";
    $resultado19=mysqli_query($conexion, $query19);

    $query20 = "ALTER TABLE est_solij AUTO_INCREMENT = 1";
    $resultado20=mysqli_query($conexion, $query20);

    $query21 = "ALTER TABLE reg_soli AUTO_INCREMENT = 1";
    $resultado21=mysqli_query($conexion, $query21);

    $query22 = "ALTER TABLE reg_solij AUTO_INCREMENT = 1";
    $resultado22=mysqli_query($conexion, $query22);

    $query23 = "ALTER TABLE client_co AUTO_INCREMENT = 1";
    $resultado23=mysqli_query($conexion, $query23);

    $query24 = "ALTER TABLE entidad AUTO_INCREMENT = 1";
    $resultado24=mysqli_query($conexion, $query24);

    $query25 = "ALTER TABLE cont_ent AUTO_INCREMENT = 1";
    $resultado25=mysqli_query($conexion, $query25);

    $query26 = "ALTER TABLE repr_le AUTO_INCREMENT = 1";
    $resultado26=mysqli_query($conexion, $query26);

    $query27 = "ALTER TABLE solicitante AUTO_INCREMENT = 1";
    $resultado27=mysqli_query($conexion, $query27);

    $query28 = "ALTER TABLE vendedor AUTO_INCREMENT = 1";
    $resultado28=mysqli_query($conexion, $query28);
          
    header("HTTP/1.1 200 OK");
    exit();
}

header("HTTP/1.1 400 Bad Request");


?>