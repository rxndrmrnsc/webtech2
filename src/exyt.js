let sayHello = (name) => `Hello, ${name}!`

console.log(sayHello(process.argv[2]))

function checkDivisible(n, divisor) {
  if (n % divisor) {
    return false
  } else {
    return true
  }
}

console.log(checkDivisible(10, 2))
console.log(checkDivisible(10, 3))

let occurances = (text, character) => text.split(character).length - 1

console.log(occurances('sample text', 'e'))

function addToArray(array, ...args) {
  for (var i = 0; i < args.length; i++) {
    array.push(args[i])
  }
  return array
}

let array = ['a']

console.log(addToArray(array, 'b', 'c').join(', '))

const checkPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      return false
    }
  }
  return true
}

// am schimbat sa fie al 4lea parametru ca sa nu stric primul exemplu
if (process.argv.length < 4) {
  console.log('not enough params')
} else {
  console.log(checkPrime(parseInt(process.argv[3])))
}

const sampleString = 'the quick brown fox jumps over the lazy dog'

const getCounts = (text) => {
  const words = text.split(' ')
  const result = {}
  for (let word of words) {
    if (word in result) {
      result[word]++
    } else {
      result[word] = 1
    }
  }
  for (let word in result) {
    result[word] /= words.length
  }
  return result
}

console.log(getCounts(sampleString))
