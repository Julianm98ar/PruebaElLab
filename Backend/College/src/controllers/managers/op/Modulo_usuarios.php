<?php
require_once "../models/model.php";

class Modulo_usuarios extends Model {

  protected function getByCount($data){
    $params = array(0 => "");
  }

  protected function subscribeUser($data){
    $params = array(0 => "Usuarios", 1 => "Electiva_id = '{$data['Elective_id']}'", 2 => "Id_usuario" ,3 => "{$data['Id_user']}");
    $res = self::update($params);
    if($res){
      self::print_json(204,"Suceso",null);
    }else{
      self::print_json(101,"Error",null);
    }
  }

  protected function getListByTeacher($data){    
        $params = array(0 => "Valor_sub, Id_subdominio, Aux1_sub, Nombre_pro, Id_profesor", 1 => "Subdominios", 2 => "Profesores ON Electiva_pro = Id_subdominio WHERE Id_profesor = {$data['Id_teacher']}");
        $res = self::getInner($params);
        self::convert_data($res);
    }

  protected function getUsers(){
    $params = array( 0 => "Valor_sub, Id_subdominio, Descripcion_sub, Aux1_sub, Correo_usu, Id_usuario", 1 => "Subdominios", 2 => "Usuarios ON Id_subdominio = Electiva_id");
    $usuario = self::getInner($params);
    self::convert_data($usuario,"usuarios");
  }

  protected function regiterElective($data){
    $params0 = array( 0 => "Usuarios", 1 => "Electiva_Id = {$data['Elective_id']}", 2 => "Id_usuario", 3 => "{$data['Id_user']}");
    $params1 = array(0 => "Usuarios WHERE Electiva_Id = {$data['Elective_id']}");
    print_r($params1);
    $params2 = array(0 => "Subdominios WHERE Id_subdominio = {$data['Elective_id']}");
    $res0 = self::getAll($params1);
    $res1 = self::getAll($params2);
    $split = "";
    while($row = $res1->fetch_assoc()){
      $temp =$row['Aux1_sub'];
      $split = explode(" ",$temp);
    }
    $value = (int) $split[0];
    if($value > $res0->num_rows){
      self::print_json(208,"No hay cupos",null);
    } else{
      $res2 = self::update($params0);
      if($res0){
        self::print_json(204,"Suceso",null);
      }else{
        self::print_json(111,"Error de ingreso de datos",null);
      } 
    }
  }

  protected function getListByElective($data){
    $params = array(0 => "Valor_sub, Id_subdominio, Aux1_sub, Correo_usu", 1 => "Subdominios", 2 => "Usuarios ON Electiva_Id = Id_subdominio WHERE Id_subdominio = {$data['Id_subdomain']}");
    $res = self::getInner($params);
    self::convert_data($res);
  }

  protected function login($data){
    $params = array(0 => "Usuarios");
    $usuario = self::getAll($params);
    $code = 0;
    while($row = $usuario->fetch_assoc()){
      if(!strcasecmp($row['Correo_usu'],$data['email'])){
        $hash = $row['Contraseña_usu'];
        $pass = $data['password'];
        if(!strcmp($pass, $hash)){
          if($row['Rol_usu'] == "3"){
            self::print_json(205,"Suceso estudiante",null);
            $code = 205;
          }else{
            $code=204;
          }
        }
     }
  }
  if($code == 0){
    self::print_json(101,"Error no encontrado",null);
  }else if($code == 204){
    self::print_json(204,"Suceso",null);
  }

}

protected function register($data){
  if(!strcmp($data['password'], $data['retype'])){
    $params = array(0 => "Usuarios", 
      1 => "null, '{$data['email']}','".PASSWORD_HASH($data['password'], PASSWORD_DEFAULT)."', 3, 5");
    $res = self::insert($params);
    if($res){
      self::print_json(204,"Suceso",null);
    }else{
      self::print_json(111,"Error ingreso de datos",null);
    }
  }else{
    self::print_json(111,"Error de ingreso de datos",null);
  }
}

  protected function updateUser($data){
        $params = array(0 => "Usuarios", 1 => "Correo_usu = '{$data['email']}', Contraseña_usu = '{$data['password']}'", 2 => "Id_usuario" ,3 => "{$data['Id_user']}");
        $res = self::update($params);
        if($res){
            self::print_json(204,"Suceso cool",null);
        }else{
           self::print_json(101,"Error ingreso de datos",null);
        }
  }

  protected function deleteUser($data){
    $params = array(0 => "Usuarios", 1 => "Id_usuario", 2 => "{$data['Id_user']}");
    $res = self::delete($params);
    if($res){
      self::print_json(204,"Suceso",null);
    }else{
      self::print_json(101,"Error",null);
    }
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

private function print_json($status, $mensaje, $data) {
    $response['statusCode'] = $status;
    $response['statusMessage'] = $mensaje;
    $response['data'] = $data;
    print_r(json_encode($response, JSON_PRETTY_PRINT));
  }
}

?>