function isPrime(num, currentPrime) {
  for (var i = currentPrime; i < num; i += 1) {
    console.log("**********");
    console.log(num % i);
    console.log("**********");
    if ((num % i === 0) && (num !== 2)){
      return false;
    }
  }
  return true;
}

function findPrime(num) {
  while (true) {
    var i = 1;
    var count = 1;
    var currentPrime = 2;
    while (count < num) {
      i ++;
      if (isPrime(i, currentPrime)) {
        console.log(isPrime(i, currentPrime));
        console.log(i);
        console.log(currentPrime);
        console.log("----------");
        currentPrime = i;
        count ++;
      }
    }
    return i;
  }
}

console.log(findPrime(6));
