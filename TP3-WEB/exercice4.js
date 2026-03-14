let notes = [12,7,18,5,14,9,20,3,11,16];

let somme = 0;
let max = notes[0];
let min = notes[0];

let passable = 0;
let assezBien = 0;
let bien = 0;
let tresBien = 0;
let excellent = 0;
let insuffisant = 0;

for (let i = 0; i < notes.length; i++) {

    let note = notes[i];

    somme += note;

    if (note > max) {
        max = note;
    }

    if (note < min) {
        min = note;
    }

    if (note < 10) {
        insuffisant++;
    }
    else if (note <= 11) {
        passable++;
    }
    else if (note <= 13) {
        assezBien++;
    }
    else if (note <= 15) {
        bien++;
    }
    else if (note <= 17) {
        tresBien++;
    }
    else {
        excellent++;
    }
}

let moyenne = somme / notes.length;

console.log(moyenne);
console.log(max);
console.log(min);

console.log(passable);
console.log(assezBien);
console.log(bien);
console.log(tresBien);
console.log(excellent);
console.log(insuffisant);

let reussite = notes.length - insuffisant;

if (reussite > notes.length / 2) {
    console.log("La classe est en réussite.");
} else {
    console.log("La classe est en difficulté.");
}