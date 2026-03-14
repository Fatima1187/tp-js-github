let salaireBrut = 3500;
let anciennete = 6;
let tempsPartiel = false;

let prime = 0;

if (anciennete < 2) {
    prime = 0;
} else if (anciennete <= 5) {
    prime = 100;
} else {
    prime = 250;
}

let salaireAvecPrime = salaireBrut + prime;

if (tempsPartiel) {
    salaireAvecPrime = salaireAvecPrime / 2;
}

let cotisations = 0;

if (salaireAvecPrime <= 1500) {
    cotisations = salaireAvecPrime * 0.10;
} 
else if (salaireAvecPrime <= 3000) {
    cotisations = (1500 * 0.10) + ((salaireAvecPrime - 1500) * 0.20);
} 
else {
    cotisations = (1500 * 0.10) + (1500 * 0.20) + ((salaireAvecPrime - 3000) * 0.30);
}

let salaireNet = salaireAvecPrime - cotisations;

console.log("Salaire brut :", salaireBrut);
console.log("Prime :", prime);
console.log("Base de calcul :", salaireAvecPrime);
console.log("Cotisations :", cotisations);
console.log("Salaire net :", salaireNet);