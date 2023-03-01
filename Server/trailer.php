<?php

header("Access-Control-Allow-Origin: *");

$dati = file_get_contents("files/trailer.json");

$arrayTrailer = json_decode($dati);

//ISTRUZIONI PER PRELVARE I DATI ARRIVATI DAL CLIENT
$codFilm = "";
$json = file_get_contents('php://input');
$dati = json_decode($json); //Dati arrivati dal client
if(!is_null($dati)){
    //con -> accedo alle proprietà/attributi di un oggetto in PHP
    $codFilm = $dati->cod;//cod ->nome dell'attributo inviato tramite fetch
}

$i = 0;
while($i<count($arrayTrailer) && $arrayTrailer[$i]->codFilm != $codFilm){
    $i++;
}

$obj = new stdClass();
if($i<count($arrayTrailer)){
    //Ho trovato
    $obj->cod = 1;
    $obj->link = $arrayTrailer[$i]->trailer;
}else{
    $obj->cod = -1;
}

echo json_encode($obj);
?>