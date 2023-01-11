<?php 
    //Indico al server che può rispondere a chiunque 
    header("Access-Control-Allow-Origin: *");

    $dati = '
        [
            {"titolo":"Harry Potter e i doni della morte"},
            {"titolo":"Harry Potter e la pietra filosofale"}
        ]
    ';

    echo $dati;