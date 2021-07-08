<?php
    
    class Usuario extends conexion {
        
        public function validarUsuario($login,$password){
            $conexion = Conexion::obtenerConexion();
            $consulta = "SELECT dni FROM usuario where dni = '$login' AND password= '$password' AND estado = 1";
            
            $resultado = mysqli_query($conexion,$consulta);
            $aciertos = mysqli_num_rows($resultado);
            if($aciertos==1)
                return(1);
            else
                return(0);
        }
    }
?>