<?php

require_once "op/Modulo_profesores.php";

class Profesores_manager extends Modulo_profesores {

    public function get($data){//el verbo con cual se trabajara la peticion de llegada
        switch (count($data)) {//contara la cantidad de parametros y de acuerdo a eso ejecutara un caso de uso al cual se le reenviara el arreglo data
            case 1:
                self::getTeachers($data);
                break;   
            default:
                self::print_json(405,"Accion no permitida",null);
                break;
        }
    } 

    public function post($data){//el verbo con cual se trabajara la peticion de llegada
        switch (count($data)) {//contara la cantidad de parametros y de acuerdo a eso ejecutara un caso de uso al cual se le reenviara el arreglo data
            case 3:
                self::createTeacher($data);
                break;
            case 5:

                break; 
            default:
                self::print_json(405,"Accion no permitida",null);
                break;
        }
    }

    public function put($data){//el verbo con cual se trabajara la peticion de llegada
        switch (count($data)) {//contara la cantidad de parametros y de acuerdo a eso ejecutara un caso de uso al cual se le reenviara el arreglo data
            case 1:
                # code...
                break;
            case 3:
                self::updateTeacher($data);
                break;
            default:
                self::print_json(405,"Accion no permitida",null);
                break;
        }
    }

    public function delete($data){// el verbo con cual se trabajara la peticion de llegada
        switch (count($data)) {//contara la cantidad de parametros y de acuerdo a eso ejecutara un caso de uso al cual se le reenviara el arreglo data
            case 1:
                self::deleteTeacher($data);
                break;
            default:
                self::print_json(405,"Accion no permitida",null);
                break;
        }
    }

    private function print_json($status, $mensaje, $data) {
        header("HTTP/1.1 $status $mensaje");
        header("Content-Type: application/json; charset=UTF-8");
        $response['statusCode'] = $status;
        $response['statusMessage'] = $mensaje;
        $response['data'] = $data;
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
}

?>