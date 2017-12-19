function isPrime(num) {
  for (var i = 2; i < num; i += 1) {
    if (num % i === 0){
      return false;
    }
  }
  return true;
}

function largestPrimeFactor(num) {
  var biggestPrimeFactor = 1;
  for (var i = 3; i < num; i ++) {
    if ((isPrime(i)) && (num % i === 0)) {
      console.log(i);
      console.log(isPrime(i));
      biggestPrimeFactor = i;
    }
  }
  return biggestPrimeFactor;
}

console.log(largestPrimeFactor(13195));
console.log("----------");
console.log(largestPrimeFactor(3583578));
