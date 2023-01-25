<?php 
    //Indico al server che può rispondere a chiunque 
    header("Access-Control-Allow-Origin: *");

      $objFilm = '[
        {
            "titolo": "Joker",
            "regista": " REG: Todd Phillips",
            "annoUscita": "A.U. 2019",
            "attori": "attori:  Joaquin Phoenix",
            "genere": "Drammatico"
        },
    
        {
            "titolo": "Twilight",
            "regista": "REG: Catherine Hardwicke",
            "annoUscita": "A.U. 2008",
            "attori": "attori: Robert Pattison ,Kristen Stewart",
            "genere": "Fantasy"
        },
    
        {
            "titolo": "Dune",
            "regista": "REG: Denis Villeneuve.",
            "annoUscita": "A.U. 2021",
            "attori": "attori: Timothée Chalamet, Zendaya",
            "genere": "Fantascientifico"
        },
    
        {
            "titolo": "Interstellar ",
            "regista": "REG: Christopher Nolan",
            "annoUscita": "A.U. 2014",
            "attori": "attori: Matthew McConaughey",
            "genere": "Fantascientifico"
        },
    
        {
            "titolo": "Una notte da leoni",
            "regista": "REG: Todd Phillips",
            "annoUscita": "A.U. 2009",
            "attori": "attori: Bradley Cooper",
            "genere": "Commedia"
        },
    
        {
            "titolo": "Il cavaliere oscuro",
            "regista": "REG: Christopher Nolan",
            "annoUscita": "A.U. 2008",
            "attori": "attori: Christian Bale",
            "genere": "Azione"
        },
    
        {
            "titolo": "Perfetti Sconosciuti",
            "regista": "REG: Paolo Genovese",
            "annoUscita": "A.U. 2016",
            "attori": "attori: Marco Giallini",
            "genere": "Commedia"
        },
    
        {
            "titolo": "L uomo di acciaio",
            "regista": "REG: Zack Snyder",
            "annoUscita": "A.U. 2013",
            "attori": "attori: Henry Cavill",
            "genere": "Azione"
        },
    
        {
            "titolo": "La vita è bella",
            "regista": "REG: Roberto Benigni.",
            "annoUscita": "A.U. 1997",
            "attori": "attori: Roberto Benigni.",
            "genere": "Drammatico"
        },
    
        {
            "titolo": "Biancaneve ",
            "regista": "REG: Tarsem Singh",
            "annoUscita": "A.U. 2012",
            "attori": " attori: Lily Collins, Julia Roberts, Armie Hammer",
            "genere": "Fantasy"
        },
    
        {
            "titolo": "Thor",
            "regista": "REG: Kenneth Branagh",
            "annoUscita": "A.U. 2011",
            "attori": " attori: Chris Hemsworth ",
            "genere": "Avventura"
        },
    
        {
            "titolo": "spider-man homecoming",
            "regista": "REG: Jon Watts",
            "annoUscita": "A.U. 2017",
            "attori": " attori: Tom Holland , Zendaya",
            "genere": "Film di supereroi"
        },
    
        {
            "titolo": "Cenerentola",
            "regista": "REG: Kenneth Branagh",
            "annoUscita": "A.U. 2015",
            "attori": "attori: Lily James",
            "genere": "Fantasy"
        },
    
        {
            "titolo": "Iron Man",
            "regista": "REG: Jon Favreau",
            "annoUscita": "A.U. 2008",
            "attori": "attori:  Robert Downey Jr.",
            "genere": "Film di supereroi"
        },
    
        {
            "titolo": "Hulk",
            "regista": "REG: Ang Lee ",
            "annoUscita": "A.U. 2003",
            "attori": " attori: Eric Bana, Jennifer Connelly, Sam Elliott, Josh Lucas, Nick Nolte",
            "genere": "Azione"
        }
    ]';

    echo $objFilm;
