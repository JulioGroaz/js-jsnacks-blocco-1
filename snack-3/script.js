//Crea un array vuoto.Chiedi per 6 volte all'utente di inserire un numero,se è dispari inseriscilo nell'array.

const numeriUtente = [];

for ( i=0 ; i<6 ; i++){
    const numeroUtente = Number.parseInt(prompt("Inserisci un numero intero"),10);
    if (numeroUtente % 2 === 1){
        numeriUtente.push(numeroUtente);
        console.log(numeriUtente );
    }
};