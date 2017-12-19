var dicArr = [];

function findRoutes(m, n) {
    if (m === 0 || n === 0) {
        return 1;
    }
    var addDicArr = true;
    for (var i = 0; i < dicArr.length; i ++) {
        if (dicArr[i][0] === m && dicArr[i][1] === n) {
        addDicArr = false;
            return findRoutes(m, n - 1) + findRoutes(m - 1, n);
        }
    }
    if (addDicArr) {
    dicArr.push([m, n]);
    }
    return findRoutes(m, n - 1) + findRoutes(m - 1, n);
}


console.log(findRoutes(20, 20));
