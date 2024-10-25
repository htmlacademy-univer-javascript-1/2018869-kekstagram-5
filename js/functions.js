function isStringLengthValid(inputString, maxLength) {
  return inputString.length <= maxLength;
}

function isPalindrome(inputString) {
  const cleanedString = inputString.replace(/\s+/g, '').toLowerCase();
  const reversedString = cleanedString.split('').reverse().join('');

  return cleanedString === reversedString;
}

function extractDigits(input) {
  const inputString = String(input);
  const digits = inputString.match(/\d/g);

  if (!digits) {
    return NaN;
  }

  return parseInt(digits.join(''), 10);
}

console.log(isStringLengthValid('Hello', 10)); //true
console.log(isStringLengthValid('Hello, World!', 10)); //false

console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
console.log(isPalindrome('Кекс')); // false

console.log(extractDigits('2023 год')); // 2023
console.log(extractDigits('ECMAScript 2022')); // 2022
console.log(extractDigits('1 кефир, 0.5 батона')); // 105
console.log(extractDigits(-1)); // 1

