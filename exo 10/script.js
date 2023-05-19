function tryWord(word, base) {
    // TODO: fix jeu sensible à la casse.
    if (word === base) {
        return { "wellPlaced": base.split(''), "missplaced": [], "notInWord": [] }
    } else {
        let wellPlaced = [];
        let notInWord = [];
        let missplaced = [];

        let arrayBase = base.split('');
        let arrayWord = word.split('');

        for (let i = 0; i < arrayWord.length; i++) {
            if (arrayBase.includes(arrayWord[i]) === false) {
                notInWord.push(arrayWord[i])
                console.log("not in the world", notInWord);
            }
            else if (arrayBase[i] === arrayWord[i]) {
                wellPlaced.push(arrayWord[i]);
                console.log("wellplaced", wellPlaced);
            } else {
                missplaced.push(arrayWord[i])
                console.log("missplaced", missplaced);
            }
        }
        return { "wellPlaced": wellPlaced, "missplaced": missplaced, "notInWord": notInWord }
    }
}

function guess() {
    let base = 'dictionnaire'
    let word = document.getElementById("word").value.toLowerCase()
    let result = tryWord(word, base)
    document.getElementById("word").value = ''
    document.getElementById("try").innerText = word
    document.getElementById("well").innerText = 'Bien placé: ' + result.wellPlaced.join(',')
    document.getElementById("miss").innerText = 'Mal placé: ' + result.missplaced.join(',')
    document.getElementById("not").innerText = 'Pas dans le mot: ' + result.notInWord.join(',')
    console.log(result.wellPlaced.length);
    if (result.wellPlaced.length === word.length) {
        document.getElementById("win").innerText = 'Vous avez gagné'
    }
}