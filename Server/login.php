<?php

    header("Access-Control-Allow-Origin: *");
    //DEFINITO UN OGGETTO JSON
    $obj = new stdClass();

    $persone = '
    [
        {"ut":"luca.abete", "pwd":"prova","nome":"Luca", "cognome":"Abete", "preferenze":["azione", "avventura"]},
        {"ut":"andrew.tate", "pwd":"prova","nome":"Andrew", "cognome":"Tate", "preferenze":["gangster", "fantasy", "commedie", "drammi"]},
        {"ut":"matteo.denaro", "pwd":"prova","nome":"Matteo", "cognome":"Denaro Messina", "preferenze":["thriller", "gialli", "fantascienza"]}
    ]
    ';

    $arrayPersone = json_decode($persone);

    $ut = "";
    $pwd = "";
    $json = file_get_contents('php://input');
    $dati = json_decode($json);
    if(!is_null($dati)){
        //con -> accedo alle proprietà/attributi di un oggetto in PHP
        $ut = $dati->ut;
        $pwd = $dati->pwd;
    }


    $obj->get = $_GET;
    $obj->json = $dati;
    $obj->post = $_POST;
    $obj->ut = $ut;
    $obj->pwd = $pwd;

    //RICERCA PARZIALE (Appena trovo il nome esco dal ciclo) 
    $i = 0;
    while($i<count($arrayPersone) && ($arrayPersone[$i]->ut != $ut || $arrayPersone[$i]->pwd != $pwd)){
        $i++;
    }
    if($i<count($arrayPersone)){
        //Ho trovato
        $obj->login = true;
        $obj->cod = 1;
        $obj->preferenze = $arrayPersone[$i]->preferenze;
    }else{
        $obj->cod = -1;
    }

    //Converto l'oggetto complesso in stringa secondo la codifica JSON
    echo json_encode($obj);

?>
