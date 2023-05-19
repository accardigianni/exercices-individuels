// let deck = [];

// function createDeck() {
//     let tete = ["As", "J", "Q", "K"];
//     let symbole = ["♠︎", "♣︎", "♡", "♢"];
//     let decompteTete = 1;

//     // Créer un tableau avec toutes les combinaisons possibles
//     let combinations = [];
//     for (let i = 0; i < 4; i++) {
//         for (let j = 0; j < 13; j++) {
//             if (j === 0) {
//                 combinations.push(tete[0] + symbole[i]);
//             } else if (j > 0 && j < 10) {
//                 combinations.push((j + 1) + symbole[i]);
//             } else {
//                 combinations.push(tete[decompteTete] + symbole[i]);
//                 decompteTete++;
//             }
//         }
//         decompteTete = 1;
//     }
//     // Mélanger les combinaisons de manière aléatoire
//     while (combinations.length > 0) {
//         const randomIndex = Math.floor(Math.random() * combinations.length);
//         const card = combinations.splice(randomIndex, 1)[0];
//         deck.push(card);
//     }
// }

// function deal(nbCartes) {
//     let pickCard = []
//     console.log(deck)
//     for (let i = 0; i < nbCartes; i++) {
//         pickCard.push(deck.shift())
//     }
//     console.log(pickCard)
// }

// function flop() {
//     let tour = 0
//     let cards = []
//     for (let i = 0; i < 3; i++) {
//         if (tour == 0) {
//             deck.shift()
//             for (let j = 0; j < 3; j++) {
//                 cards.push(deck.shift())
//             }
//             tour++
//         } else if (tour == 1) {
//             deck.shift()
//             cards.push(deck.shift())
//             tour++
//         } else if (tour == 2) {
//             deck.shift()
//             cards.push(deck.shift())
//             tour = 0
//         }
//         console.log(cards)
//     }
// }

// createDeck();
// const player1 = deal(2)
// const player2 = deal(2)
// flop()

class Carte {
    constructor(valeur, couleur) {
        this.valeur = valeur;
        this.couleur = couleur;
        this.symbole = this.getSymbole();
    }

    getSymbole() {
        switch (this.couleur) {
            case "Coeur":
                return "♥";
            case "Carreau":
                return "♦";
            case "Pique":
                return "♠";
            case "Trèfle":
                return "♣";
        }
    }
}

class Paquet {
    constructor() {
        this.cartes = [];
        this.creerCartes();
    }

    creerCartes() {
        const couleurs = ["Coeur", "Carreau", "Pique", "Trèfle"];
        const valeurs = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "V", "Q", "K", "As"];
        for (let couleur of couleurs) {
            for (let valeur of valeurs) {
                this.cartes.push(new Carte(valeur, couleur));
            }
        }
    }
}
const paquet = new Paquet();
paquet.cartes.sort(() => Math.random() - 0.5);
//console.log(paquet);