function sumOfSquares(num) {
  var result = 0;
  for (var i = 1; i <= num; i ++) {
    result += (i * i);
  }
  return result;
}

function squareOfSum(num) {
  var result = 0;
  for (var i = 1; i <= num; i ++) {
    result += i;
  }
  return (result * result);
}

function differenceSOS(num) {
  return (squareOfSum(num) - sumOfSquares(num));
}

console.log(differenceSOS(100));
