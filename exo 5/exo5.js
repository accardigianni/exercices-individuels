// exo 1
function sum1(tableau) {
  let somme = 0
  for (i = 0; i < tableau.length; i++) {
    somme += tableau[i]
  }
  // console.log(somme)
  return somme
}
//sum1([1, 2, 3])

//exo 2
function sum2(tableau) {
  if (tableau.length === 0) {
    return 0
  }
  let elem = tableau.shift()
  //console.log(elem)
  //console.log(elem + sum2(tableau))
  return elem + sum2(tableau)
}
//console.log(sum2([1, 2, 4]))

// exo 3
function Factoriel(num) {
  if (num === 0) {
    return 1;
  }
  let elem = num - 1
  //console.log(elem)
  //console.log(num)
  return num * Factoriel(elem);
}
//console.log(Factoriel(3))

//exo 4
/* while méthode
function fibonacci(x) {
  let tab = [0, 1]
  let suite = []
  if (x <= 2) {
    for (let i = 0; i < x; i++) {
      suite.push(tab[i])
      console.log(suite)
    }
  }
  suite = tab
  let boucle = 3
  while (boucle <= x) {
    let last = suite[suite.length - 1]
    let a = suite[suite.length - 2]
    let b = last + a
    suite.push(b)
    boucle++
  }
  return suite
}
console.log(fibonacci(10))*/


// ma méthode
function fibonacci(x, tab = [0, 1]) {
  let suite = []
  let detect = false
  if (x < 3 && detect === false) {
    for (let i = 0; i < x; i++) {
      suite.push(tab[i])
    }
    return suite
  }
  suite = tab
  detect = true
  suite.push(suite[suite.length - 1] + suite[suite.length - 2])
  fibonacci(x - 1, suite)
  return suite
}
console.log(fibonacci(8))

// méthode avec un tableau ultra raccourci (meghan)
function fibonacci(x) {
  if (x == 0 || x == 1) {
    return x
  } else {
    return fibonacci(x - 1) + fibonacci(x - 2)
  }
}

function fibonacci_suite(x) {
  var suite = []
  for (let i = 0; i < x; i++) {
    suite.push(fibonacci(i))
  }
  return suite
}

console.log(fibonacci_suite(10))

// fonction ultra ultra raccourci
function fibonacci(x) {
  if (x == 0) {
    return [0]
  } else if (x == 1) {
    return [0, 1]
  } else {
    let suite = fibonacci(x - 1)
    suite.push(suite[x - 1] + suite[x - 2])
    return suite
  }
}  
