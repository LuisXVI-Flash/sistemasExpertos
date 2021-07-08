<?php
    
    class Cargo_Usuario extends conexion{
        public function ECargo(){
            $this -> conectar();
        }
        public function obtenerPrivilegios($login){
            $conexion = Conexion::obtenerConexion();
            $consulta = "SELECT C.idcargo, C.cargo, U.nombre FROM cargo C, usuario U 
                         WHERE C.idcargo = U.idcargo and U.dni = '$login'";
                        
                        //echo $consulta;exit;

            $resultado = mysqli_query($conexion,$consulta);

            $datos = array();
            if($row = mysqli_fetch_array($resultado)){
                
                $_SESSION['idcargo']=$row[0];
                $_SESSION['nombreCargo']=$row[1];
                $_SESSION['trabajador']=$row[2];
                return 1;
            }else{
                return 0;
            }
        }
    }
?>