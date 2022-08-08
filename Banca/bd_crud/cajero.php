<?php

include './BD.php';

header('Access-Control-Allow-Origin: *');

$conexion = mysqli_connect('localhost', 'root', '', 'banca4.0');

if($_SERVER['REQUEST_METHOD']=='GET'){
    if(isset($_GET['Id_act'])){
        $query="select * from prueba where Id_act=".$_GET['Id_act'];
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    }else{
        $query="select * from prueba where Id_act";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetchAll()); 
    }
    header("HTTP/1.1 200 OK");
    exit();
}


if($_POST['METHOD']=='GETCUENTAC'){
    unset($_POST['METHOD']);
    $query= "select No_cuenta from cuenta_c";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());   
    header("HTTP/1.1 200 OK");
    exit();       
}

if($_POST['METHOD']=='GETCUENTAJ'){
    unset($_POST['METHOD']);
    $query= "select No_cuenta from cuenta_j";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());  
    header("HTTP/1.1 200 OK");
    exit();   
}

if($_POST['METHOD']=='POSTGET'){
    unset($_POST['METHOD']);
    $Id_act=$_POST['Id_act'];
    $Fecha_act=$_POST['Fecha_act'];
    $Tip_pro=$_POST['Tip_pro'];
    $Valor_act=$_POST['Valor_act'];
    $Cajero=$_POST['Cajero'];
    $No_cuenta=$_POST['No_cuenta'];
    $Estado = $_POST['Estado'];
    
    if($Estado){
        $query = "insert into act_cli(Fe_act,ti_pro,Valor,No_cajero,No_cuec,No_cuej) values ('$Fecha_act', '$Tip_pro', '$Valor_act', '$Cajero', '$No_cuenta', NULL)";
        $queryAutoIncrement="select MAX(Idact_cli) as Idact_cli from frameworks";
        $resultado=metodoPost($query, $queryAutoIncrement);
        echo json_encode($resultado);
        header("HTTP/1.1 200 OK");
        exit();
    }else{
        $query = "insert into act_cli(Fe_act,ti_pro,Valor,No_cajero,No_cuec,No_cuej) values ('$Fecha_act', '$Tip_pro', '$Valor_act', '$Cajero', NULL , '$No_cuenta')";
        $queryAutoIncrement="select MAX(Idact_cli) as Idact_cli from frameworks";
        $resultado=metodoPost($query, $queryAutoIncrement);
        echo json_encode($resultado);
        header("HTTP/1.1 200 OK");
        exit();   
    }
    header("HTTP/1.1 200 OK");
    exit();  
}

if($_POST['METHOD']=='POST'){
    unset($_POST['METHOD']);
    $Id_usu=$_POST['Id_usu'];
    $Usuario=$_POST['Usuario'];
    $Contra=$_POST['Contra'];
    $Idti_rol=$_POST['Idti_rol'];
    $query="insert into reg_usu(Id_usu, Usuario, Contra, Idti_rol) values ('$Id_usu', '$Usuario', '$Contra','$Idti_rol')";
    $queryAutoIncrement="select MAX(Id_usu) as Id_usu from frameworks";
    $resultado=metodoPost($query, $queryAutoIncrement);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='POSET'){
    unset($_POST['METHOD']);
    $Id_act=$_POST['Id_act'];
    $Fecha_act=$_POST['Fecha_act'];
    $Tip_pro=$_POST['Tip_pro'];
    $Valor_act=$_POST['Valor_act'];
    $Cajero=$_POST['Cajero'];
    $query="insert into prueba(Id_act, Fecha_act, Tip_pro, Valor_act, Cajero) values ('$Id_act', '$Fecha_act', '$Tip_pro','$Valor_act', '$Cajero')";
    $queryAutoIncrement="select MAX(Id_act) as Id_act from frameworks";
    $resultado=metodoPost($query, $queryAutoIncrement);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}


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

if($_POST['METHOD']=='DELETE'){
    unset($_POST['METHOD']);
    $Id_usu=$_GET['Id_usu'];
    $query="DELETE FROM reg_usu WHERE Id_usu='$Id_usu'";
    $resultado=metodoDelete($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

header("HTTP/1.1 400 Bad Request");


?>