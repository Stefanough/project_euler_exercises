var i = 1;
while (i < 1000000) {
  if ((Math.sqrt(i) % 1) === 0) {
    var j = 1;
    while ((j * j) < i) {
      var k = Math.sqrt(i - (j * j));
      if (k % 1 === 0) {
        // console.log("**********");
        // console.log((j * j) + " + " + (k * k) + " = " + i);
        // console.log(j + " + " + k + " = " + Math.sqrt(i));
        console.log(j + k + Math.sqrt(i));
        if ((j + k + Math.sqrt(i)) === 1000) {
          console.log(">>>>>>>>>>" + j + " + " + k + " = " + Math.sqrt(i) + "<<<<<<<<<<");
          console.log(">>>>>>>>>>" + (j * k * Math.sqrt(i)) + "<<<<<<<<<<");
        }
        break;
      }
      j++;
    }
  }
  i++;
}
