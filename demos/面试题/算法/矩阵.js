var matrixDemo = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
function orderByRule(matrix) {
    var arr = [];
    var width = matrix[0].length;
    var height = matrix.length;
    for (i = 0; i < width; i++) {
        handleUp(matrix, i);
    }

    for (i = height; i > -1; i--) {
        handleDown(matrix, i)
    }

    function handleUp(matrix, n) {
        for (i = 0; i < n; i++) {
            arr.push(matrix[i][width - n + i]);
        }
    }  //矩阵上三角操作

    function handleDown(matrix, n) {
        for (i = 0; i < n; i++) {
            arr.push(matrix[height - n +i][i])
        }
    }  //矩阵下三角操作
    return arr

}

document.write(orderByRule(matrixDemo).join(','));