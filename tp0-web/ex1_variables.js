function infosEtudiant(nom, note) {
    if (note >= 10) {
        return nom + " : " + note + "/20 → Admis";
    } else {
        return nom + " : " + note + "/20 → Ajourné";
    }
}
console.log(infosEtudiant("Hiba", 14)); 
console.log(infosEtudiant("Ali", 8)); 