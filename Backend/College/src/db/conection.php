<?php
require_once "../configs/config.php";
class conection{

    private $con;

    public function __construct(){
        $this->con = new Mysqli(db_host,db_user,db_pass,db_name) or die ("No se pudo establecer conexion");
        $this->con->set_charset("utf8");
        return $this->con;
    }

    public function query($sql){
        $query;
        try{
            $query = $this->con->query($sql);
            if($query->num_rows > 0){
                return $query;
            }else{
                return null;
            }
        }catch (mysqli_sql_exception $e){
            throw $e;
        }   
    }

    public function exec($sql){
        $exec;
        try{
            $exec = $this->con->query($sql);
            if($exec == 1){
                return true;
            }else{
                return false;
            }
        }catch(mysqli_sql_exception $e){
            throw $e;
        }

    } 

    public function close(){
        $this->con->close();
    }


}

?>