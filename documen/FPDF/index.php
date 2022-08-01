<?php 

require 'PDF/FPDF/fpdf.php';

$mysqli = new mysqli("localhost","root","","bancaadsi");

if(mysqli_connect_errno()){
    echo 'Conexion fallida: ', mysqli_connect_errno();
    exit();
}

$query = "SELECT * FROM usuarios";
$resultado = $mysqli->query($query);

$pdf = new fpdf();
$pdf->AliasNbPages();
$pdf->AddPage();

$pdf->setFillColor(232,232,232);
$pdf->setFont('Arial', 'B', 12);
$pdf->Cell(20, 6, 'Id_act', 1, 0, 'C', 1);



$pdf->Output();




?>