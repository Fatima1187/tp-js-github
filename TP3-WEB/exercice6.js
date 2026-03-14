function estPremier(n) {

    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {

        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

let compteur = 0;

for (let i = 1; i <= 100; i++) {

    if (estPremier(i)) {
        console.log(i);
        compteur++;
    }
}

console.log(compteur);

let nombre = 501;

while (!estPremier(nombre)) {
    nombre++;
}

console.log(nombre);