

function findSmallProduct() {

  var result = 1;
  while (result > 0) {
    var count = 0
    for (var i = 1; i <= 20; i ++) {
      if (result % i === 0) {
        count ++;
        if (count === 20) {
          return result;
        }
      } else {
        break;
      }
    }
    result ++;
  }
}

console.log(findSmallProduct());
