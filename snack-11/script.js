//Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const arrayUtente = [];
let sommatoria = 0;

while (sommatoria<50){
    let numeroArray= (Number.parseInt(prompt('inserisci un numero'),10));
    if(Number.isNaN(numeroArray)){
        console.log('Inserisci un numero valido');
    }else{
        arrayUtente.push(numeroArray);
    }

    sommatoria = sommatoria + numeroArray;

}
console.log(arrayUtente);