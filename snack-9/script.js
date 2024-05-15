const array = [];

while (array.length<6){
    let numeroUtente = Number.parseInt(prompt('inserisci un numero'),10);

    if (numeroUtente %2 !== 0){
        array.push(numeroUtente);
    }

}

console.log(array);
