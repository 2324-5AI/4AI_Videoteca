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
        "http://localhost/4A/Es3_FETCH/Server/prova.php",
        {
            method:'GET'
        }
    ); 
    promise.then(
        async (risposta)=>{
            alert(await risposta.text());
        }
    )
}