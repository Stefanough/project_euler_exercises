//generate the triangle number by starting at 1. getting the product of 2 and the square of the Number
//then adding and sub

//ASSUMPTIONS I WILL MAKE:
//THE Trianlge Number will be even
//one of the multiples will be even
//the triangles nth place will be even

var result = 0;

function isEven(num) {
  if ((num % 2) === 0) {
    return true;
  } else {
    return false;
  }
}

function triangleGen(num) {
  return ((num * (num/2)) + num/2);
}

function diviserator(num) {
  var counter = 0;
  for (var i = 1; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      counter += 2;
    }
  }
  if (counter > 500) {
    result = num;
  }

}

var i = 2;
while (result === 0) {
  diviserator(triangleGen(i));
  i += 2;
}

console.log(result);
console.log(i);
