<?php

header("Access-Control-Allow-Origin: *");

$dati = '
    [
        {
            "codFilm":1, 
            "trailer":"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjijd_6uZf9AhXj57sIHS1uDOYQyCl6BAgOEAM&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Do7nkJDjuSp4&usg=AOvVaw1ExcAQqNr1uLW27SRuO2mw"
        }
    ]
';
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