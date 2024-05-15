//Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const arrayUno =[2,5,78,300];
const arrayDue =[777,888,2,1,4,3,5,6,29];

while (arrayUno.length !== arrayDue.length){
    if(arrayUno < arrayDue){
        arrayUno.push(X);
    }
}
console.log(arrayUno);
console.log(arrayDue);