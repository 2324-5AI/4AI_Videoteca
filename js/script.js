/* 
    PROMISE 
        1. chiamata asincrona in sincrona -> WAIT
        2. rendere più leggibile e gestibile la 
                risposta di una chiamata asincrona -> THEN e CATCH
*/

/* 
        AWAIT --- ASYNC 
    Servono a rendere più leggibile l'utilizzo delle promise

    OBIETTIVI 
    ASYNC viene usata nella definizione di funzioni
    AWAIT può essere usata solo in funzioni ASYNC.

*/

wait();

async function wait(){
    let promise = new Promise(
        (resolve)=>{
            setTimeout(function(){
                resolve("TIMER SCATTATO");
            }, 10000);
        }
    );

    //Quando il timeout terminerà verrà inserito 
    //in risultato "TIMER SCATTATO"
    let risultato = await promise; 
    alert(risultato);
}


function richiedi(){
    let promise = fetch(
        "http://localhost/4A/videoteca/Server/controller.php",
        {
            method:'GET'
        }
    ); 
    promise.then(
        async (risposta)=>{
            //.json() restituisce una PROMISE gestita dall'await
            let film = await risposta.json();
            aggiornaFILM(film);
        }

        //GESTISCO la PROMISE di .json SENZA AWAIT e ASYNC
        //(risposta)=>{risposta.json().then((dati)=>{aggiornaFilm(dati)})}
    )
}

function aggiornaFILM(film){
    console.log(film);
    let catalogo = document.querySelector("#catalogoFilm");
    catalogo.innerHTML = "";
    for(let i=0; i<film.length; i++){
        let card = `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">`+ film[i].titolo +`</h5>
            <p class="card-text">`+ film[i].desc +`</p>
            </div>
        </div>`;
        catalogo.innerHTML += card;
    }
    
}