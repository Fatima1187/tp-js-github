let prenom = "Fatima";
let age = 20;
let motDePasse = "password123";
let confirmation = "password123";
let pays = "maroc";

let erreurs = [];

if (prenom.length < 2) {
    erreurs.push("Le prénom doit contenir au moins 2 caractères.");
}

if (!Number.isInteger(age) || age < 13 || age > 120) {
    erreurs.push("L'âge doit être entre 13 et 120.");
}

if (motDePasse.length < 8) {
    erreurs.push("Le mot de passe doit contenir au moins 8 caractères.");
}

if (motDePasse !== confirmation) {
    erreurs.push("Les mots de passe ne sont pas identiques.");
}

let paysAutorises = ["maroc"];

if (!paysAutorises.includes(pays)) {
    erreurs.push("Pays non autorisé.");
}

if (erreurs.length === 0) {
    console.log("Compte créé avec succès.");
} else {
    for (let i = 0; i < erreurs.length; i++) {
        console.log(erreurs[i]);
    }
}
