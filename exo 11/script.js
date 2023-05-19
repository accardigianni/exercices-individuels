function decoupeChaine(input) {
    let inputDecouper = []
    inputDecouper.push(input[0])
    for (i = 1; i < input.length; i++) {
        if (input[i] == input[i - 1]) {
            inputDecouper.push(input[i])
        } else {
            inputDecouper.push(" ")
            inputDecouper.push(input[i])
        }
    }
    let slicedInput = inputDecouper.join("")
    return slicedInput
}

console.log(decoupeChaine("abbcccdf"))


function decritChaine(input) {
    let textdecrit = []
    let compteur = 1
    for (i = 1; i < input.length; i++) {
        if (input[i] == input[i - 1]) {
            compteur++
            if (input[i] != input[i + 1]) {
                textdecrit.push(compteur + input[i])
                compteur = 1
            }
        } else if (input[i] != input[i - 1] && input[i] != input[i + 1]) {
            textdecrit.push(compteur + input[i])
        }
    }
    let describe = textdecrit.join("")
    return describe
}

console.log(decoupeChaine("aabbca"));

function suiteConway(carac, n) {
    let compteur = 1
    let chaine = carac
    console.log(chaine)
    while (compteur < n) {
        chaine = decritChaine(chaine)
        console.log(chaine)
        compteur++
    }
}

suiteConway("a", 3)






