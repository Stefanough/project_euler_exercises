// 75
// 95 64
// 17 47 82
// 18 35 87 10
// 20 04 82 47 65
// 19 01 23 75 03 34
// 88 02 77 73 07 63 67
// 99 65 04 28 06 16 70 92
// 41 41 26 56 83 40 80 70 33
// 41 48 72 33 47 32 37 16 94 29
// 53 71 44 65 25 43 91 52 97 51 14
// 70 11 33 28 77 73 17 78 39 68 17 57
// 91 71 52 38 17 14 91 43 58 50 27 29 48
// 63 66 04 68 89 53 67 30 73 16 69 87 40 31
// 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

//An Array of arrays, Each second order array containing the next line of digits. Largest digit in each array and test if they are all within ± 1 index of eachother.

// I want 3 pieces of information: the value, the place of the value from largest to smallest and the original index of the value in the number set as represented by a 2D array.

var numString = "75 95 64 17 47 82 18 35 87 10 20 04 82 47 65 19 01 23 75 03 34 88 02 77 73 07 63 67 99 65 04 28 06 16 70 92 41 41 26 56 83 40 80 70 33 41 48 72 33 47 32 37 16 94 29 53 71 44 65 25 43 91 52 97 51 14 70 11 33 28 77 73 17 78 39 68 17 57 91 71 52 38 17 14 91 43 58 50 27 29 48 63 66 04 68 89 53 67 30 73 16 69 87 40 31 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23";
var numArray = numString.split(" ").map(function(a) {
    return parseInt(a);
});
var orderedArray = [];
var baseArray = [];
var count = 0;

for (var i = 1; count < numArray.length; i ++) {
    var tempArray = [];
    for (var j = 0; j < i; j ++) {
        tempArray.push(numArray[count]);
        count ++;
    }
    baseArray.push(tempArray);
}

baseArray.forEach(function(a) {
  var tempArr = [];
  for (var i = 0; i < a.length; i ++) {
    var tempSubArr = [a[i], i];
    //console.log(tempSubArr);
    tempArr.push(tempSubArr);
  }
  orderedArray.push(tempArr);
});
// console.log(orderedArray);
// console.log("**********");

// for (var i = 0; i < baseArray.length; i ++) {
//     baseArray[i] = baseArray[i].sort(function(a, b) {
//         return a - b;
//     });
// }

for (var i = 0; i < orderedArray.length; i ++) {
    orderedArray[i] = orderedArray[i].sort(function(a, b) {
        return b[0] - a[0];
    });
}

console.log(orderedArray);

// [ [ [ 75, 0 ] ],
//   [ [ 95, 0 ], [ 64, 1 ] ],
//   [ [ 82, 2 ], [ 47, 1 ], [ 17, 0 ] ],
//   [ [ 87, 2 ], [ 35, 1 ], [ 18, 0 ], [ 10, 3 ] ],
//   [ [ 82, 2 ], [ 65, 4 ], [ 47, 3 ], [ 20, 0 ], [ 4, 1 ] ],
//   [ [ 75, 3 ], [ 34, 5 ], [ 23, 2 ], [ 19, 0 ], [ 3, 4 ], [ 1, 1 ] ],
//   [ [ 88, 0 ], [ 77, 2 ], [ 73, 3 ], [ 67, 6 ], [ 63, 5 ], [ 7, 4 ], [ 2, 1 ] ],
//   [ [ 99, 0 ], [ 92, 7 ], [ 70, 6 ], [ 65, 1 ], [ 28, 3 ], [ 16, 5 ], [ 6, 4 ], [ 4, 2 ] ],
//   [ [ 83, 4 ], [ 80, 6 ], [ 70, 7 ], [ 56, 3 ], [ 41, 0 ], [ 41, 1 ], [ 40, 5 ], [ 33, 8 ], [ 26, 2 ] ],
//   [ [ 94, 8 ], [ 72, 2 ], [ 48, 1 ], [ 47, 4 ], [ 41, 0 ], [ 37, 6 ], [ 33, 3 ], [ 32, 5 ], [ 29, 9 ], [ 16, 7 ] ],
//   [ [ 97, 8 ], [ 91, 6 ], [ 71, 1 ], [ 65, 3 ], [ 53, 0 ], [ 52, 7 ], [ 51, 9 ], [ 44, 2 ], [ 43, 5 ], [ 25, 4 ], [ 14, 10 ] ],
//   [ [ 78, 7 ], [ 77, 4 ], [ 73, 5 ], [ 70, 0 ], [ 68, 9 ], [ 57, 11 ], [ 39, 8 ], [ 33, 2 ], [ 28, 3 ], [ 17, 10 ], [ 17, 6 ], [ 11, 1 ] ],
//   [ [ 91, 6 ], [ 91, 0 ], [ 71, 1 ], [ 58, 8 ], [ 52, 2 ], [ 50, 9 ], [ 48, 12 ], [ 43, 7 ], [ 38, 3 ], [ 29, 11 ], [ 27, 10 ], [ 17, 4 ], [ 14, 5 ] ],
//   [ [ 89, 4 ], [ 87, 11 ], [ 73, 8 ], [ 69, 10 ], [ 68, 3 ], [ 67, 6 ], [ 66, 1 ], [ 63, 0 ], [ 53, 5 ], [ 40, 12 ], [ 31, 13 ], [ 30, 7 ], [ 16, 9 ], [ 4, 2 ] ],
//   [ [ 98, 7 ], [ 98, 2 ], [ 93, 9 ], [ 73, 8 ], [ 70, 6 ], [ 62, 1 ], [ 60, 12 ], [ 53, 11 ], [ 38, 10 ], [ 27, 3 ], [ 23, 4 ], [ 23, 14 ], [ 9, 5 ], [ 4, 13 ], [ 4, 0 ] ] ]


function maxPath(array) {
  var result = [[array[0][0]]]
  for (var i = 1; i < array.length; i++) {
    for (var j = 0; j < i.length; j++) {
      if (array[i][j][1] - (result[result.length - 1][)  )
    }
  }
}
