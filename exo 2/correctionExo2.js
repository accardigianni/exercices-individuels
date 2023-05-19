
const min = 0
const max = 50
let winNumber = playerOne()

function guessNumber() {
    return parseInt(prompt("Entre un chiffre, stp"))
}

function playerOne() {
    let numberFromPlayerOne

    do {
         numberFromPlayerOne = parseInt(window.prompt("Joueur 1, entrer votre nombre" + " " + min + " < ? < " + max, 0))
    }
    while (guessNumber < min || guessNumber > max) {
        alert("Votre nombre doit être compris entre" + min + " " + "et" + " " + max)
    }
    return numberFromPlayerOne
}

function didIWin(givenNumber) {
    if (givenNumber == winNumber) {
        alert("Bravo, tu as gagné")
        return true
    }
    else if (givenNumber < winNumber) {
        alert("C'est plus grand")
    }
    else {
        alert("C'est plus petit")
    }
    return false
}

function gamePlay() {
    let number = 0
    let stock = false
    do {
        number = guessNumber()
        stock = didIWin(number)
    } while (stock == false);
}

gamePlay()