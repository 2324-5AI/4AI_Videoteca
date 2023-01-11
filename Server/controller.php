<?php 
    //Indico al server che può rispondere a chiunque 
    header("Access-Control-Allow-Origin: *");

    #{ "nomeCampo":"valoreCampo"}
    $dati = '
        [
            {"titolo":"Harry Potter e la pietra filosofale", "desc":"Un film di Chris Columbus.Fantastico - USA, 2001"},
            {"titolo":"Spider-Man - No Way Home", "desc":"Un film di Jon Watts. Azione - USA, 2021"},
            {"titolo":"Doctor Strange nel Multiverso della Follia", "desc":"(Doctor Strange in the Multiverse of Madness) Un film di Sam Raimi.Azione - USA, 2022"},
            {"titolo":"Top Gun - Maverick", "desc":"Un film di Joseph Kosinski. Azione - USA, 2022"}
        ]
    ';

    echo $dati;