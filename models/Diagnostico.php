<?php
if (is_file('./models/conexion.php')){
    require_once ('./models/conexion.php');
}else {
    require_once ('../models/conexion.php');
}
class Diagnostico extends Conexion{
    
    public function getdiagnostico($idusuario){

        $instancia = Conexion::obtenerConexion();
        $sql="SELECT *  FROM diagnostico WHERE idusuario=$idusuario";
        $resultadoa = mysqli_query($instancia, $sql);
        

        while ($consultaa = mysqli_fetch_array($resultadoa)) {
            $r[] = $consultaa;
        }
        return $r;
    }

    public function getStadisticDiagnosesGeneral(){
        $instancia = Conexion::obtenerConexion();
        $sql="SELECT enfermedad as label, count(*) as conteo,  
            ROUND(
              ( count(*) / ( SELECT count(*) FROM diagnostico ) * 100 ),
              2 
            ) AS y FROM diagnostico 
        GROUP BY enfermedad
        HAVING COUNT(*)>0;";
        $resultadoa = mysqli_query($instancia, $sql);
        while ($consultaa = mysqli_fetch_array($resultadoa)) {
            $r[] = $consultaa;
        }
        return $r;
    }

    public function getStadisticDiagnosesUsuario($idusuario){
        $instancia = Conexion::obtenerConexion();
        $sql="SELECT enfermedad as label, count(*) as conteo,  
            ROUND(
              ( count($idusuario) / ( SELECT count($idusuario) FROM diagnostico where idusuario = $idusuario ) * 100 ),
              2 
            ) AS y FROM diagnostico
            where idusuario = $idusuario 
        GROUP BY enfermedad
        HAVING COUNT(*)>0 ";
        $resultadoa = mysqli_query($instancia, $sql);
        while ($consultaa = mysqli_fetch_array($resultadoa)) {
            $r[] = $consultaa;
        }
        return $r;
    }
    public function registrarDiagnostico($hoy,$enfermedad,$idusuario){
        $instancia = Conexion::obtenerConexion();
        $sql = "INSERT INTO diagnostico(fecha, enfermedad, idusuario) VALUES('$hoy', '$enfermedad', $idusuario)";
        $resultado = mysqli_query($conexion,$sql);
    }

	
}

?>