function reverseString(string) {
  var revString = "";
  for (var i = (string.length - 1); i >= 0; i --) {
    revString += string[i];
  }
  return revString
}

function findPalindrome() {

  var largestPalindrome = 0;

  for (var i = 100; i <= 999; i ++) {
    for (var j = i; j <= 999; j ++){
      var string = ((i * j) + "");
      if ((string[0]) === (string[string.length - 1])) {
        if ((reverseString(string) === string) && ((i * j) > largestPalindrome)) {
          largestPalindrome = (i * j);
        }
      }
    }
  }
  return largestPalindrome;
}


console.log(findPalindrome());
