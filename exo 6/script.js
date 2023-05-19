function isValidDate(date) {
    if (isCorrectDayAndMonth(date) === true && goodFormat(date) === true && goodFormatYear(date) === true) {
        return true
    }
    else {
        return false
    }
}
// console.log(isValidDate("03/04/2001"));
// console.log(isValidDate("03/14/2001"));

function isCorrectDayAndMonth(date) { //maxDaysInMonth
    let jour = parseInt(date.substring(0, 2))
    let mois = date.substring(3, 5)
    let moisEn30 = ["04", "06", "09", "11"]
    let moisen31 = ["01", "03", "05", "07", "08", "10", "12"]
    if (mois == "02" && jour > 0 && jour < 29) {
        return true
    }
    else if (moisEn30.includes(mois) && jour > 0 && jour < 31) {
        return true
    }
    else if (moisen31.includes(mois) && jour > 0 && jour < 32) {
        return true
    }
    else {
        return false
    }
}
function goodFormat(date) {
    let format = date.split("")
    if (format[2] == "/" && format[5] == "/" && format.length === 10) {
        return true
    }
    else {
        return false
    }
}

function goodFormatYear(date) {
    let year = date.substring(6, 10)
    if (year < 10000 && year > 999) {
        return true
    }
    else {
        return false
    }
}

function isDatePalindrome(date) {
    let datenoslash = date.split("/").join("")
    let reversenoslash = date.split("/").reverse().join("")
    // datesansslach = date.replace(/\//g,"")
    if (datenoslash === reversenoslash) {
        return true
    }
    else {
        return false
    }
}
// console.log(isPalindrome("11/11/1111"));
// console.log(isPalindrome("11/11/1451"))

function isPalindrome(text) {
    if (text === reversestring(text)) {
        return true
    }
    else {
        return false
    }
}
console.log(isPalindrome("pierre"))

function reversestring(string) {
    let splitstring = string.split("");
    let reversearray = splitstring.reverse()
    let joinarray = reversearray.join("")
    return joinarray
}


function getNextPalindromes(x) {
    let arrPalindrome = []
    let today = new Date()
    let jour = today.toLocaleDateString('fr')
    while (arrPalindrome.length < x) {
        if (isPalindrome(jour) == true) {
            arrPalindrome.push(jour)
        }
        today.setDate(today.getDate() + 1)
        jour = today.toLocaleDateString('fr')
    }
    return arrPalindrome
}
//console.log(getNextPalindromes(4));

// function getNextPalindromes(x) {
//     let date = "15/03/2023"
//     let result = []
//     let separated_date = date.split("/")
//     let truc
//     while (x > 0) {
//         if (isValidDate(separated_date.join("/"))) {
//             truc = separated_date[1][1] + separated_date[1][0] + separated_date[0][1] + separated_date[0][0]
//             if (separated_date[2] == truc) {
//                 result.push(separated_date.join("/"))
//                 x -= 1
//             }
//         }
//         if (parseInt(separated_date[2][3]) >= 2) {
//             if (separated_date[2][2] == "9") {
//                 if (separated_date[2][1] == "9") {
//                     separated_date[2] = String(parseInt(separated_date[2][0]) + 1) + "000"
//                 } else {
//                     separated_date[2][1] = separated_date[2][0] + String(parseInt(separated_date[2][1]) + 1) + "00"
//                 }
//             } else {
//                 separated_date[2] = separated_date[2][0] + separated_date[2][1] + String(parseInt(separated_date[2][2]) + 1) + "0"
//             }
//         } else {
//             separated_date[2] = separated_date[2][0] + separated_date[2][1] + separated_date[2][2] + String(parseInt(separated_date[2][3]) + 1)
//         }
//         separated_date[0] = separated_date[2][3] + separated_date[2][2]
//         separated_date[1] = separated_date[2][1] + separated_date[2][0]
//     }
//     return result
// }

