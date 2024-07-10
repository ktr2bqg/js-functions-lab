// Exercise 1: maxOfTwoNumbers()
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};
console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));

// Exercise 2: isAdult() 🚨Need Help🚨: Result is saying undefined
function isAdult(age) {
  if (age >= 18) {
    return 'Adult'
  } else {
    return 'Minor'
  }
}
console.log('Exercise 2 Result:', isAdult(21));

// Exercise 3: isCharAVowel()
function isCharAVowel(a) {
  if (isAVowel = 'a, e, i, o, u') {
    return true
  } else {
    return false
  }
}
console.log('Exercise 3 Result:', isCharAVowel("a"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name, domain) {
  return `${name}@${domain}`
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));
