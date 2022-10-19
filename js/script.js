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

// Stampo le informazioni inserite dall'utente sotto le varie diciture:
document.getElementById("ms-name").innerHTML = userFirstName;

document.getElementById("ms-last-name").innerHTML = userLastName;

document.getElementById("ms-fav-color").innerHTML = userFavoriteColor;

document.getElementById("pwd").innerHTML = ("*".repeat(passwordGenerator.length));



// FUNZIONI BOTTONE PASSWORD
var indicatore = true;

function showPwd() {
    if (indicatore == true){
        showPwdTrue();
    } else {
        showPwdFalse();
    }
  }

  function showPwdTrue(){
    document.getElementById("pwd").innerHTML = passwordGenerator;
    return indicatore = false;
  }
  function showPwdFalse(){
    document.getElementById("pwd").innerHTML = ("*".repeat(passwordGenerator.length));
    return indicatore = true;
  }

