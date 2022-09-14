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
        $query="select DISTINCT Id_regj,Nom_ra, entidad.Id_ent, entidad.Nit from reg_solij inner join entidad on reg_solij.Id_solij = entidad.Id_ent";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetchAll());     
     }

     exit();
}

?>