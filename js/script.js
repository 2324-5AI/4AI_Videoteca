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
richiedi();

function richiedi(){
    let promise = fetch(
        "http://localhost:8080/4AInf//Server/controller.php",
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
    //non entra qua
    console.log(film);
    let catalogo = document.querySelector("#catalogoFilm");
    catalogo.innerHTML = "";
    let color;
    for(let i=0; i<film.length; i++){
        //backtick ` -> servono ad scrivere su più righe una stringa 
        //senza doverle concatenare
        let classi = ""; 
        switch(film[i].genere)
        {
            /*case "Drammatico":
                cardDiv.style.backgroundColor = "red"
                cardDiv.style.color = "white"
                break;
            case "Commedia":
                cardDiv.style.backgroundColor = "yellow"
                break;*/
            case "Fantasy":
                classi = "fantasy";
                break;
            case "Fantascientifico":
                classi = "fantascienza";
                break;
            case "Azione":
                classi = "azione";
                break;
            /*case "Film di supereroi":
                cardDiv.style.backgroundColor = "pink"
                cardDiv.style.color = "white"
                break;
            case "Avventura":
                cardDiv.style.backgroundColor = "orange"
                cardDiv.style.color = "white"
                break;*/
        }

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