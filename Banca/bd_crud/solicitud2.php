<?php

include './BD.php';

header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD']=='GET'){
    $query="select * from reg_solij inner join entidad on reg_solij.Nit = entidad.Nit";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll()); 
    header("HTTP/1.1 200 OK");
    exit();
}

?>