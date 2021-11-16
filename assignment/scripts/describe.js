// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We set the name variable to be equal to 'Dane'. 
// We then check to see if the name is strictly equal to 'Mary' (it won't be) and if it is, we print "Hi, Mary!" to the console.
// Since it isn't strictly equal, we print "How do you do?" to the console instead.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//  We declare two variables, 'secret' and 'code', and we set 'code' to be equal to 123.
// We then code to see if 'code' is strictly equal to 123 and if it is, we assign our secret variable to be equal to "super" and multiply our code variable by two.
// We then check to see if code is greater than 250, and if it is, we set the value of secret to 'duper'. This won't happen since code is 246.
// We then print the value of secret to the console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We start by declaring three variables: isStudent, age, and zip, which are set to true, 34, and 55407 respectively.
// We then check if isStudent is true and zip is greater than 80000. If they are, we print "You're a student on the West Coast!" to the console.
// If not, we check to see if isStudent is false or age is less than 30. If either condition is true, we print "What are your hobbies?" to the console.
// If not, we check to see if isStudent is true. If so, we print "Welcome to Prime!" to the console.
// If none of the conditions above are met, we print "How about the weather?" to the console.
// Since student is true, but our zip code is under 80000 and our age is over 30, we print "Welcome to Prime!" in the console.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX: The color values are swapped.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  // FIX: We only set colorOne to purple—should also set colorTwo.
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX: The OR should be an AND.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX: As written, our console messages should be flipped. 
// However, I think the better fix is to rewrite the if statement to (age <= minAge) since I think that just reads better.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

