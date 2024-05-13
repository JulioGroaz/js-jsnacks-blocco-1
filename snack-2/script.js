//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
const nomi = ["Luca", "Julio", "Anna", "Gaia"];
const nomeInvitato = prompt("Come ti chiami?");

if (nomi.includes(nomeInvitato)) {
    console.log("Benvenut@ alla festa!");
} else {
    console.log("smamma, non sei nella lista!!");
}