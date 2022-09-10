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
        
    $query="select * from client_co inner join ti_sol on client_co.Idti_sol = ti_sol.Idti_sol where No_ide=123";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetchAll());     
     }

     exit();
}

?>