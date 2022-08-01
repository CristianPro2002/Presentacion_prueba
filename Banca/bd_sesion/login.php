<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
    include "bd.php";
    $mysqli = conectarBD();
    //sleep(1);	
	$JSONData = file_get_contents("php://input");
	$dataObject = json_decode($JSONData);    
    session_start();    
    $mysqli->set_charset('utf8');
	    
	$usuario = $dataObject-> Usuario;
	$pas =	$dataObject-> Contra;
    
  if ($nueva_consulta = $mysqli->prepare("SELECT 
  reg_usu.Usuario, reg_usu.Contra, reg_usu.Idti_rol, reg_usu.Id_usu, tip_rol.Nom_rol
  FROM reg_usu
  INNER JOIN tip_rol ON reg_usu.Idti_rol = tip_rol.Idti_rol
  WHERE Usuario = ?")) {
        $nueva_consulta->bind_param('s', $usuario);
        $nueva_consulta->execute();
        $resultado = $nueva_consulta->get_result();
        if ($resultado->num_rows == 1) {
            $datos = $resultado->fetch_assoc();
             $encriptado_db = $datos['Contra'];
            if ($encriptado_db === $pas)
            {
                $_SESSION['Usuario'] = $datos['Usuario'];
                echo json_encode(array('conectado'=>true,'Usuario'=>$datos['Usuario'], 'Id_usu'=>$datos['Id_usu'], 'Idti_rol'=>$datos['Idti_rol']  ) );
              }

               else {

                 echo json_encode(array('conectado'=>false, 'error' => 'La clave es incorrecta, vuelva a intentarlo.'));
                    }
        }
        else {
              echo json_encode(array('conectado'=>false, 'error' => 'El usuario no existe.'));
        }
        $nueva_consulta->close();
      }
      else{
        echo json_encode(array('conectado'=>false, 'error' => 'No se pudo conectar a BD'));
      }
 // }
$mysqli->close();
?>