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
        public function getusuario(){

            $instancia = Conexion::obtenerConexion();
            $resultadoa = mysqli_query($instancia, "SELECT *  FROM usuario WHERE idcargo=2");
    
            while ($consultaa = mysqli_fetch_array($resultadoa)) {
                $r[] = $consultaa;
            }
            return $r;
        }
        public function registrar_paciente($nombres, $apellidos, $dni, $edad, $password) {
            $consulta = "INSERT INTO usuario (nombre, apellido, dni, edad, password, idcargo) VALUES ('$nombres', '$apellidos', '$dni', '$edad', '$password', 2)";
            $conexion = $this -> obtenerConexion();
            $resultado = $conexion -> query($consulta);
            $conexion -> close();
            //return $resultado -> fetch_all();
        }

    }
?>