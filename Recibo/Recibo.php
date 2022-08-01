<?php
$Id_act = $_POST['Id_act'];
$Fecha_act = $_POST['Fecha_act'];
$Tip_pro = $_POST['Tip_pro'];
$Valor_act = $_POST['Valor_act'];
$Cajero = $_POST['Cajero'];
$No_cuenta = $_POST['No_cuenta'];
$Nom_ra = $_POST['Nom_ra'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Reci.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" />
    <title>Factura</title>
    <style type="text/css" media="print">
        .nover {
            display: none
        }
    </style>
</head>

<body>
    <br>
    <div class="principal">
        <div class="print__section">
            <div class="container-F">
                <div class="row">
                    <div class="col-md-12 car">
                        <div class="cont">
                            <h3 class="titulo">Factura <img class="imagen" src="logo.webp" /></h3>
                        </div>
                        <div class="card">
                            <div class="float__start">
                                <h3 class="card-title">Información del cliente</h3>
                            </div>
                            <div class="float__infoss">
                                <div class="texto-cont ">
                                <label class="Black">
                                        Numero de cuenta:
                                    </label>
                                    <span><?php echo $No_cuenta ?></span>
                                    <br></br>
                                    <label class="Black">
                                        Nombre del cliente:
                                    </label>
                                    <span><?php echo $Nom_ra ?></span>
                                    <br></br>
                                    <label class="Black">
                                        Identificación del cliente:
                                    </label>
                                    <span><?php echo $Id_act ?></span>
                                    <br></br>
                                    <label class="Black">
                                        Fecha de apertura:
                                    </label>
                                    <span><?php echo $Fecha_act ?> </span>
                                    <br></br>
                                    <label class="Black">
                                        Tipo de producto:
                                    </label>
                                    <span> <?php echo $Tip_pro ?></span>
                                    <br></br>
                                    <label class="Black">
                                        N° Cajero:
                                    </label>
                                    <span><?php echo $Cajero ?></span>

                                    <div class="linea"></div>
                                    <br></br>
                                    <div class="value">
                                        <label class="Valor">Valor: $<?php echo $Valor_act ?></label>
                                    </div>
                                </div>
                            </div>
                            <footer class="bg-light text-center text-lg-start">
                                <div class="copy">
                                    © 2022 Copyright:
                                    <a class="text-dark" href="http://localhost:3000/">
                                        Banca 4.0
                                    </a>
                                </div>                    
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
        <div class="print">
            <input type="button" value="Imprimir" onclick="window.print()" class="print__button nover"/>
            <a  href="javascript:history.go(-1)" class="printa nover">Cerrar </a>        
        </div>
    </div>
</body>

</html>