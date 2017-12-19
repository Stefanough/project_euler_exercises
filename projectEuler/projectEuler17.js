


//  If the numbers 1 to 5 are written out in words: one, two, three, four, five,
// then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
//
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in
// words, how many letters would be used?
//
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and
// forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20
// letters. The use of "and" when writing out numbers is in compliance with British
// usage.

// RULES: all numbers above three digits except those followed exclusively by zeros
// have an 'and' in their english name.

// generate an array of all digits between 1 and 1000 (as string elements?)
// objects with numbers attacched to word values.


var singleDigits = {0: "", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"};

var doubleDigits = {10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen",
20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety", 100: "hundred",
1000: "thousand", "and": "and"};


function wordAdder(num) {
  var numArray = [];
  var bigNumString = "";
  var wordArray = [];
  for (var i = 1; i <= num; i++) {
    numArray.push((i + ""));
  }
  console.log(numArray);

  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i].length === 1) {
      bigNumString += singleDigits[numArray[i]];
    } else if (numArray[i].length === 2) {
      if (numArray[i][0] === "1") {
        bigNumString += doubleDigits[numArray[i]];
      } else if (numArray[i][1] === "0") {
        bigNumString += doubleDigits[numArray[i]];
      } else {
        bigNumString += doubleDigits[(numArray[i][0]) + "0"] + singleDigits[numArray[i][1]];
      }
    } else if (numArray[i].length === 3) {
      bigNumString += singleDigits[numArray[i][0]] + "hundred";
      if (numArray[i][1] !== "0" || numArray[i][2] !== "0") {
        bigNumString += "and";
        if (numArray[i][1] === "1") {
          bigNumString += doubleDigits[numArray[i].slice(1)];
        } else if (numArray[i][1] === "0") {
          bigNumString += singleDigits[numArray[i][2]];
        } else {
          bigNumString += doubleDigits[(numArray[i][1]) + "0"] + singleDigits[numArray[i][2]];
        }
    }
  } else {
    bigNumString += "onethousand";
  }
}
console.log(bigNumString);
return bigNumString.length;
}

console.log(wordAdder(1000));

//(numArray[i][1] === 0 && numArray[i][2] !== 0) || numArray[i][1] === 1
