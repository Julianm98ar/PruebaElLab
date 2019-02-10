<?php
require_once "../models/model.php";

class Modulo_profesores extends Model {

    

    protected function createTeacher($data){
        $params1 = array( 0 => "Subdominios", "null, 2, '{$data['elective']}', 'Electiva {$data['elective']}', '{$data['count']} Cupos', null, null");
        self::insert($params1);
        $params2 = array(0 => "Subdominios");
        $values = self::getAll($params2); 
        while($row = $values->fetch_assoc()){
            if(!strcasecmp($data['elective'], $row['Valor_sub'])){
                $params0 = array( 0 => "Profesores" , 1 => "null,'{$data['name']}', {$row['Id_subdominio']}");
                $res = self::insert($params0);
                if($res){
                    self::print_json(204,"Suceso",null);
                }else{
                    self::print_json(101,"Error ingreso de datos",null);
                }        
            }
        }
    }

    protected function getTeachers($data){
    $params = array( 0 => "Valor_sub, Id_subdominio, Descripcion_sub, Aux1_sub, Nombre_pro, Id_profesor", 1 => "Subdominios", 2 => "Profesores ON Id_subdominio = Electiva_pro");
        $res = self::getInner($params);
        self::convert_data($res);
    }

    protected function updateTeacher($data){
        $params = array(0 => "Profesores", 1 => "Nombre_pro = '{$data['name']}', Electiva_pro = {$data['elective']}", 2 => "Id_profesor" ,3 => "{$data['Id_teacher']}");
        $res = self::update($params);
        if($res){
            self::print_json(204,"Suceso",null);
        }else{
           self::print_json(101,"Error ingreso de datos",null);
        }
    }

    protected function deleteTeacher($data){
        $params = array(0 => "Profesores" ,1 =>"Id_profesor" ,2 => "{$data['Id_teacher']}");
        $res = self::delete($params);
        if($res){
            self::print_json(204,"Suceso",null);
        }else{
            self::print_json(101,"Error ingreso de datos",null);
        }
    }

    private function print_json($status, $mensaje, $data) {
      $response['statusCode'] = $status;
      $response['statusMessage'] = $mensaje;
      $response['data'] = $data;
      echo json_encode($response, JSON_PRETTY_PRINT);
  }

  private function convert_data($data){
     $counter = 1;
    $array;
    while($row[] = $data->fetch_assoc()){
    #$rows = $row;
    $json = json_encode($row);
  }
  echo $json;
  /*$formated = array($name => $rows);
  print_r(json_encode($formated));*/
    
    }
}

?>