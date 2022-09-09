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
        $query="select * from cuenta_j inner join entidad on cuenta_j.Nit = entidad.Nit where No_cuenta= 551389";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetchAll());     
     }

     exit();
}

?>