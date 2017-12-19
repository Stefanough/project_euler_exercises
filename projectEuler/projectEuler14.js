//detect if even or odd
//check counter at each iteration
//send num to respective functions



function isEven(num) {
    return (num % 2 === 0);
}

function collatzSequence() {
    var counterMax = 0;
    var superCollatz = 0;
    for (var j = 2; j < 1000000; j++) {
    counter = 0;
        var i = j;
        while (i > 1) {
            if (isEven(i)) {
                i = (i/2);
                counter ++;
            } else {
                i = ((3 * i) + 1);
                counter ++;
            }
        }
        if (counter > counterMax) {
            counterMax = counter;
            console.log(counterMax);
            superCollatz = j;
        }
    }
    return superCollatz;
}

console.log(collatzSequence());
