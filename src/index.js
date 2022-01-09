module.exports = function toReadable(number) {
  let result = [];
  let numToStr = number.toString();

  if (numToStr.length === 1) {
    result.push(oneDigit(numToStr));
  } else if (numToStr.length === 2) {
    result.push(twoDigit(numToStr));
  } else {
    result.push(threeDigits(numToStr))
  }


  return result.join(" ");
}

function oneDigit(numToStr) {
  let arrayOneDigit = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ]

  return arrayOneDigit[numToStr[0]];
}

function twoDigit(numToStr) {
  if (+numToStr[0] === 0) {
    return oneDigit(numToStr.slice(1));
  } else if (+numToStr < 20) {
    let arrayFirstDigit = [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ]
    return arrayFirstDigit[+numToStr - 10];
  } else {
    let arraySecondDigit = [
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ]

    if (+numToStr[1] === 0) {
      return (arraySecondDigit[numToStr[0] - 2]);
    } else {
      return (arraySecondDigit[numToStr[0] - 2] + ' ' + oneDigit(numToStr[1]));
    }
  }
}

function threeDigits(numToStr) {
  let hundred = "hundred";

  if (+numToStr[1] === 0 && +numToStr[2] === 0) {
    return (oneDigit(numToStr[0]) + ' ' + hundred);
  } else if (+numToStr[3] === 0) {
    return (oneDigit(numToStr[0]) + ' ' + hundred + ' ' + twoDigit(numToStr.slice(1)) + 'zero');
  } else {
    return (oneDigit(numToStr[0]) + ' ' + hundred + ' ' + twoDigit(numToStr.slice(1)));
  }
}
