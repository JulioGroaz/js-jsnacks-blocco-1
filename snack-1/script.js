//L'utente inserisce due numeri in successione, con due prompt.Il software stampa il maggiore.

const primoNumero = Number.parseInt(prompt("Inserisci un numero"),10);
const secondoNumero = Number.parseInt(prompt("Inserisci il secondo numero"),10);

if (primoNumero > secondoNumero) {
    console.log(primoNumero);
} else {
    console.log(secondoNumero);
}