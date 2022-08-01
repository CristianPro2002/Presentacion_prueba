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
    $this->Image('img/logo.png',10,8,50);
    $this->SetXY(55,50);
    $this->Cell(100,8,'Reporte de Cajero',0,0,'C',0);
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
$pdf->Cell(30, 6,'Id', 1, 0, 'C', 1);
$pdf->Cell(50, 6,utf8_decode('Fecha de transacción'), 1, 0, 'C', 1);
$pdf->Cell(50, 6,'Tipo de producto', 1, 0, 'C', 1);
$pdf->Cell(30, 6,'Valor', 1, 0, 'C', 1);
$pdf->Cell(30, 6,utf8_decode('N° Cajero'), 1, 1, 'C', 1);

$pdf->setFont('Arial', '', 10);
$query = "SELECT * FROM prueba";
$resultado = $mysqli->query($query);
while($fila = $resultado->fetch_assoc()){
    $pdf->Cell(30, 6, $fila['Id_act'], 1, 0, 'C');
    $pdf->Cell(50, 6, utf8_decode($fila['Fecha_act']), 1, 0, 'C');
    $pdf->Cell(50, 6, utf8_decode($fila['Tip_pro']), 1, 0,'C');
    $pdf->Cell(30, 6,'$'.utf8_decode($fila['Valor_act']),1, 0, 'C');
    $pdf->Cell(30, 6, utf8_decode($fila['Cajero']), 1, 1,'C');
}
$pdf->Output();

?>




