
// mes variables
const min = 0
const max = 50
let tryNumber = 0 
let askNumber = parseInt(window.prompt("Joueur 1, entrer votre nombre" + " " + min + " < ? < " + max, 0))

// on initialise un joueur 1(askNumber)
function playerOne() {

    while (askNumber < min || askNumber > max) {
        alert("Votre nombre doit être compris entre" + min + " " + "et" + " " + max)
        askNumber = parseInt(window.prompt("Joueur 1, entrer votre nombre", 0))
    }
    return askNumber
}


// on initialise le jeu puis le joueur 2(givenNumber) commence a jouer
function gamePlay() {
    let givenNumber = parseInt(window.prompt("Joueur 2, écris un nombre", 0))

    function didIWin(givenNumber, askNumber) {
        if (givenNumber > playerOne()) {
            alert("vise plus petit")
            if (max > givenNumber) {
                max = givenNumber
            }
            return false
        }
        else if (givenNumber < playerOne()) {
            alert("vise plus grand")
            if (min < givenNumber) {
                min = givenNumber
            }
            return false
        }
        else {
            alert("Braaavo")
            document.body.innerHTML = "<br/>" + "Bravo ! Vous avez deviné le nombre"
            return true
        }
    }
    // on boucle sur didIWin pour respecter la range dynamique et le nombre d'essaie
    while (didIWin(givenNumber) == false) {
        tryNumber = tryNumber + 1
        let lastnumber = givenNumber
        givenNumber = parseInt(window.prompt("écrire un nouveau nombre, tu as fais" + " " + tryNumber + " " + "tentative(s)" + " " + " range:" + " " + min + " < ? < " + max, lastnumber))
        if (givenNumber < min || givenNumber > max) {
            alert(" range:" + " " + min + " < ? < " + max)
        }
    }
}

playerOne()
gamePlay()






// exo 3 ok
/*let askNumber = parseInt(window.prompt("Joueur 1, entrer votre nombre", 0))

function playerOne() {
    while (askNumber < 0 || askNumber > 50) {
        alert("Votre nombre doit être compris entre 0 et 50")
        askNumber = parseInt(window.prompt("Joueur 1, entrer votre nombre", 0))
    }
    return askNumber
}
playerOne()


function gamePlay() {
    let givenNumber = parseInt(window.prompt("Joueur 2, écris un nombre", 0))

    function didIWin(givenNumber, askNumber) {
        // console.log(givenNumber)
         console.log(playerOne())

        if (givenNumber > playerOne()) {
            alert("vise plus petit")
            return false
        }
        else if (givenNumber < playerOne()) {
            alert("vise plus grand")
            return false
        }
        else {
            document.body.innerHTML = "<br/>" + "ton nombre est" + " " + givenNumber
            document.body.innerHTML = "<br/>" + "Bravo ! Vous avez deviné le nombre"
            return true
        }
    }
    while (didIWin(givenNumber) == false) {
        document.body.innerHTML = "<br/>" + "ton nombre est" + " " + givenNumber
        document.body.innerHTML = "<br/>" + "Dommage ! Essaie encore l'ami(e)"
        let lastnumber = givenNumber
        givenNumber = parseInt(window.prompt("écrire un nombre", lastnumber))

    }
}
gamePlay()*/