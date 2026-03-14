function convertirSecondes(secondes) {

    if (secondes < 60) {
        console.log(secondes + " seconde(s)");
    }

    else if (secondes < 3600) {

        let minutes = Math.floor(secondes / 60);
        let reste = secondes % 60;

        console.log(minutes + " minute(s) et " + reste + " seconde(s)");
    }

    else if (secondes < 86400) {

        let heures = Math.floor(secondes / 3600);
        let reste = secondes % 3600;

        let minutes = Math.floor(reste / 60);
        let sec = reste % 60;

        console.log(heures + " heure(s), " + minutes + " minute(s) et " + sec + " seconde(s)");
    }

    else {

        let jours = Math.floor(secondes / 86400);
        let reste = secondes % 86400;

        let heures = Math.floor(reste / 3600);
        reste = reste % 3600;

        let minutes = Math.floor(reste / 60);
        let sec = reste % 60;

        console.log(jours + " jour(s), " + heures + " heure(s), " + minutes + " minute(s) et " + sec + " seconde(s)");
    }
}

convertirSecondes(45);
convertirSecondes(130);
convertirSecondes(3725);
convertirSecondes(90061);
convertirSecondes(172800);