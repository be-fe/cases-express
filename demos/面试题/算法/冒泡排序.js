function popSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    else {
        for(i = 0; i < arr.length; i++) {
            for(j = (i + 1); j < arr.length; j++) {
                if (arr[j] < arr[i]) {
                    var tmp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = tmp;
                }
            }
        }
        return arr;
    }
}

document.write(popSort([4, 5, 1, 3, 4, 6, 8, 2]).join(','));