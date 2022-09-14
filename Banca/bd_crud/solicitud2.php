<?php

include './BD.php';

header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD']=='GET'){
    $query="select DISTINCT Id_regj,Nom_ra, entidad.Id_ent, entidad.Nit from reg_solij inner join entidad on reg_solij.Id_solij = entidad.Id_ent";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll()); 
    header("HTTP/1.1 200 OK");
    exit();
}

?>