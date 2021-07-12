<?php

require_once("../models/Conexion.php");
require_once("../models/Diagnostico.php");
$method = $_SERVER['REQUEST_METHOD']; 

session_start();
if($_SESSION['idcargo']==2){
  $idusuario=$_SESSION['idusuario'];
}else{
  $idusuario=$_SESSION['paciente_seleccionado'];
}

if($method == "GET") {
    if(!empty($_GET['id'])){
      $api = new Diagnostico();
      $obj = $api->getdiagnostico($idusuario);
      
      $json = json_encode($obj);
      echo $json;     

    }else{
      $vector = array();
      $api = new Diagnostico();
      $vector = $api->getdiagnostico($idusuario);
      
      $json = json_encode($vector);
      echo $json;
    }
}
?>