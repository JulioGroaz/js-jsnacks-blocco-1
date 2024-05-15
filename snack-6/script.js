//Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.


const Numeri = [1,34,55,64,7,90,2,39];

let numeriPari;
let numeriDispari;
for(let i=0; i <Numeri; i++){
    if(Numeri[i] %2 === 0){
       let numeriPari = Numeri[i];
    } else {
        let numeriDispari = Numeri[i];
    }

}
document.getElementById("rosso").innerHTML= numeriDispari; 
document.getElementById("verde").innerHTML= numeriPari; 
