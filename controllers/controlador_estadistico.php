<?php
require_once("./models/Diagnostico.php");


if($_SESSION['idcargo']==2){
  $idusuario=$_SESSION['idusuario'];
  $estadistico = new Diagnostico;
  $array=$estadistico->getStadisticDiagnosesUsuario($idusuario);
  foreach ($array as $k=>$row){
      $array[$k]["y"] = floatval($row["y"]);
  }
}else{
    //estadístico general
    $estadistico = new Diagnostico;
    $array=$estadistico->getStadisticDiagnosesGeneral();
    foreach ($array as $k=>$row){
        $array[$k]["y"] = floatval($row["y"]);
    }
}

require_once("./view/vista_principal.html");
require_once("./view/estadistico.php");

?>