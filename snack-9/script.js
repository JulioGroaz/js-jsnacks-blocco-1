const array = [];

while (array.length<6){
    let numeroUtente = Number.parseInt(prompt('inserisci un numero'),10);

    if (Number.isNaN(numeroUtente) !== true && numeroUtente %2 !== 0){
        array.push(numeroUtente);
    }

}

console.log(array);
