<?php

    header("Access-Control-Allow-Origin: *");
    //DEFINITO UN OGGETTO JSON
    $obj = new stdClass();

    $nome = "";
    //Verifico se esiste la chiave (key) nome in $_POST
    if(isset($_GET["nome"])){
        $nome = $_GET["nome"];
    }
    /*LOGIN PER CHI UTILIZZA FORM con ACTION lato client */
    if(isset($_POST["nome"])){
        $nome = $_POST["nome"];
    }
    /* PER CATTURARE I DATI JSON ARRIVATI */
    $json = file_get_contents('php://input');
    $dati = json_decode($json);
    if(!is_null($dati)){
        //con -> accedo alle proprietà/attributi di un oggetto in PHP
        $nome = $dati->nome;
    }


    $obj->get = $_GET;
    $obj->json = $dati;
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
