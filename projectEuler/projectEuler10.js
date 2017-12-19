function primeCheck(num) {
  for (var i = 1; i <= Math.sqrt(num); i += 2) {
    if ((num % i === 0) && (i !== 1)) {
      return false;
    }
  }
  return true;
}

function primeAdder(num) {
  var primeSum = 2;
  for (var i = 3; i < num; i += 2) {
    if (primeCheck(i)) {
      primeSum += i;
    }
  }
  return primeSum;
}

console.log(primeAdder(2000000));
