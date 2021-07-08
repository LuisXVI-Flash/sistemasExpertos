<?php
    
    if(isset($_POST["login"]) and isset($_POST["password"])){
        //validaciones

        

        $password=md5($_POST["password"]);
        $login=$_POST["login"];
        //comprobacion de trabajador
include_once("./models/Usuario.php");
            $objUser = new Usuario;
            $respuesta = $objUser -> validarUsuario($login,$password);
            
            if($respuesta==0){
                
                include_once("./view/formulario_Mensaje.html");
                $objMensaje = new formMensajeSistema;
                $objMensaje -> formMensajeSistemaShow("No existe usuario con esos datos o esta deshabilitado","index.php");
            }else{
                include_once("./models/Cargo_Usuario.php");
                abrir_sesion();
                $objDetalle = new Cargo_Usuario;
                $resultado = $objDetalle -> obtenerPrivilegios($login);
                if($resultado == 1){
                    
                    header("Location: index.php");
                }else{
                    include_once("./view/formulario_Mensaje.html");
                    $objMensaje = new formMensajeSistema;
                    $objMensaje -> formMensajeSistemaShow("El usuario actual no cuenta con cargo","index.php"); 
                }
                
            }
    }else{
        require_once("./view/formulario_login.html");
    }
         
            
            
        
    
?>