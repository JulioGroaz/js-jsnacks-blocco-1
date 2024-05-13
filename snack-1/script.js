//L'utente inserisce due numeri in successione, con due prompt.Il software stampa il maggiore.

const primoNumero = Number.parseInt(prompt("Inserisci un numero"));
const secondoNumero = Number.parseInt(prompt("Inserisci il secondo numero"))

if (primoNumero>secondoNumero) {
    console.log(primoNumero);
} else {
    console.log(secondoNumero);
}