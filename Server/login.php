<?php

    header("Access-Control-Allow-Origin: *");
    $obj = new stdClass();

    $nome = "";
    //Verifico se esiste la chiave (key) nome in $_POST
    if(isset($_POST["nome"])){
        $nome = $_POST["nome"];
    }

    if($nome == "Daniele"){
        $obj->login = true;
        $obj->cod = 1;
    }else{
        $obj->cod = -1;
    }

    echo json_encode($obj);

?>
