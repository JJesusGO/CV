<?php

define("AJUSTE_HORAS",-6);

function GetFecha(){
   $diahora = time() + (AJUSTE_HORAS * 60 * 60);
   return  strval(date('Y-m-d H:i:s', $diahora));
}

function IniciarConexion(){

    $bdhost     = 'fdb16.biz.nf';      
    $bdusuario  = '3126421_solicitudes';
    $bd         = '3126421_solicitudes';
    $bdpass     = "JesusGo112196";

    $conn   = mysqli_connect($bdhost, $bdusuario, $bdpass, $bd);    
 
    return $conn;
}


function main(){
       
    $respuesta = ['estado'=>'0','mensaje'=>''];
    
    
    if(count($_POST) > 0){
        
        $conn = IniciarConexion();            
        
        $nombre  = utf8_decode($_POST['nombre']);
        $correo  = utf8_decode($_POST['correo']);
        $tipo    = utf8_decode($_POST['tipo']);
        $asunto  = utf8_decode($_POST['asunto']);
        $mensaje = utf8_decode($_POST['mensaje']);
        $fecha   = GetFecha(); 
        
        $solicitud = "INSERT INTO solicitudes(nombre,correo,tipo,asunto,mensaje,fecha) VALUES('".$nombre."','".$correo."','".$tipo."','".$asunto."','".$mensaje."','".$fecha."')";
       
        $resultado = mysqli_query($conn,$solicitud);
        if($resultado === TRUE){
            $respuesta = ['estado'=>'1','mensaje'=>'Solicitud almacenada correctamente'];
        }
        else{
            $respuesta = ['estado'=>'1','mensaje'=>'Solicitud rechazada por el servidor'];
        }
        
    }
    else{ 
        $respuesta = ['estado'=>'-1','mensaje'=>'La solicitud no contiene el formato correcto.'];
    }
   
    echo json_encode($respuesta);

}

main();

?>
