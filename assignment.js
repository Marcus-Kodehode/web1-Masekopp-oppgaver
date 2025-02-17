//* I denne oppgaven vil det være noe kode som er definert i forkant, ikke fjern noe av denne, men dere skal noen steder fylle dem ut videre slik at koden fungerer.

/* Oppgave 1:  

Fiks loopen for randomArray slik at man får 100 tall pushet inn i randomArray med tall mellom 1 og 1000 (sjekkes via konsoll loggen under)
Tips: For å teste at loopen tar med 1 og 1000, prøv ut først med et lavere maks tall (f.eks 5)
*/
const randomArray = [];

// Fiks denne loopen for å generere 100 tilfeldige tall mellom 1 og 1000
for (let i = 0; i < 100; i++) {
  randomArray.push(Math.floor(Math.random() * 1000) + 1); // Generer tall mellom 1 og 1000
}

console.log(randomArray); // Skriv ut arrayet for å sjekke resultatet

/* Oppgave 2

Under er en funksjon filterArray som bruker .filter metoden på odds og evens const'ene. Du skal fikse getOdds og getEvens arrow funksjonene for å hente ut de riktige dataene til de forskjellige const'ene.  
*/

// Funksjon som filtrerer ut oddetall
const getOdds = (num) => num % 2 !== 0;  // Hvis tallet er ikke delelig med 2 (altså oddetall)

// Funksjon som filtrerer ut partall
const getEvens = (num) => num % 2 === 0; // Hvis tallet er delelig med 2 (altså partall)

// Filter funksjon som filtrerer ut oddetall og partall
function filterArray(arr) {
  const odds = arr.filter(getOdds);   // Filtrer ut oddetall
  const evens = arr.filter(getEvens); // Filtrer ut partall

  // Returnerer et objekt som gjør det lettere å referere til const'ene fra funksjonen senere
  return { odds, evens };
}

// Nå kan vi filtrere arrayet med filterArray og få ut oddetallene og partallene
const { odds, evens } = filterArray(randomArray);  // Vi antar at randomArray er definert tidligere

console.log("Oddetall:", odds);  // Skriv ut oddetallene i konsollen
console.log("Partall:", evens); // Skriv ut partallene i konsollen

// legg til noe mer her for å finne alle tall som er oddetall (PSEUDO KODE: MODULO DELT PÅ TO ER STRICT LIK NULL);


/* Oppgave 3

fiks sumOfOdds og sumOfEvens ved å bruke .reduce metodene. Les her for å se hvordan syntaxen er:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

eksmepel: odds.reduce(riktig syntax)

tips: accumulator kan forkortes til acc, currentValue kan forkortes til curr
tips2: syntaxen ligner noe på det som blir gjort i oppgave 2, men det er 2 parametere istedet + et tall.

*/

// Dette kalles deconstructing som gjør at man kan referere til variabler på innsiden av et scope (i dette tilfelle fra innsiden av en funksjon):
// Fiks sumOfOdds for å bruke reduce
const sumOfOdds = odds.reduce((acc, curr) => acc + curr, 0); // Reduserer arrayet ved å summere alle tallene i oddetallene

// Fiks sumOfEvens for å bruke reduce
const sumOfEvens = evens.reduce((acc, curr) => acc + curr, 0); // Reduserer arrayet ved å summere alle tallene i partallene

console.log("Summen av oddetallene:", sumOfOdds);  // Skriv ut summen av oddetallene
console.log("Summen av partallene:", sumOfEvens); // Skriv ut summen av partallene


/* Oppgave 3.1

Skriv konsoll logger for:
    - sumOfOdds
    - sumOfEvens
    - lengden av odds
    - lengden av evens

bruk denne syntaxen i konsoll loggene (+ en ekstra ting etter variabelName hvor du skal finne lengden):
console.log("description of console log:", variabelName)

*/

// Konsoll logger for summene av oddetall og partall
console.log("Summen av oddetallene:", sumOfOdds);  // Summen av oddetallene
console.log("Summen av partallene:", sumOfEvens); // Summen av partallene

// Konsoll logger for lengden av oddetallene og partallene
console.log("Lengden av oddetall arrayet:", odds.length);  // Antall oddetall
console.log("Lengden av partall arrayet:", evens.length); // Antall partall



/* Oppgave 4 

Under skal du lage en if else logikk som skal endre result og difference til en ny verdi. Litt av logikken er med allerede som sjekker om sumOfOdds er større enn sumOfEvens. Bruk denne tankegangen videre for å lage tilsvarende logikk hvis sumOfOdds er mindre enn sumOfEvens:

    - hvordan skal du skrive difference i dette tilfelle?
    - Skriv en string som passer til dette tilfelle

Lag i tillegg en logikk som sjekker hvis verken den første eller andre contitionalen ikke stemmer. Logisk sett betyr det at den sjekker om sumOfEvens og sumOfOdds er like, men i realiteten kjøres denne koden bare fordi de to andre conditionalene ikke stemmer:

    - hvordan skal du skrive difference i dette tilfelle?
    - Skriv en string som passer til dette tilfelle

*/

// Conditional Logic
let result = "";
let difference = 0;

// Sjekker om sumOfOdds er større enn sumOfEvens
if (sumOfOdds > sumOfEvens) {
  difference = sumOfOdds - sumOfEvens;  // Beregn forskjellen
  result = "Sum of Odds is greater than Sum of Evens.";  // Beskjed om at oddetallene er større
} 
// Sjekker om sumOfOdds er mindre enn sumOfEvens
else if (sumOfOdds < sumOfEvens) {
  difference = sumOfEvens - sumOfOdds;  // Beregn forskjellen
  result = "Sum of Evens is greater than Sum of Odds.";  // Beskjed om at partallene er større
} 
// Hvis sumOfOdds er lik sumOfEvens
else {
  difference = 0;  // Forskjellen er 0 hvis de er like
  result = "Sum of Odds and Sum of Evens are equal.";  // Beskjed om at de er like
}

console.log(result);          // Skriv ut resultatet
console.log("Difference:", difference);  // Skriv ut forskjellen


/* Oppgave 4.1

konsoll log difference. Bruk samme syntax som i oppgave 3.1
*/
// Konsoll log for å vise forskjellen etter if/else-logikken
console.log("Difference:", difference);  // Dette vil vise verdien av 'difference' etter oppgave 4


/* Oppgave 5

Lag en ny conditional logikk under hvor man sjekker hvilke av odds og evens som er lengst (syntax messig er det veldig likt som i oppgave 4, men man sjekker andre ting, ikke sumOfOdds og sumOfEvens). typeDifference skal endres til en template literal string med hensiktsmessig tekst for å forklare hva som skjer.

tips: Se tilbake hva du har skrevet i oppgave 3.1 for å finne lengdene du skal bruke i denne oppgaven.

eks: 

if (this > that) {
    typeDifference = `There are ${calcutate the difference here} more this than that`
}

*/

let typeDifference;

// If/else logikk for å sjekke hvilken av odds og evens som har flest tall
if (odds.length > evens.length) {
  // Hvis det er flere oddetall enn partall
  typeDifference = `There are ${odds.length - evens.length} more odd numbers than even numbers.`;
} else if (odds.length < evens.length) {
  // Hvis det er flere partall enn oddetall
  typeDifference = `There are ${evens.length - odds.length} more even numbers than odd numbers.`;
} else {
  // Hvis antallet av oddetall og partall er likt
  typeDifference = `The number of odd and even numbers are equal.`;
}

console.log(typeDifference);  // Skriv ut forskjellen i lengden


/* Oppgave 6

- Finn gjennomsnittsverdien av oddetallene og partallene (burde være 2 nye variabler som returnerer gjennomsnittsverdien. Disse brukes i if/else du skal skrive som conditionals, men også for å vise fram riktig verdi i template literalen du skal lage)
- Lag en ny variabel for referanse til verdien du skal vise fram (tilsvarende slik typeDifference og valueDifference ble laget i de forrige oppgavene)
- Lag en ny conditional tilsvarende som i oppgave 4 og 5 for å få ut en template literal som vises på nettsiden.
- Lag en ny p tag i html filen med en id for referanse og skriv inn en ny document. getElementById for å få fanget den opp i javascript filen her:

eks: <p id="dinReferanseVerdi"></p>
eks: document.getElementByid("dinReferanseVerdiFraPtaggen").textContent = variabel


*/

// Beregn gjennomsnittet for oddetallene
const averageOdds = odds.reduce((acc, curr) => acc + curr, 0) / odds.length;

// Beregn gjennomsnittet for partallene
const averageEvens = evens.reduce((acc, curr) => acc + curr, 0) / evens.length;

// Ny variabel for template literal som viser gjennomsnittsverdien
let averageDifference;

// Hvis gjennomsnittet av oddetallene er større enn partallene
if (averageOdds > averageEvens) {
  averageDifference = `The average of odd numbers (${averageOdds.toFixed(2)}) is greater than the average of even numbers (${averageEvens.toFixed(2)}).`;
} 
// Hvis gjennomsnittet av partallene er større enn oddetallene
else if (averageOdds < averageEvens) {
  averageDifference = `The average of even numbers (${averageEvens.toFixed(2)}) is greater than the average of odd numbers (${averageOdds.toFixed(2)}).`;
} 
// Hvis gjennomsnittene er like
else {
  averageDifference = `The average of odd numbers (${averageOdds.toFixed(2)}) and even numbers (${averageEvens.toFixed(2)}) are equal.`;
}

console.log(averageDifference);  // Skriv ut forskjellen i gjennomsnittsverdien



/* BONUS Oppgave 7 


Gjør noe tilsvarende oppgave 6, men som viser noe som ikke har blitt vist enda med odds og evens.

f.eks median, størst verdi, minst verdi, hvor mange verdier er over/under en viss verdi, er noen av verdiene enn viss verdi, er noen av verdiene fra odds og evens like.

*/

// Funksjon for å finne den største verdien i et array
const largestValue = (arr) => Math.max(...arr);

// Funksjon for å finne den minste verdien i et array
const smallestValue = (arr) => Math.min(...arr);

// Funksjon for å beregne medianen av et array
const calculateMedian = (arr) => {
  arr.sort((a, b) => a - b); // Sorter arrayet
  const middle = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return (arr[middle - 1] + arr[middle]) / 2; // Hvis arrayet har et jevnt antall, ta gjennomsnittet av de to midterste
  } else {
    return arr[middle]; // Hvis arrayet har et oddetall, ta det midterste tallet
  }
};

// Funksjon for å telle hvor mange tall som er større enn en viss verdi
const countGreaterThan = (arr, value) => arr.filter(num => num > value).length;

// Funksjon for å sjekke om noen verdier i odds og evens er like
const areValuesEqual = (odds, evens) => odds.some(val => evens.includes(val));

// Beregn størst, minst og median for oddetallene og partallene
const largestOdd = largestValue(odds);
const largestEven = largestValue(evens);

const smallestOdd = smallestValue(odds);
const smallestEven = smallestValue(evens);

const medianOdd = calculateMedian(odds);
const medianEven = calculateMedian(evens);

// Antall tall større enn 5
const greaterThanFiveOdds = countGreaterThan(odds, 5);
const greaterThanFiveEvens = countGreaterThan(evens, 5);

// Sjekk om noen verdier er like mellom odd og even
const areValuesEqualInBoth = areValuesEqual(odds, evens);

// Template literal som viser resultatene
let additionalResult = `
  The largest odd value is ${largestOdd}.
  The largest even value is ${largestEven}.
  The smallest odd value is ${smallestOdd}.
  The smallest even value is ${smallestEven}.
  The median of odd numbers is ${medianOdd}.
  The median of even numbers is ${medianEven}.
  There are ${greaterThanFiveOdds} odd numbers greater than 5.
  There are ${greaterThanFiveEvens} even numbers greater than 5.
  Are there any common values between odds and evens? ${areValuesEqualInBoth ? "Yes" : "No"}.
`;

console.log(additionalResult);  // Skriv ut resultatene

// Vis på nettsiden (dersom du bruker HTML)
document.getElementById("additionalResult").textContent = additionalResult;


//! Koden under skal ikke røres. Den gjør at man får ut svaret på nettsiden:
document.getElementById("result-odds").textContent = `Sum of Odds: ${sumOfOdds}. There are ${odds.length} odds`;
document.getElementById("result-evens").textContent = `Sum of Evens: ${sumOfEvens}. There are ${evens.length} evens`;
document.getElementById("valueDifference").textContent = `Difference between sum of Odds and Evens: ${valueDifference}`
document.getElementById("typeDifference").textContent = typeDifference
// ny document.getElementById her for oppgave 6:

document.getElementById("result").textContent = result;
