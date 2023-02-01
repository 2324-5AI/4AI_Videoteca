<?php

    header("Access-Control-Allow-Origin: *");
    //DEFINITO UN OGGETTO JSON
    $obj = new stdClass();

    $nome = "";
    //Verifico se esiste la chiave (key) nome in $_POST
    if(isset($_GET["nome"])){
        $nome = $_GET["nome"];
    }


    $obj->post = $_POST;
    $obj->nome = $nome;
    if($nome == "Daniele"){
        $obj->login = true;
        $obj->cod = 1;
    }else{
        $obj->cod = -1;
    }

    //Converto l'oggetto complesso in stringa secondo la codifica JSON
    echo json_encode($obj);

?>
