<?php
require_once "../db/conection.php";

class Model{
    
    protected function getInner($params){//trae datos de multiples tablas
        $connection = new conection();
        $inner = sprintf("SELECT %s FROM %s INNER JOIN %s",$params[0],$params[1],$params[2]);
        $res = $connection->query($inner);
        $connection->close();
        return $res;
    }

    protected function getFull($params){//trae datos de multiples tablas
        $connection = new conection();
        $inner = sprintf("SELECT %s FROM %s JOIN %s",$params[0],$params[1],$params[2]);
        $res = $connection->query($inner);
        $connection->close();
        return $res;
    }

    protected function findInner($params){// hace una busqueda con un inner join, y haciendo un like
        $connection = new conection();
        $in = sprintf("SELECT %s FROM %s INNER JOIN %s WHERE %s LIKE ",$params[0],$params[1],$params[2],$params[3]);
        $inner = $in."'%".$params[4]."%'";
        $res = $connection->query($inner);
        $connection->close();
        return $res;
    }

    protected function find($params){//hace una busqueda en una tabla
        $connection = new conection();
        $find = sprintf("SELECT * FROM %s WHERE %s = %s",$params[0],$params[1],$params[2]);
        $res = $connection->query($find);
        $connection->close();
        return $res;
    }

    protected function getAll($params){// trae datos de una tabla
        $connection = new conection();
        $query = sprintf("SELECT * FROM %s",$params[0]);
        $res = $connection->query($query);
        $connection->close();
        return $res;
    }

    protected function insert($params){// hace una insercion en una tabla
        $connection = new conection();
        $insert = sprintf("INSERT INTO %s VALUES(%s)",$params[0],$params[1]);
        $res = $connection->exec($insert);
        $connection->close();
        return $res;
    }

    protected function update($params){// actualiza datos en una tabla
        $connection = new conection();
        $update = sprintf("UPDATE %s SET %s WHERE %s = %s",$params[0],$params[1],$params[2],$params[3]);
        $res = $connection->exec($update);
        $connection->close();
        return $res;
    }

    protected function delete($params){//elimina datos en una tablas
        $connection = new conection();
        $delete = sprintf("DELETE FROM %s WHERE %s = %s",$params[0], $params[1], $params[2]);
        $res = $connection->exec($delete);
        $connection->close();
        return $res;
    }

}

?>