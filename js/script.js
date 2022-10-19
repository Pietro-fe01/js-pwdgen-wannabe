/* CONSEGNA ESERCIZIO:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito76
*/
"use strict";

const userFirstName = prompt("Inserisci il tuo Nome:"); //Inserisci il nome

const userLastName = prompt("Inserisci il tuo Cognome:"); //Inserisci il cognome

let userFavoriteColor = prompt("Qual è il tuo colore preferito?"); //Inserisci il tuo colore preferito

const passwordGenerator = `${userFirstName}${userLastName}${userFavoriteColor}76`; //Concateno le tre informazioni dentro la variabile 'passwordgenerator'

console.log(passwordGenerator); //stampo la password generata nella console

document.getElementById("ms-name").innerHTML = userFirstName;

document.getElementById("ms-last-name").innerHTML = userLastName;

document.getElementById("ms-fav-color").innerHTML = userFavoriteColor;

document.getElementById("password").innerHTML = passwordGenerator; //stampo la password geberata all'interno della pagina HTML