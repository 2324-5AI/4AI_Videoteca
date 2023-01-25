<?php

header("Access-Control-Allow-Origin: *");

#{ "nomeCampo":"valoreCampo"}
$generi = '
    [
        {"genere": "azione"},
        {"genere": "avventura"},
        {"genere": "fantasy"},
        {"genere": "horror"},
        {"genere": "fantascientifico"},
        {"genere": "gangstar"},
        {"genere": "giallo"},
        {"genere": "thriller"},
        {"genere": "dramma"},
        {"genere": "commedia"}
    ]
';

echo $generi;
?>