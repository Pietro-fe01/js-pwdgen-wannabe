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
document.getElementById("ms-open-eye").classList.remove("fa-eye");

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
    document.getElementById("ms-closed-eye").classList.remove("fa-eye-slash");
    document.getElementById("ms-open-eye").classList.add("fa-eye");
    return indicatore = false;
  }
  function showPwdFalse(){
    document.getElementById("pwd").innerHTML = ("*".repeat(passwordGenerator.length));
    document.getElementById("ms-closed-eye").classList.add("fa-eye-slash");
    document.getElementById("ms-open-eye").classList.remove("fa-eye");
    return indicatore = true;
  }


