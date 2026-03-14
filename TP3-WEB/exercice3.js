let valeurs = [
    [true, true],
    [true, false],
    [false, true],
    [false, false]
];

console.log("a | b | a&&b | a||b | !a | !b");

for (let i = 0; i < valeurs.length; i++) {

    let a = valeurs[i][0];
    let b = valeurs[i][1];

    console.log(
        a, "|",
        b, "|",
        a && b, "|",
        a || b, "|",
        !a, "|",
        !b
    );
}