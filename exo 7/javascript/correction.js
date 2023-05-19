// EXO INDIV ALLUMETTES

// Etape1
// nbAllumettesTotal garde le compte des allumettes
let nbAllumettesTotal = 50

// Fonction enleveAllumettes, prend en parametre un nombre d'allumettes à enlever, et les enlève du total
function enleveAllumettes(nbAllumettes) {
    //nbAllumettesTotal = nbAllumettesTotal - nbAllumettes
    nbAllumettesTotal -= nbAllumettes
}

// Test
//enleveAllumettes(6)
//console.log(nbAllumettesTotal)

// Etape 2
// Demander a l'utilisateur combien d'allumettes il souhaite retirer tant qu’il y a des allumettes dans le tas. Pour rappel, on a 50 allumettes au départ. 
/*while(nbAllumettesTotal>0) {
  let nbAllumettesUser = prompt("Entrez un nombre d'allumettes à retirer") 
  enleveAllumettes(nbAllumettesUser)
  alert(nbAllumettesTotal)
}*/

// Etape 3
// Limiter le nombre d’allumettes à pouvoir être retirées de 1 à 6. Ajouter a votre jeu la notion de victoire.
function game3() {
    while (nbAllumettesTotal > 0) {
        // Solution 1
        let nbAllumettesUser = prompt("Entrez un nombre d'allumettes à retirer entre 1 et 6")
        // on verifie que le nb d'allumettes est entre 1 et 6
        if ((nbAllumettesUser >= 1) && (nbAllumettesUser <= 6)) {
            // on verifie qu'on peut bien retirer nbAllumettesUser parmis nbAllumettesTotal
            if (nbAllumettesTotal >= nbAllumettesUser) {
                enleveAllumettes(nbAllumettesUser)
            } else {
                alert("Pas assez d'allumettes restantes !")
            }
        } else {
            alert("Le nombre doit être compris entre 1 et 6")
        }

        // Solution 2
        /*let nbAllumettesUser = -1
        while ((nbAllumettesUser < 1) || (nbAllumettesUser > 6)){
          nbAllumettesUser = prompt("Entrez un nombre d'allumettes à retirer entre 1 et 6") 
        }
        enleveAllumettes(nbAllumettesUser)*/
        if (nbAllumettesTotal == 0) {
            alert("Bravo, tu as gagné !")
        }

        alert("nbAllumettesTotal :" + nbAllumettesTotal)
    }
}

// Etape 4
// Rajouter un 2eme joueur à votre jeu
function game4() {
    let joueurCourant = 0
    while (nbAllumettesTotal > 0) {
        let nbAllumettesUser = prompt("Hello joueur " + (joueurCourant + 1) + ", entrez un nombre d'allumettes à retirer entre 1 et 6")
        // on verifie que le nb d'allumettes est entre 1 et 6
        if ((nbAllumettesUser >= 1) && (nbAllumettesUser <= 6)) {
            // on verifie qu'on peut bien retirer nbAllumettesUser parmis nbAllumettesTotal
            if (nbAllumettesTotal >= nbAllumettesUser) {
                enleveAllumettes(nbAllumettesUser)
                // Le joueur courant a joué, je peux modifier la valeur de la variable joueurCourant
                joueurCourant = !joueurCourant
                // version plus longue mais acceptable
                // if (joueurCourant == 1) joueurCourant = 2
                // else joueurCourant = 1
            } else {
                alert("Pas assez d'allumettes restantes !")
            }
        } else {
            alert("Le nombre doit être compris entre 1 et 6")
        }
        if (nbAllumettesTotal == 0) {
            alert("Bravo, joueur " + (joueurCourant + 1) + ", tu as gagné !")
        }

        alert("nbAllumettesTotal :" + nbAllumettesTotal)
    }
}

//game4()

// Etape 5
// MULTIJOUEUR
function game5() {
    // Combien y a t'il de joueurs ?
    let nbJoueurs = prompt("Combien y a t'il de joueurs ?")
    let joueurCourant = 1
    while (nbAllumettesTotal > 0) {
        let nbAllumettesUser = prompt("Hello joueur " + joueurCourant + ", entrez un nombre d'allumettes à retirer entre 1 et 6")
        // on verifie que le nb d'allumettes est entre 1 et 6
        if ((nbAllumettesUser >= 1) && (nbAllumettesUser <= 6)) {
            // on verifie qu'on peut bien retirer nbAllumettesUser parmis nbAllumettesTotal
            if (nbAllumettesTotal >= nbAllumettesUser) {
                enleveAllumettes(nbAllumettesUser)
                // Le joueur courant a joué, je peux modifier la valeur de la variable joueurCourant
                if (nbAllumettesTotal == 0) {
                    alert("Bravo, joueur " + joueurCourant + ", tu as gagné !")
                    joueurCourant++
                    if (joueurCourant > nbJoueurs)
                        joueurCourant = 1
                } else {
                    alert("Pas assez d'allumettes restantes !")
                }
            } else {
                alert("Le nombre doit être compris entre 1 et 6")
            }
        }

        alert("nbAllumettesTotal :" + nbAllumettesTotal)
    }
}

game5()