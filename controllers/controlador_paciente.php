<?php 
require_once("./models/Usuario.php");
require_once("./models/Conexion.php");
require_once("./view/vista_principal.html");

//botones

if(isset($_POST["btngestionarr"])){
    require_once("./view/FormularioRegistro.html");

}elseif(isset($_POST['Agregar'])){
    $nombres = $_POST['nombres'];
    $apellidos = $_POST['apellidos'];
    $dni = $_POST['dni'];
    $edad = $_POST['edad'];
    $contrasenia=$_POST['password'];
    $password = md5($contrasenia);
    if($nombres!= null && $apellidos != null && $dni!=null && $edad!=null && $password !=NULL){
    
        $usuario = new Usuario;
        $usuario -> registrar_paciente($nombres, $apellidos, $dni, $edad, $password);
        
        $_SESSION["estado"] = true;
        $_SESSION["mensaje"] = "Paciente agregado correctamente";
        header("Location: index.php?vista=paciente");
    }    
}else if(isset($_POST['Diagnostico'])){
    $_SESSION['paciente_seleccionado']=$_GET['id'];
    require_once("./view/Listar_diagnostico.html");
}else{
    require_once("./view/Formulario_listar_paciente.html");
}

?>
