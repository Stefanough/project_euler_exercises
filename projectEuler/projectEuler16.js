//2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
//What is the sum of the digits of the number 2^1000?

//2^4 =  2 * 2 * 2 * 2
//    = 2+2+2+2+2+2+2+2
// "8"
var bigNum = "10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376"




var num = "2048";

function xString(num) {
  var result = "";
  var constant = "0";
  for (var i = (num.length - 1); i >= 0; i--) {
    var x = (parseInt(num[i]) + parseInt(num[i]) + parseInt(constant) + "");
    if (x.length > 1) {
      constant = x[0];
      result = (x[1] + result);
    } else {
      result = (x + result);
      constant = "0";
    }
  }
  if (constant !== "0") {
  return (constant + result);
  } else {
  return result;
  }
}

function megaPower(root, power) {
  var result = "1";
  for (var i = 0; i < power; i++) {
    result = xString(result);
  }
  return result;
}

function stringReduce(root, power) {
  var numString = megaPower(root, power);
  var result = 0;
  for (var i = 0; i < numString.length; i++) {
    result += parseInt(numString[i]);
  }
  return result;
}

console.log(megaPower(2, 1000));

console.log(stringReduce(2, 1000));
