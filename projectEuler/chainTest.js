var dicArr = [];

function findRoutes(m, n) {
    if (m === 0 || n === 0) {
        return 1;
    }
    var x = true;
    for (var i = 0; i <= dicArr.length; i ++) {
        if (dicArr[i] === [m, n]) {
        x = false;
            return findRoutes(m, n - 1) + findRoutes(m - 1, n);
            break;
        }
    }
    if (x) {
    dicArr.push([m, n]);
    }
    return findRoutes(m, n - 1) + findRoutes(m - 1, n);
}


console.log(findRoutes(3, 3));
