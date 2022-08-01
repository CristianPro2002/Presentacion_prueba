<?php 

require 'FPDF/fpdf.php';

$mysqli = new mysqli("localhost","root","","banca4.0");

if(mysqli_connect_errno()){
    echo 'Conexion fallida: ', mysqli_connect_errno();
    exit();
}

$query = "SELECT * FROM reg_usu INNER JOIN tip_rol ON reg_usu.Idti_rol = tip_rol.Idti_rol";
$resultado = $mysqli->query($query);

$pdf = new FPDF();
$pdf->AliasNbPages();
$pdf->AddPage();

$pdf->setFillColor(232, 232, 232);
$pdf->SetFont('Arial','B',12);
$pdf->Cell(20, 6,'Id_usu', 1, 0, 'C', 1);
$pdf->Cell(40, 6,'Usuario ', 1, 0, 'C', 1);
$pdf->Cell(40, 6, 'Contra', 1, 0, 'C',1);
$pdf->Cell(50, 6,'Nom_rol ', 1, 1, 'C', 1);




$pdf->setFont('Arial', '', 10);

while($fila = $resultado->fetch_assoc()){
    $pdf->Cell(20, 6, $fila['Id_usu'], 1, 0, 'C');
    $pdf->Cell(40, 6, utf8_decode($fila['Usuario']), 1, 0, 'C');
    $pdf->Cell(40, 6, utf8_decode($fila['Contra']), 1, 0, 'C');
    $pdf->Cell(50, 6, utf8_decode($fila['Nom_rol']), 1, 1, 'C');

   
  
  

   
}

$pdf->Output();
?>




