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

//Exercise 3
function isCharAVowel(character) {
  const vowels = ["a", "e", "i", "o", "u"];

  if (!vowels.includes(character)) {
    return false;
  } else {
    return true
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

// Exercise 6: maxOfThree()🚨

// For exercise 6, your logic is correct, however, you don't have any parameters set for the logic to use the arguments passed. 
function maxOfThree(index) {
  return Math.max(index)
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

// Exercise 7: calculateTip()
function calculateTip(billNum, tipPercentage) {
  return (tipPercentage/100)*(billNum)
}
console.log('Exercise 7 Result:', calculateTip(50, 20));

// Exercise 8: convertTemperature()
function convertTemperature(temp, scale) {
  if (scale === 'C') {
    const fahrenheit = (temp * 9 / 5) + temp
    return fahrenheit
  } else {
    celsius = (9 / 5) * temp - temp;
    return celsius;
  }
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));

// Exercise 9: basicCalculator()
function basicCalculator(numA, numB, operation) {
  let subtract = (numA - numB)
  return subtract
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
