//generate the triangle number by starting at 1. getting the product of 2 and the square of the Number
//then adding and sub

//ASSUMPTIONS I WILL MAKE:
//THE Trianlge Number will be even
//one of the multiples will be even
//the triangles nth place will be even

function diviserator(num) {
  var counter = 0;
  for (var i = 1; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      counter += 2;
    }
  }
  if (counter > 1000) {
    return true;
  }
}

function bruteTriangle() {
  var i = 0;
  var j = 0;
  while (true) {
    j += i;
    if (diviserator(j) && (j !== 0)) {
      console.log("************");
      console.log(i);
      return j;
    }
    i ++;
  }
}

console.log(bruteTriangle());
