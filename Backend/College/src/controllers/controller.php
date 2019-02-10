<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('content-type: application/json; charset=utf-8');

require_once 'managers/Electivas_manager.php';
require_once 'managers/Usuarios_manager.php';
require_once 'managers/Profesores_manager.php';

class Controller {

    public function __construct(){
        $this::action();
    }

    private function action(){
        $electivas_manager = new Electivas_manager();
        $usuarios_manager = new Usuarios_manager();
        $profesores_manager = new Profesores_manager();

        switch ($_SERVER['REQUEST_METHOD']) {
            case 'GET':
                $entry = $_GET;
                if(!$entry == null){
                    $action = array_shift($entry);
                }else{
                    $action = "405";
                }
                switch ($action) {
                    case 'usuarios':
                        $usuarios_manager::get($entry);    
                        break;
                    case 'electivas':
                        $electivas_manager::get($entry);
                        break;
                    case 'profesores':
                        $profesores_manager::get($entry);
                        break;
                    default:
                        $this::print_json(404,"No encontrado",null);
                        break;
                }
                break;
            case 'POST':
                $entry = json_decode(file_get_contents("php://input"), true);
                if(!$entry == null){
                    $action = array_shift($entry);
                }else{
                    $action = "405";
                }
                switch ($action) {
                    case 'usuarios':    
                        $usuarios_manager::post($entry);
                        break;
                    case 'electivas':
                        $electivas_manager::post($entry);
                        break;
                    case 'profesores':
                        $profesores_manager::post($entry);
                        break;
                    default:
                        $this::print_json(404,"No encontrado",null);
                        break;
                }
                break;
            case 'PUT':
                $entry = json_decode(file_get_contents("php://input"), true);
                if(!$entry == null){
                    $action = array_shift($entry);
                }
                switch ($action) {
                    case 'usuarios':
                        $usuarios_manager::put($entry);    
                        break;
                    case 'electivas':
                        $electivas_manager::put($entry);
                        break;
                    case 'profesores':
                        $profesores_manager::put($entry);
                        break;
                    default:
                        $this::print_json(407,"No encontrado",null);
                        break;
                }
                break;
            case 'DELETE':
                $entry = json_decode(file_get_contents("php://input"), true);
                if(!$entry == null){
                    $action = array_shift($entry);
                }else{
                    $action = "405";
                }
                switch ($action) {
                    case 'usuarios':
                        $usuarios_manager::delete($entry);    
                        break;
                    case 'electivas':
                        $electivas_manager::delete($entry);
                        break;
                    case 'profesores':
                        $profesores_manager::delete($entry);
                        break;
                    default:
                        $this::print_json(405,"Accion no permitida",null);
                        break;
                }
                break;
            default:
                $this::print_json(404,"No encontrado",null);           
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

new Controller();

?>