function askName() {
    let nom = window.prompt("Quel est ton nom ?")
    console.log("Bonjour" + " " + nom)
    document.body.innerHTML += '<h2>' + "Bonjour" + " " + nom + '</h2>'
}

function askBirthYear() {
    let birth = parseInt(window.prompt("Quel est ton annee de naissance (format nombre) ?"))
    let birth1 = parseInt(window.prompt("quel est ton mois de naissance (format nombre) ?"))
    let actualYear = new Date().getUTCFullYear()
    let actualMonth = new Date().getUTCMonth()
    if (birth1 > actualMonth) {
        actualYear = actualYear - 1
    }
    let age = actualYear - birth
    console.log(age)
    document.body.innerHTML += '<h3>' + "Vous avez" + " " + age + " " + "ans" + '</h3>'
}
askName()
askBirthYear()


//var aujourdhui = new Date();
//var mois = aujourdhui.getUTCMonth();

//var aujourdhui = new Date();
//var annee = aujourdhui.getUTCFullYear();
//console.log(aujourdhui)
//console.log(annee)
