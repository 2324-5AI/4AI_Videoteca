//casa -> 80
//pc scuola -> 8080
var porta = 8080;
var indirizzoServer = "http://localhost:"+porta+"/4AInf//Server/";

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
            <div class="card-body">
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

function login(){
    let promise = fetch(indirizzoServer + "login.php", {method:'GET'});
    promise.then(
        async (risposta)=>{
            //.json() restituisce una PROMISE gestita dall'await
            console.log(await risposta.json());
            
        }
    )
}