<?php
require_once "op/Modulo_electivas.php";

class Electivas_manager extends Modulo_electivas {

    public function get($data){//el verbo con cual se trabajara la peticion de llegada
        switch (count($data)) {//contara la cantidad de parametros y de acuerdo a eso ejecutara un caso de uso al cual se le reenviara el arreglo data
            case 1:
                self::getElective();
                break;    
            case 2:
                self::getAllElectives();
                break;
            default:
                self::print_json(404,"Accion no permitida",null);
                break;
        }
    } 

    public function post($data){//el verbo con cual se trabajara la peticion de llegada
        switch (count($data)) {//contara la cantidad de parametros y de acuerdo a eso ejecutara un caso de uso al cual se le reenviara el arreglo data
            case 1:
                # code...
                break;
            case 2:
                self::createElective($data);
                break; 
            default:
                self::print_json(405,"Accion no permitida",null);
                break;
        }
    }

    public function put($data){//el verbo con cual se trabajara la peticion de llegada
        switch (count($data)) {//contara la cantidad de parametros y de acuerdo a eso ejecutara un caso de uso al cual se le reenviara el arreglo data
            case 3:
                self::updateElective($data);
                break;
            default:
                self::print_json(405,"Accion no permitida",null);
                break;
        }
    }

    public function delete($data){// el verbo con cual se trabajara la peticion de llegada
        switch (count($data)) {//contara la cantidad de parametros y de acuerdo a eso ejecutara un caso de uso al cual se le reenviara el arreglo data
            case 1:
                # code...
                break;
            case 2:
                self::deleteElective($data);
                break;
            default:
                self::print_json(404,"No encontrado",null);
                break;
        }
    }

    private function print_json($status, $mensaje, $data) {
        $response['statusCode'] = $status;
        $response['statusMessage'] = $mensaje;
        $response['data'] = $data;
        print_r(json_encode($response, JSON_PRETTY_PRINT));
    }

}

?>