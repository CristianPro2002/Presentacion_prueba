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

?>