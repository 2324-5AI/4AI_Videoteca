<?php

header("Access-Control-Allow-Origin: *");

#{ "nomeCampo":"valoreCampo"}
$dati = '
    [
        {"nome":"Luca", "cognome":"Abete", "preferenze":["azione", "avventura"]},
        {"nome":"Andrew", "cognome":"Tate", "preferenze":["gangster", "fantasy", "commedie", "drammi"]},
        {"nome":"Matteo", "cognome":"Denaro Messina", "preferenze":["thriller", "gialli", "fantascienza"]}
    ]
';

echo $dati;
?>