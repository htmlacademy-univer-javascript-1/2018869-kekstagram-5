// eslint-disable-next-line no-unused-vars
function isStringLengthValid(inputString, maxLength) {
  return inputString.length <= maxLength;
}

// eslint-disable-next-line no-unused-vars
function isPalindrome(inputString) {
  const cleanedString = inputString.replace(/\s+/g, '').toLowerCase();
  const reversedString = cleanedString.split('').reverse().join('');

  return cleanedString === reversedString;
}

// eslint-disable-next-line no-unused-vars
function extractDigits(input) {
  const inputString = String(input);
  const digits = inputString.match(/\d/g);

  if (!digits) {
    return NaN;
  }

  return parseInt(digits.join(''), 10);
}

//console.log(isStringLengthValid('Hello', 10)); //true
//console.log(isStringLengthValid('Hello, World!', 10)); //false

//console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
//console.log(isPalindrome('Кекс')); // false

//console.log(extractDigits('2023 год')); // 2023
//console.log(extractDigits('ECMAScript 2022')); // 2022
//console.log(extractDigits('1 кефир, 0.5 батона')); // 105
//console.log(extractDigits(-1)); // 1

// eslint-disable-next-line no-unused-vars
function isMeetingWithinWorkHours(workStart, workEnd, meetingStart, meetingDuration) {
  // Функция для преобразования времени в минуты
  function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  // Преобразуем время в минуты
  const workStartMinutes = timeToMinutes(workStart);
  const workEndMinutes = timeToMinutes(workEnd);
  const meetingStartMinutes = timeToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  // Проверяем, укладывается ли встреча в рабочие часы
  return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
}

//console.log(isMeetingWithinWorkHours("9:00", "17:00", "10:00", 30)); // true
//console.log(isMeetingWithinWorkHours("9:00", "17:00", "16:30", 60)); // false
//console.log(isMeetingWithinWorkHours("8:00", "18:00", "7:30", 60)); // false
//console.log(isMeetingWithinWorkHours("8:00", "18:00", "9:00", 120)); // true
