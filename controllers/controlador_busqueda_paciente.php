<?php

require_once("../models/Conexion.php");
require_once("../models/Usuario.php");
$method = $_SERVER['REQUEST_METHOD']; 


if($method == "GET") {
    if(!empty($_GET['id'])){
      $api = new Usuario();
      $obj = $api->getusuario();
      
      $json = json_encode($obj);
      echo $json;     

    }else{
      $vector = array();
      $api = new Usuario();
      $vector = $api->getusuario();
      
      $json = json_encode($vector);
      echo $json;
    }
}
?>