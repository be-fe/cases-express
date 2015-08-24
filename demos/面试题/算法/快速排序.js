function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    else {
        var baseValue = arr[0];
        var rightArr = [];
        var leftArr = [];
        var equalArr = [];
        for (i = 0; i < arr.length; i++) {
            if (arr[i] > baseValue) {
                rightArr.push(arr[i]);
            }
            else if (arr[i] < baseValue){
                leftArr.push(arr[i]);
            }
            else {
                equalArr.push(arr[i]);
            }
        }
        return quickSort(leftArr).concat(equalArr, quickSort(rightArr));
    }
}

document.write(quickSort([4, 5, 1, 3, 4, 6, 8, 2]).join(','));
