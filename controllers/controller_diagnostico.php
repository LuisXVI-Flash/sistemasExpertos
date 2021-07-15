<?php

include_once("../models/Diagnostico.php");
$diagnostico = new Diagnostico;
date_default_timezone_set('America/Lima');
$hoy=date("Y-m-d");
session_start();
$idusuario=$_SESSION['idusuario'];
$enfermedad=$_POST['enfermedad'];

$diagnostico->registrarDiagnostico($hoy,$enfermedad,$idusuario);
var_dump("<pre>", $diagnostico) ;

?>