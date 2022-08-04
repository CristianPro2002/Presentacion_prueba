<?php

include './BD.php';

header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD']=='GET'){
    $query="select * from reg_soli inner join client_co on reg_soli.No_ide = client_co.No_ide";
    $resultado=metodoGet($query);
    $datos = $resultado->fetchAll();
    echo json_encode($datos);
    header("HTTP/1.1 200 OK");
    exit();
}

?>