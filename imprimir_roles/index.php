<?php 

require 'FPDF/fpdf.php';

$mysqli = new mysqli("localhost","root","","banca4.0");

if(mysqli_connect_errno()){
    echo 'Conexion fallida: ', mysqli_connect_errno();
    exit();
}

class PDF extends FPDF
{
// Cabecera de página
function Header()
{
    $this->SetFont('Times','B',20);
    $this->Image('img/logo.png',15,8,50);
    //200 orientacion horizontal del titulo, 15 orientacion vertical del titulo
    $this->Cell(200,15,'Reporte de usuarios',0,0,'C',0);
    //orientacion de la tabla
    $this->SetXY(20,20);
    $this->Ln(20);
}

// Pie de página
function Footer()
{
    // Posición: a 1,5 cm del final
    $this->SetY(-15);
    // Arial italic 8
    $this->SetFont('Arial','B',8);
    // Número de página
    $this->Cell(170,10,'Todos los derechos reservados - @banca4.0',0,0,'C',0);
    $this->Cell(0,10,utf8_decode('Página').$this->PageNo().'/{nb}',0,0,'C'); 
}
}

// Creación del objeto de la clase heredada
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetMargins(10,10,10);
$pdf->SetAutoPageBreak(true,20);
$pdf->setFillColor(20, 190, 240);
$pdf->SetFont('Helvetica','B',12);
$pdf->Cell(40, 6,'Id usuario', 1, 0, 'C', 1);
$pdf->Cell(50, 6,utf8_decode('Nombre Usuario'), 1, 0, 'C', 1);
$pdf->Cell(50, 6,utf8_decode('Contraseña'), 1, 0, 'C', 1);
$pdf->Cell(50, 6,utf8_decode('Nombre de rol'), 1, 1, 'C', 1);

$pdf->setFont('Arial', '', 10);
$query ="SELECT * FROM reg_usu INNER JOIN tip_rol ON reg_usu.Idti_rol = tip_rol.Idti_rol";
$resultado = $mysqli->query($query);
while($fila = $resultado->fetch_assoc()){
    $pdf->Cell(40, 6, $fila['Id_usu'], 1, 0, 'C',);
    $pdf->Cell(50, 6, utf8_decode($fila['Usuario']), 1, 0, 'C');
    $pdf->Cell(50, 6, utf8_decode($fila['Contra']),1, 0, 'C');
    $pdf->Cell(50, 6, utf8_decode($fila['Nom_rol']), 1, 1,'C');
}
$pdf->Output();

?>




