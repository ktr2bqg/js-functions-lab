// Exercise 1: maxOfTwoNumbers()
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};
console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));

// Exercise 2: isAdult()
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

// Exercise 4: generateEmail() 
function generateEmail(name, domain) {
  return `${name}@${domain}`
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

// Exercise 5: greetUser()
function greetUser(name, timeOfDay) {
return `Good ${timeOfDay}, ${name}!`
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

// Exercise 6: maxOfThree()
function maxOfThree() {
  return Math.max(5, 10, 8)
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

// Exercise 7: calculateTip()
function calculateTip(billNum, tipPercentage) {
  return (tipPercentage/100)*(billNum)
}
console.log('Exercise 7 Result:', calculateTip(50, 20));

