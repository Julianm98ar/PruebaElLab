<?php

require_once "op/Modulo_usuarios.php";

class Usuarios_manager extends Modulo_usuarios {

    public function get($data){//el verbo con cual se trabajara la peticion de llegada
        switch (count($data)) {//contara la cantidad de parametros y de acuerdo a eso ejecutara un caso de uso al cual se le reenviara el arreglo data
            case 1:
                self::getUsers();
                break;
            case 2:
                self::getListByElective($data);
                break;        
            default:
                print "Esta accion no es valida";
                break;
        }
    } 

    public function post($data){//el verbo con cual se trabajara la peticion de llegada
        switch (count($data)) {//contara la cantidad de parametros y de acuerdo a eso ejecutara un caso de uso al cual se le reenviara el arreglo data
            case 1:
                self::getListByTeacher($data);
                break;
            case 2:
                self::login($data);
                break;
            case 3:
                self::regiterElective($data);
                break;
            case 4:
                self::register($data);
                break;
            default:
                self::print_json(404, "No enecontrado", null);
                break;
        }
    }

    public function put($data){//el verbo con cual se trabajara la peticion de llegada
        switch (count($data)) {//contara la cantidad de parametros y de acuerdo a eso ejecutara un caso de uso al cual se le reenviara el arreglo data
            case 2:
                self::subscribeUser($data);
                break;
            case 3:
                self::updateUser($data);
                break;
            
            default:
                self::print_json(405, "Accion no permitida", null);
                break;
        }
    }

    public function delete($data){// el verbo con cual se trabajara la peticion de llegada
        switch (count($data)) {//contara la cantidad de parametros y de acuerdo a eso ejecutara un caso de uso al cual se le reenviara el arreglo data
            case 1:
                self::deleteUser($data);
                break;
            
            default:
                self::print_json(405, "Accion no permitida", null);
                break;
        }
    }

    private function print_json($status, $mensaje, $data) {
        $response['statusCode'] = $status;
        $response['statusMessage'] = $mensaje;
        $response['data'] = $data;
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
}

?>