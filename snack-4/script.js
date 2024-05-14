//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari:

const numeriArray = [5,10,15,20,25,30,35];

let somma =0;

for(let i =0; i < numeriArray.length; i++) {
    if (i %2 !== 0) {
        sum = sum + numeriArray [i];
    }
}
console.log("somma");
