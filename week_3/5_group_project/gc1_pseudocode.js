//Story: Ajay Singh
//Pseudocode: Matthew Hein
//Code: Hing Hyunh
//Refactor: Tim Howard


//----- PSEUDOCODE -----

// Addition function:
//------------------
// create a function called sum
// initialize total to zero
// for every index in array
// add to total
// return the total

// Median function:
//-------------------
// create a function called median
// initialize total to zero
// for every number in array
// add to total
// return the total divided by the array length

// Mean function:
//--------------------
// create a function called mean
// if the mean has an even length
// return the median number in an even array
// else
// return the median number in an odd array

//Reflection:
/*
I worked on this exercise with my group using stypi. I did this test out of order, and it was my first 
introduction to test driven development. I was confused about how the tests worked, but quickly learned 
why they were implemented. My role in this exercise was writing pseudo code. I was able to perform in this
role pretty well. I was able to understand the tests due to the experience I had learned from the phase
0 prep in ruby, since the tests in those exercises were pretty similar. Since it was only pseudo code, 
I did not need to understand the specific syntax for javascript in order to write. I was very interested 
in the test driven development. It was an amazing way to make sure the code performs exactly as needed.
I could see where some situations could get out of hand and unorganized without it. 
*/


// Tests:  Do not alter code below this line.


oddLengthArray = [1, 2, 3, 4, 5, 5, 7]
evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7]


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (sum instanceof Function),
  "sum should be a Function.",
  "1. "
)

assert(
  sum(oddLengthArray) === 27,
  "sum should return the sum of all elements in an array with an odd length.",
  "2. "
)

assert(
  sum(evenLengthArray) === 43,
  "sum should return the sum of all elements in an array with an even length.",
  "3. "
)

assert(
  (mean instanceof Function),
  "mean should be a Function.",
  "4. "
)

assert(
  mean(oddLengthArray) === 3.857142857142857,
  "mean should return the average of all elements in an array with an odd length.",
  "5. "
)

assert(
  mean(evenLengthArray) === 5.375,
  "mean should return the average of all elements in an array with an even length.",
  "6. "
)

assert(
  (median instanceof Function),
  "median should be a Function.",
  "7. "
)

assert(
  median(oddLengthArray) === 4,
  "median should return the median value of all elements in an array with an odd length.",
  "8. "
)

assert(
  median(evenLengthArray) === 5.5,
  "median should return the median value of all elements in an array with an even length.",
  "9. "
)
