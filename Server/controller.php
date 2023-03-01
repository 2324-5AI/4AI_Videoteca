<?php 
    //Indico al server che può rispondere a chiunque 
    header("Access-Control-Allow-Origin: *");

    echo file_get_contents("files/film.json");
