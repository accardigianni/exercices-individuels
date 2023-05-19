// il y à une difference entre un tableau et un dictionnaire, tableau = index, dictionnaire =( "clé" : "valeur")
const latinToMorse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..'
}
// renvoie une string dans un tableau
function getLatinCharacterList(word) {
    tableau = word.split("")
    return tableau
}
getLatinCharacterList("hello, world")

// traduit une lettre en caractère
function translateLatinCharacter(character) {
    translate = latinToMorse[character.toUpperCase()]
    return translate
}
translateLatinCharacter("a")


function encode(text) {
    let latin = getLatinCharacterList(text)
    let morse = ""
    for (i = 0; i < latin.length; i++) {
        morse += translateLatinCharacter(latin[i].toUpperCase())
    }
    return morse
}
encode("test")

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
}

function getMorseCharacterList(word) {
    tableau = word.split("")
    return tableau
}
getMorseCharacterList("--- - ---")


function translateMorseCharacter(character) {
    translate = morseToLatin[character]
    return translate
}
translateMorseCharacter("..")


function decode(morseTranslate) {
    let morse = getMorseCharacterList(morseTranslate)
    let latin = ""
    for (i = 0; i < morseTranslate.length; i++) {
        latin += translateMorseCharacter(morse[i])
        console.log(latin)
    }
}
decode('-- --- -')



