// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divisibleBy3", () => {
    it("returns if the number inside it is evenly divisible by three or not", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
      expect(divisibleBy3(object1.number)).toEqual("15 is divisible by three")
      expect(divisibleBy3(object2.number)).toEqual("0 is divisible by three")
      expect(divisibleBy3(object3.number)).toEqual("-7 is not divisible by three")
    })
  })
  // ReferenceError: divisibleBy3 is not defined

// b) Create the function that makes the test pass.
// pseudocode:
// create a function called divisibleBy3
// input is an object as an argument, but to make the code dynamic, we'll input "value" as the parameters. when we want to call on a value inside of the object, we'll have to make sure we're doing object.key to call on the value
// inside the function has conditional statements that returns a number is divisible by 3 if it is
// has another statement that returns a number is not divisible by 3 if it isn't
// has a last else statement as a catchall for anything else inputted if it's not a number
// output returns a statement deciding whether the input is divisible by 3 or not

const divisibleBy3 = (value) => {
    if (value % 3 === 0) {
        return `${value} is divisible by three`
    } else if (value % 3 !== 0) {
        return `${value} is not divisible by three`
    } else {
        return "please enter a numerical value"
    }
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("wordsCapitalized", () => {
    it("returns an array with all the words capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
      expect(wordsCapitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
      // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
      expect(wordsCapitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
  })
  // ReferenceError: wordsCapitalized is not defined

// b) Create the function that makes the test pass.
// pseudocode:
// create a function called wordsCapitalized
// input is an array of words
// iterate over the array to capitalize each string using higher order function .map() since map iterates over an array and returns an array with the same length
// we'll need to only capitalize the first letter using .toUpperCase at the 0 index of each string
// we'll then need to concatenate the rest of the letters in lowercase back with the first capitalized letter using .substring() at index 1
// output is an array with the words capitalized

const wordsCapitalized = (array) => {
    return array.map((value) => {
        return value[0].toUpperCase() + value.substring(1)
    })
}
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total




// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("indexOfFirstVowel", () => {
    it("returns the index of the first vowel", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
      expect(indexOfFirstVowel(vowelTester1)).toEqual(1)
        const vowelTester2 = "academy"
        // Expected output: 0
      expect(indexOfFirstVowel(vowelTester2)).toEqual(0)
        const vowelTester3 = "challenges"
        // Expected output: 2
      expect(indexOfFirstVowel(vowelTester3)).toEqual(2)
    })
  })
// ReferenceError: indexOfFirstVowel is not defined


// b) Create the function that makes the test pass.
// pseudocode:
// create a function called indexOfFirstVowel
// input is a string
// iterate over the string using for loop
// create a conditional statement to see whether each letter is a vowel (a, e, i, o u)
// if that letter is a vowel, we'll want to the return the index of that value
// output logs the index of the first vowel of the string inputted

const indexOfFirstVowel = (string) => {
    for (let i = 0; i < string.length; i++) {
      if (string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u"){
          return i
      }
        }
    }
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total