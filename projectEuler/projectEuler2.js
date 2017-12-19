var sum = 0;
var fib2 = 1;
for (var fib1 = 0; fib2 > 0; fib1 = (fib2 - fib1)) {
  fib2 += fib1;
  console.log(fib2)
  if(fib2 >= 4000000) {
    break;
  }
  if (fib2 % 2 === 0){
  sum += fib2;
  // console.log(fib2);
}
}
console.log("----------");
console.log(sum);
