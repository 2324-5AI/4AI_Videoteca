//casa -> 80
//pc scuola -> 8080
var porta = 8080;
var indirizzoServer = "http://localhost:"+porta+"/videoteca/Server/";

var film, generi;


richiedi();

function richiedi(){
    let promise1 = fetch(indirizzoServer + "controller.php", {method:'GET'}); 
    let promise2 = fetch(indirizzoServer + "generi.php",{method:'GET'});

    promise1.then(
        async (risposta)=>{
            //.json() restituisce una PROMISE gestita dall'await
            film = await risposta.json();
            if(typeof generi != "undefined")
                aggiornaFILM();
        }

        //GESTISCO la PROMISE di .json SENZA AWAIT e ASYNC
        //(risposta)=>{risposta.json().then((dati)=>{aggiornaFilm(dati)})}
    )

 
    promise2.then(
        async (risposta)=>{
            //.json() restituisce una PROMISE gestita dall'await
            generi = await risposta.json();
            if(typeof film != "undefined")
                aggiornaFILM();
        }
    )
}

function aggiornaFILM(){
    //non entra qua
    console.log(film);
    console.log(generi);
    let catalogo = document.querySelector("#catalogoFilm");
    catalogo.innerHTML = "";
    let color;
    for(let i=0; i<film.length; i++){
        //backtick ` -> servono ad scrivere su più righe una stringa 
        //senza doverle concatenare
        
        let classi ="";
        /* METODO 2 */
        classi = film[i].genere.toLowerCase();

        /* METODO 3 */
        /*let i=0;
        while(i<generi.length && generi[i] != film[i].genere.toLowerCase()){
            i++;
        }
        classi = generi[i];*/


        let card = `<div class="card `+ classi +`" style="width: 18rem;">
            <div class="card-body" onclick="mostraTrailer(${film[i].codFilm})">
                <h5 class="card-title">`+ film[i].titolo +`</h5>
                <h6 class="card-subtitle mb-2 text-muted">`+ film[i].regista +`</h6>
                <p class="card-text">`+ film[i].annoUscita +`</p>
                <p class="card-text">`+ film[i].attori +`</p>
                <p class="card-text">`+ film[i].genere +`</p>
            </div>
        </div>`;
        catalogo.innerHTML +=card;  
    }

    
}

function mostraTrailer(cod){
    //alert("mostra trailer:" + cod);
    //1. preparo i dati da mandare
    let data = {cod};
    //2. promise con fetch
    let promise = fetch(indirizzoServer + "trailer.php", {
        method:'POST',
        headers:{
            /* TIPO DI DATI INVIATI */
            'Content-Type':'application/json'
        },
        /* CONVERSIONE DA JSON a STRINGA */
        body:JSON.stringify(data)
    });

    //3. ANALIZZO LA RISPOSTA
    /*
    //METODO più leggibile
    promise.then(
        async (response)=>{
            let dati = await response.json();
            console.log(dati);
        }
    )
    */

    //METODO senza await e con notazione funzionale 
    /*promise.then((response)=>response.json())//Senza {} (altrimenti return)
    .then(
        (data)=>{console.log(data);}
    );*/

    //METODO senza await e senza notazione funzionale
    promise.then(
        function(response){
            return response.json();
        }
    )
    .then(
        function(data){
            //LINK -> data.link
            console.log(data);
            if(typeof data.link == "undefined"){
                alert("Trailer non presente");
            }else{
                //Nuova scheda => open(url, target)
                window.open(data.link, "_blank");
            }
        }
    );
}


function loginPOST(){
    let val = document.getElementById("txtNome").value;
    let pwd = document.getElementById("txtPwd").value;
    let data = {"ut":val, pwd};
    let promise = fetch(indirizzoServer + "login.php", {
        method:'POST',
        headers:{
            /* TIPO DI DATI INVIATI */
            'Content-Type':'application/json'
        },
        /* CONVERSIONE DA JSON a STRINGA */
        body:JSON.stringify(data)
    });
    promise.then(
        async (risposta)=>{
            //.json() restituisce una PROMISE gestita dall'await
            let dati = await risposta.json();
            console.log(dati);
            if(dati.cod==1 && dati.login==true){
                alert("Login avvenuto con successo");

                //METODO 1: Seleziono i GENERI che non voglio vedere, prelevo le card di quei generei e le nascondo
                //Filtro le card in base alle preferenze
                for(let genere of generi){
                    //Se il vettore delle preferenze non contieneil genere
                    if(!dati.preferenze.includes(genere.genere)){
                        //Nascondo le card
                        let array = document.getElementsByClassName(genere.genere);
                        for(let card of array){
                            card.style.display = "none";
                        }
                    }
                }

                //METODO 2: Cancello tutte le card e inserisco dinamicamente SOLO quelle che voglio vedere
           
                //METODO 3: prendo tutte le card e nascondo quelle che non voglio vedere
            }else
                alert("Login errato");

        }
    )
}