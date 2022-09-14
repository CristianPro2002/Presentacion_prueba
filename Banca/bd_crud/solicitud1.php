<?php

include './BD.php';

header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD']=='GET'){
    $query="select DISTINCT Id_reg, Pri_nom, client_co.Id_client, client_co.No_ide  from reg_soli inner join client_co on reg_soli.id_soli = client_co.Id_client";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

?>