<?php

require_once "../models/model.php";

class Modulo_electivas extends Model {
    
    protected function createElective($data){#mala
        $params = array(0 => "Subdominios", 1 => "null, 2, '{$data['Sub_value']}', 'Electiva {$data['Sub_value']}', '{$data['Count_sub']} Cupos', null, null");
        $res = self::insert($params);
        if($res){
            self::print_json(204,"Suceso",null);
        }else{
            self::print_json(101,"Error ingresando datos",null);
        }
    }

    protected function getAllElectives(){
        $params = array(0 => "Subdominios WHERE Dominios_id = 2");
        $res = self::getAll($params);
        self::convert_data($res);
    }

    protected function getElective(){
    $params = array( 0 => "Dominios_id , Valor_sub, Nombre_pro, Id_subdominio, Descripcion_sub, Aux1_sub, Id_profesor" ,1 => "Subdominios" ,2 => "Profesores ON Id_subdominio = Electiva_pro WHERE Dominios_id = 2");
        $res = self::getInner($params);
        self::convert_data($res);
    }

    protected function deleteElective($data){
        $params0 = array(0 => "Subdominios", 1 => "Id_subdominio", 2 => "{$data['Id_subdomain']}");
        $params1 = array(0 => "Profesores", 1 => "Id_profesor", 2 => "{$data['Id_teacher']}");
        $res0 = self::delete($params1);
        $res1 = self::delete($params0);
        if($res0 && $res1){
            self::print_json(204,"Suceso eliminando",null);
        }else{
            self::print_json(101,"Error eliminando datos",null);
        }

    }

    protected function updateElective($data){
        $params = array(0 => "Subdominios", 1 => "Valor_sub = '{$data['Sub_value']}', Descripcion_sub = 'Electiva {$data['Sub_value']}', Aux1_sub = '{$data['Count_sub']} Cupos'", 2 => "Id_subdominio", 3 => "{$data['Id_subdomain']}");
        $res = self::update($params);
        if($res){
            self::print_json(204,"Suceso",null);
        }else{
            self::print_json(101,"Error ingresando datos",null);
        }
    }

    private function print_json($status, $mensaje, $data) {
		$response['statusCode'] = $status;
		$response['statusMessage'] = $mensaje;
		$response['data'] = $data;
		print_r(json_encode($response, JSON_PRETTY_PRINT));
    }

    private function convert_data($data){
    $counter = 1;
    $array;
    while($row[] = $data->fetch_assoc()){
        #$rows = $row;
        $json = json_encode($row);
    }
    print_r($json);
    /*$formated = array($name => $rows);
     print_r(json_encode($formated));*/
    }
}

?>