// I paired [by myself] on this challenge.




// Pseudocode
// creat variable secretNumber = 7
// create variable password = "just open the door"
// create variable allowedIn = false
// create a variable members = ["John", anything, anything, "Mary"]


// __________________________________________
// Write your code below.

var secretNumber = 7
var password = "just open the door"
var allowedIn = false
members = ["John", "Matthew", "Jeff", "Mary"]

// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", "Matthew", "Jeff", "Mary"];

// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
/*
This challenge was pretty straight forward. I spent a lot of time reading the similarities between
javascript and ruby. Ruby being the first language I was familiar with, javascript seemed right at home.
Branching and looping are very similar. This challenge was also very helpful with learning to pseudo code,
and after I had my ideas written down, writing the actual code was easy. I started with sublime text writing
the pseudo code and the first version of my code. I transferred everything to chrome dev tools to figure out
if they passed the tests. This exercise was straight forward, so I did not have any problems passing the tests.
*/

// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

