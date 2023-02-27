// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Alpha 2023"
console.log(cohort.split(""))

// a) Your answer: ["A", "l", "p", "h", "a", "", "2", "0", "2", "3"]
// b) Verify and explain: my answer was correct because the .split("") built-in method turns a string into an array with all of the characters separated by commas as values

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student!
// b) Verify and explain: my answer was incorrect. the answer logged undefined because the function doesn't is missing "return" in the curly braces so the code was not invoked. I read the code too quickly and missed that part

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: my answer was correct because the higher-order function is using .map() to iterate over the values of the array and returning a new array with the values of the original array multiplied by 2

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: my answer was correct because this higher-order function is iterating over the values of the array using the .filter() method to return a new array with only the values that are not evenly divisible by 2 (odd values)

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: my answer was correct because the console log is calling on the zero index of the languages key of the object myCodingSkills