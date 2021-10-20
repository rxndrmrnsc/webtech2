//funcție arrow care primește ca parametru un array de string și îmi
//returnează un singur string obținut prin concatenarea string-urilor din
//array-ul primit ca parametru

let arr = ['Hello', ' console']
let ex1 = (arr) => arr.join()

console.log(ex1(arr))

// implementează o funcție care returnează numărul
//de caractere diferite între două string-uri de
//aceeași lungime primite ca parametri. Dacă
//string-urile primite nu sunt de aceeași lungime,
//funcția va returna -1.

function ex2(x, y) {
  if (x.length !== y.length) {
    return -1
  } else {
    let nr = 0
    for (let i = 0; i < x.length; i++) {
      if (x[i] !== y[i]) {
        nr += 1
      }
    }

    return nr
  }
}

console.log(ex2('buna', 'salut'))
console.log(ex2('buna', 'bunx'))

//o funcție care primește ca parametru o listă de numere și returnează un
//array conținând acele numere.

let x = [1, 2, 3]
let y = (1, 2, 3)

console.log('x: ' + typeof x) //array
console.log('y: ' + typeof y)

function ex3(...args) {
  let arr = []
  for (let i = 0; i < args.length; i++) {
    arr.push(args[i])
  }
  return arr
}

console.log(ex3(1, 2, 3, 4, 5))

// primește ca parametrii două array-uri de aceeași lungime și returnează un
// array cu elementele din cele două surse intercalate

function ex4(arr1, arr2) {
  let array = []
  for (var i = 0; i < arr1.length * 2; i++) {
    if (i % 2) {
      array.push(arr2[(i - 1) / 2])
    } else {
      array.push(arr1[i / 2])
    }
  }
  return array
}

console.log(ex4(['a', 'b', 'c'], ['d', 'e', 'f']))

//funcție care calculează elementul de un anumit ordin al șirului lui
//Fibonacci, primind acest ordin ca parametru de linie de comandă.

let ex5 = () => {
  if (parseInt(process.argv[2]) === 0) {
    return 0
  } else if (parseInt(process.argv[2]) === 1) {
    return 1
  }
  let x = 0
  let y = 1
  let result = 0
  for (let i = 2; i <= parseInt(process.argv[2]); i++) {
    result = x + y
    x = y
    y = result
  }
  return result
}

console.log(ex5())

//funcție care calculează frecvențele relative de apariție a unor litere
//într-un text, excluzând caracterul pentru spațiu

const sampleString = 'the quick brown fox jumps over the lazy dog'
const anotherSampleString = 'aaab'

let ex6 = (text) => {
  let result = {}
  const words = text.split(' ')
  let nrLetters = 0
  for (let word of words) {
    for (let letter of word) {
      nrLetters++
      if (letter in result) {
        result[letter]++
      } else {
        result[letter] = 1
      }
    }
  }
  for (let letter in result) {
    result[letter] /= nrLetters
  }
  return result
}

console.log(ex6(sampleString))
console.log(ex6(anotherSampleString))
