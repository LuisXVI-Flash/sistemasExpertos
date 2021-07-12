<?php 
require_once("./models/Usuario.php");
require_once("./models/Conexion.php");
require_once("./view/vista_principal.html");

//botones

if(isset($_POST["btngestionarr"]) or isset($_POST["verificar_usuario"] ) or isset($_POST["guardar_usuario"]) or isset($_POST["contrasenia_usuario"]) ){
    require_once("./view/FormularioCliente.html");

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
}
else if (isset($_POST['Editar'])) {
    $id = $_GET['id'];

    
    $obj_cl = new Cliente;
    $cliente = $obj_cl->obtener_un_cliente($id);
    
    require_once("./view/editar_cliente.html");
    
}else if(isset($_POST['Eliminar'])){
    $id=$_GET['id'];

    $cl = new Cliente;
    $cl->eliminarcliente($id);
    header("Location: index.php?vista=cliente");
}else if(isset($_POST['test'])){
        $a = $_POST['idcliente'];
        $nombres = $_POST['nombres'];
        $apellidos = $_POST['apellidos'];
        $correo = $_POST['correo'];
        $dni = $_POST['dni'];
        $celular = $_POST['celular'];
    
        //deberían ir restricciones???
    
        $obj_act = new Cliente;
        $obj_act->editarcliente($a,$nombres,$apellidos,$correo,$dni,$celular);
         ?>
    
         <script type="text/javascript">
             alert("Cliente modificado exitosamente");
         </script>
    
     <?php
        header("Location: index.php?vista=cliente");
        
    } else{

    require_once("./view/Formulario_listar_paciente.html");
}


//operaciones


    ?>



 <?php


// }else if(isset($_POST['test'])){
//     $a = $_POST['idcliente'];
//     $nombres = $_POST['nombres'];
//     $apellidos = $_POST['apellidos'];
//     $correo = $_POST['correo'];
//     $dni = $_POST['dni'];
//     $celular = $_POST['celular'];

//     //deberían ir restricciones???

//     $obj_act = new Cliente;
//     $obj_act->editarcliente($a,$nombres,$apellidos,$correo,$dni,$celular);
//     ?>



 <?php
//     include_once("./view/Formulario_listar_cliente.html");
//     $cliente = new Cliente;
//     $array= $cliente->listar_cliente();
    
// }else if($_GET['value']=='Regresar'){
//     include_once("./view/Formulario_listar_cliente.html");

//     $cliente = new Cliente;
//     $array= $cliente->listar_cliente();
    
// }

?>
