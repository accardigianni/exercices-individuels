let allumette = 50
let tableau = []

// function getBackAllumette(x) {
//     x = parseInt(window.prompt("Combien d'allumette(s) souhaitez vous retirez ?, il reste " + allumette + " allumette(s)", 1))
//     if (x < 1 || x > 6) {
//         x = parseInt(window.prompt("Tu dois retirer entre 1 et 6 allumette par tour !!, il reste " + allumette + " allumette(s)", 1))
//         //console.log("x est pas ok");
//         allumette = allumette
//     }
//     else {
//         //console.log("x est ok");
//         allumette = allumette - x
//     }
//     if (allumette <= 0) {
//         console.log("tu as perdu");
//         return
//     }
//     // else {
//     //     getBackAllumette()
//     //     //appeler un fonction change player
//     // }
// }
// //getBackAllumette()

// function createplayer(y) {

// }

// function game() {

// }

function getBackAllumette(nbr) {
    allumette -= nbr
    console.log(allumette);
}

function ask_player() {
    let reponse = parseInt(window.prompt("Combien d'allumettes ..."))
    console.log(reponse);
    while (reponse == "" || isNaN(reponse) == true) {
        reponse = parseInt(window.prompt("Combien d'allumettes ..."))
    }
    getBackAllumette(reponse)
}
ask_player()



