/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
:avviso:  Ricordatevi che oggi pomeriggio ci sarà il recap sulle funzioni :paperella: :party_blob:
Buon lavoro! :muscolo: */


// Creare un array per i 5 numeri "numeri casuali"
// PER ogni indice dell'array generare un numero casuale da 1 a 100
//      SE un numero generato casualmente è già presente nell'array generarne un altro
//      Aggiungere il numero all'array
//      Quando l'array è pieno proseguire
// ---

// Mostrare i numeri nella pagina
// ---

// Creare un timer di 30 secondi e avviarlo

// Al termine del timer nascondere i numeri

// Creare un array per contenere i numeri dati dal giocatore "numeri giocatore" 
// Chiedere al giocatore di inserire i numeri uno alla volta
//      SE un numero è gia stato inserito nell'array, chiedere al giocatore di inserire un altro numero
//      Inserire il singolo numero nell'array
//      Quando l'array è pieno proseguire

// PER ogni ogni numero dell'array numeri giocatore confrontare ogni numero dell array numeri casuali
//      SE il singolo numero è presente inserie il numero nell'array numeri indovinati
//      Terminato il controllo degli array proseguire

// SE l'array numeri indovinati è lungo quanto l'array numeri casuali mostrare il messaggio "HAI VINTO" e tutti i numeri indovinati 
//      ALTRIMENTI SE l'array numeri indovinati contiene 0 valori mostra il messagio "hai perso, non hai indovinato nessun numero"
//      ALTRIMENTI SE l'array numeri indovinati contiene un valore mostra il messaggio "Hai perso, hai indovinato solo un numero:" e il valore contenuiteo in numeri indovinati
//      ALTRIMENTI mostrare il messaggio "Hai perso! Hai indovinato" lunghezza dell'array numeri indovinati "numeri! I numeri indovinati sono: "
//          PER ogni numero di numeri indovinati stamapre a schermo il numero 


// Start Game
// Recuperare l'elemento del DOM per inserire i numeri
const allRandomsNumbersElement = document.getElementById("random-numbers");
const countdownElement = document.getElementById("countdown");
const randomNumbersArray = getRndArrayOfInt(5,1,100);
console.log(allRandomsNumbersElement,randomNumbersArray);

for (let i = 0; i < randomNumbersArray.length; i++) {
    thisRandomNumber = randomNumbersArray[i];
    allRandomsNumbersElement.innerHTML += (`<span>${thisRandomNumber}</span>`);
}

let timer = setTimeout(function() {
    allRandomsNumbersElement.classList.add("hidden");
    console.log("finit");
}, 10);


let timeLeft = 30;
let countdown = setInterval(function() {
    timeLeft--;
    if (timeLeft > 0) {
        countdownElement.innerHTML = timeLeft;
    } else {
        countdownElement.innerHTML = "TEMPO SCADUTO!";
        countdown = clearInterval();
    }
}, 1000);

userNumbersArray = userNumbersToRequest(randomNumbersArray.length);

guessNumbersArray = arrayComparator(randomNumbersArray, userNumbersArray);

console.log("COPARE", guessNumbersArray, guessNumbersArray.lenght, "random", randomNumbersArray, randomNumbersArray.length);

//Messages
if (guessNumbersArray.lenght === randomNumbersArray.lenght) {
    showMessage(`HAI VINTO! Hai indovinato tutti i numeri: ${guessNumbersArray}`)
} else if (guessNumbersArray.lenght < randomNumbersArray.lenghte && guessNumbersArray.lenght > 0) {
    showMessage(`HAI PERSO! Hai indovinato ${guessNumbersArray.length} su ${randomNumbersArray}: ${guessNumbersArray}`);
} else if (guessNumbersArray.length === 0) {
    showMessage(`HAI PERSO! Non hai indovinato nessun numero!`);
} 
/**
 * Description Confronta due array della stessa lunghezza (o comunque fino alla fine del primo array-attributo) e ne copia i valori presenti in entrambi in un array di ritorno
 * @param {array} firstArray Primo array (determina la lunghezza del confronto)
 * @param {array} secondArray Secondo array
 * @returns {array} Array di ritorno
 */
function arrayComparator(firstArray, secondArray) {
    let identicalArray = [];
    for (let i = 0; i < firstArray.length; i++) {
        thisValue = firstArray[i];
        if (secondArray.includes(thisValue)) {
            identicalArray.push(thisValue);
        }
    }

    return identicalArray;
}
// FUNCTIONS
/**
 * Description La funzione chiede all'utente di inserire numeri quanti sono i numeri richiesti dal parametro e li inserisce nell'array di ritorno
 * @param {number} userNumbersLengthArray Lunghezza dell'array di ritorno
 * @returns {array} userReturnArray L'array di ritorno
 */
function userNumbersToRequest(userNumbersLengthArray) {
    userReturnArray = [];
    for (let i = 0; i < userNumbersLengthArray; i++) {
        const question = (parseInt(prompt(`Inserisci un numero (${i+1}/${userNumbersLengthArray})`)));

        userReturnArray.push(question);
    }

    return userReturnArray;
}

/**
 * Description Funzione che crea un array di numeri casuale e non ripetuti delle dimensioni volute
 * @param {number} arrayDimension Numero di indici dell'array
 * @param {number} minNumber Minimo del singolo numero
 * @param {number} maxNumber Massimo del singolo numero
 * @returns {array} Array di numeri interi casuali non ripetuti
 */
function getRndArrayOfInt(arrayDimension, minNumber , maxNumber) {

    let arrayReturn = [];

    while (arrayReturn.length < arrayDimension) {
        const thisRndNumber = getRndInt(minNumber, maxNumber);
        console.log("casuale", thisRndNumber);

        if (!arrayReturn.includes(thisRndNumber)){
            arrayReturn.push(thisRndNumber);
        }
    }

    return arrayReturn;
}

/**
 * Description Mostra il messaggio fornito
 * @param {string} text Testo del messaggio
 * @returns {}
 */
function showMessage(text){
    alert(text);
}

/**
 * Description funzione per ottenere un numero intero random tra min e max compresi 
 * @param {number} min minimo
 * @param {number} max massimo
 * @returns {number} numero casuale 
 */
function getRndInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

