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
    $query="select * from client_co inner join ti_doc on client_co.Idti_doc = ti_doc.Idti_doc inner join ti_solicit on client_co.Idti_solicit = ti_solicit.Idti_solicit inner join genero on client_co.Id_gen = genero.Id_gen inner join tiest_civ on client_co.Idest_ci = tiest_civ.Idest_ci inner join ti_nac on client_co.Id_nac = ti_nac.Id_nac inner join tiocu_ofi on client_co.Idocu_ofii = tiocu_ofi.Idocu_ofi where No_ide=".$_POST['No_ide'];
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
    $query="select * from client_co where No_ide=".$_POST['No_ide'];
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    header("HTTP/1.1 200 OK");
    exit();
}


if($_POST['METHOD']=='CONSULTAIPJ'){
    unset($_POST['METHOD']);
    $query="select * from entidad where Nit=".$_POST['Nit'];
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
    $query="select * from entidad where Nit=".$_POST['Nit'];
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
        $query="insert into client_co(No_ide,Idti_solicit,Fec_dil,Pri_nom,Seg_nom,Pri_ape,Seg_ape,Idti_doc,Lug_exp,Fec_exp,Fec_nac,Ciu_nac,Id_gen,Idest_ci,Id_nac,Otr_nac,Dir_re,Blo_to,Ap_ca,Barrio,Ciu_mu,Depart,Pais,Telef,Celular,Corr_ele,Profe,Idocu_ofii,Det_act,Cod_ciuu,No_emp,Nom_emp,Dir_emp,Barr_lab,Ciu_lab,Dep_lab,Pais_lab,Tel_lab,Ext,Cel_lab,Corr_lab,Ing_men,Otr_ing,Det_otr,To_act,To_pa,To_egr,Vent_a,Fe_ci,Dec_rent,Age_ret,Idtireg_iva,Ob_tri,Notri_est,Pais_1,Pais_2,No_tri1,No_tri2,Prov_bie,Pais_bi,Ciu_bie,Op_ext,Idtiop_m,Otro_mo,Nom_ent,Idtipro_m,Otro_mo2,No_pro,Mo_pro,Moneda,Ciu_ent,Pa_ent,Idtien_re,No_solicit,Cod_vend) 
        values ('$No_ide','$Idti_solicit','$Fec_dil','$Pri_nom','$Seg_nom','$Pri_ape','$Seg_ape','$Idti_doc','$Lug_exp','$Fec_exp','$Fec_nac','$Ciu_nac','$Id_gen','$Idest_ci','$Id_nac','$Otr_nac','$Dir_re','$Blo_to','$Ap_ca','$Barrio','$Ciu_mu','$Depart','$Pais','$Telef','$Celular','$Corr_ele','$Profe','$Idocu_ofii','$Det_act','$Cod_ciuu','$No_emp','$Nom_emp','$Dir_emp','$Barr_lab','$Ciu_lab','$Dep_lab','$Pais_lab','$Tel_lab','$Ext','$Cel_lab','$Corr_lab','$Ing_men','$Otr_ing','$Det_otr','$To_act','$To_pa','$To_egr','$Vent_a','$Fe_ci','$Dec_rent','$Age_ret','$Idtireg_iva','$Ob_tri','$Notri_est','$Pais_1','$Pais_2','$No_tri1','$No_tri2','$Prov_bie','$Pais_bi','$Ciu_bie','$Op_ext','$Idtiop_m','$Otro_mo','$Nom_ent','$Idtipro_m','$Otro_mo2','$No_pro','$Mo_pro','$Moneda','$Ciu_ent','$Pa_ent','$Idtien_re','$No_solicit','$Cod_vend')";
         $resultado3 = mysqli_query($conexion, $query);
        if($resultado3 == 1){
        //intermedia tipo de solicitud
            $query ="insert into clien_tip(Idti_sol,No_ide) values ('$Idti_sol','$No_ide')";
            $resultado4 = mysqli_query($conexion, $query);

            if($resultado4 == 1){
                $query= "insert into reg_soli(No_ide) values ('$No_ide')";
                $resultado5 = mysqli_query($conexion, $query);
                if($resultado5 == 1){
                    $query = "insert into cuenta_c(No_cuenta,No_ide) values ('$No_cuenta', '$No_ide')";
                    $resultado6 = mysqli_query($conexion, $query);
                }  else{
                    echo("error en la quinta insersion");
                } 
            }else{
                echo("error en la cuarta insersion");
            }

            }else{
                echo("error en la tercera insersion");
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
            $query = "insert into cont_ent(No_docu,Idti_doc,Pri_nom,Seg_nom,Pri_ape,Seg_ape,Cargo,Dir_lab,Barrio,Ciu_mu,Depart,Pais,Tel_lab,Ext,Celular,Corr_lab) values 
            ('$No_docu','$Idti_doc2','$Pri_nom','$Seg_nom','$Pri_ape2','$Seg_ape2','$Cargo2','$Dir_lab2','$Barrio3','$Ciu_mu3','$Depart3','$Pais3','$Tel_lab2','$Ext3','$Celular2','$Corr_lab2')"; 
            $resultado7 = mysqli_query($conexion, $query);
            if ($resultado7 == 1) {
                $query = "insert into repr_le(No_doc,Idti_doc,Pri_no,Seg_no,Pri_ape,Seg_ape,Cargo,Dir_lab,Barrio,Ciu_mu,Depart,Pais,Tel_lab,Ext,Celular,Corr_lab) values 
                ('$No_doc','$Idti_doc','$Pri_no','$Seg_no','$Pri_ape','$Seg_ape','$Cargo','$Dir_lab','$Barrio2','$Ciu_mu2','$Depart2','$Pais2','$Tel_lab','$Ext2','$Celular','$Corr_lab')";
                $resultado8 = mysqli_query($conexion, $query);         
                if ($resultado8 == 1) {
                    $query = "insert into entidad(Fe_dil,tidoc_ent,Nit,Fidei,No_fide,Nom_ra,Nom_cor,Fe_cons,Ciu_cons,Pai_cons,Dir_se,Barrio,Ciu_mu,Depart,Pais,Telefono,Ext,Corr_se,No_doc,Pre_1,Pre_2,No_docu,Idti_na,Co_ciuu,Det_act,No_emp,Idti_soci,Otro_com,Idti_en,Otro_ent,Idti_es,Otro_est,Idti_des,Ing_op,Ino_op,Detno,vent_an,Fe_ci,Egre_me,Util_ne,Tot_act,Tot_pas,Tot_pat,Idti_cont,Idcla_cont,Res_iva,Aut_ing,Int_merc,Vig_sup,Obli_est,No_id_tr,Patri_1,Patri_2,NoidTrib_1,NoidTrib_2,Idtripro_bi,Otro_fue,Idfue_rec,Otro_pro,Pais_or,Ciu_or,Nat_recu,Op_ext,Idtiop_m,Otro_mo,Nom_ent,Idtipro_m,Otro_mo2,No_pro,Mo_pro,Moneda,Ciu_ent,Pa_ent,Idtien_re,No_solicit,Cod_vend) 
                    values ('$Fe_dil','$tidoc_ent','$Nit','$Fidei','$No_fide','$Nom_ra','$Nom_cor','$Fe_cons','$Ciu_cons','$Pai_cons','$Dir_se','$Barrio','$Ciu_mu','$Depart','$Pais','$Telefono','$Ext','$Corr_se','$No_doc','$Pre_1','$Pre_2','$No_docu','$Idti_na','$Co_ciuu','$Det_act','$No_emp','$Idti_soci','$Otro_com','$Idti_en','$Otro_ent','$Idti_es','$Otro_est','$Idti_des','$Ing_op','$Ino_op','$Detno','$vent_an','$Fe_ci','$Egre_me','$Util_ne','$Tot_act','$Tot_pas','$Tot_pat','$Idti_cont','$Idcla_cont','$Res_iva','$Aut_ing','$Int_merc','$Vig_sup','$Obli_est','$No_id_tr','$Patri_1','$Patri_2','$NoidTrib_1','$NoidTrib_2','$Idtripro_bi','$Otro_fue','$Idfue_rec','$Otro_pro','$Pais_or','$Ciu_or','$Nat_recu','$Op_ext','$Idtiop_m','$Otro_mo','$Nom_ent','$Idtipro_m','$Otro_mo2','$No_pro','$Mo_pro','$Moneda','$Ciu_ent','$Pa_ent','$Idtien_re','$No_solicit','$Cod_vend')";
                    $resultado9 = mysqli_query($conexion, $query);  
                    if ($resultado9 == 1) {
                        $query = "insert into ent_ti(Nit, Idti_sol) values ('$Nit', '$Idti_sol')";
                        $resultado10 = mysqli_query($conexion, $query);
                        if($resultado10 == 1){
                            $query= "insert into reg_solij(Nit) values ('$Nit')";
                            $resultado11 = mysqli_query($conexion, $query);
                            if($resultado11 == 1){
                                $query = "insert into cuenta_j(No_cuenta,Nit) values ('$No_cuenta', '$Nit')";
                                $resultado12 = mysqli_query($conexion, $query);
                            }else{
                                echo "Error en la septima insersion ";
                            }
                        }else{
                            echo "Error en la sexta insersion ";
                        }   
                        
                    }else{
                        echo "Error en la quinta insersion ";
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
    $Id_reg=$_GET['Id_reg'];
    $query="insert into est_soli(Idclient,Esta_so,Des_soli) values ('$No_ide','Aprobada','La solicitud fue aprobada')";
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
    $Id_regj=$_GET['Id_regj'];
    $query="insert into est_solij(Idclientj,Esta_soj,Des_solij) values ('$Nit','Aprobada','La solicitud fue aprobada')";
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
    $Id_reg=$_GET['Id_reg'];
    $query="insert into est_soli(Idclient,Esta_so,Des_soli) values ('$No_ide','Denegada','$Des_soli')";
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
    $Id_regj=$_GET['Id_regj'];
    $query="insert into est_solij(Idclientj,Esta_soj,Des_solij) values ('$Nit','Denegada','$Des_soli')";
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

header("HTTP/1.1 400 Bad Request");


?>