<?php
require_once("./models/Sesion.php");
require_once("./models/conexion.php");
if(isset($_GET["cerrar"])){
    session_destroy();
    header("Location: index.php");
}
if(isset($_SESSION["idcargo"])){

    require_once("./view/layout/header.php");
    
    if(isset($_GET["vista"])){
        if($_GET["vista"]=="paciente"){
            require_once("./controllers/controlador_paciente.php");
        }elseif($_GET["vista"]=="diagnosticos"){
            require_once("./view/vista_principal.html");
            require_once("./view/Listar_diagnostico.html");
        }elseif($_GET["vista"]=="estadistico"){
            require_once("./controllers/controlador_estadistico.php");
        }elseif($_GET["vista"]=="nuevo_diagnostico"){
            require_once("./view/vista_principal.html");
            require_once("./view/Nuevo_diagnostico.html");
        }else{
            require_once("./view/vista_principal.html");
        }
    }else{
        require_once("./view/vista_principal.html");
    }
    
    require_once("./view/layout/footer.php");
}else{
    require_once("./controllers/controller_Usuario.php");
}

?>