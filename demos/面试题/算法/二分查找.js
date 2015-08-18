function binarySearch(arr, v, start, end) {
    var end = end || arr.length - 1;
    var start = start || 0;
    var m = Math.floor((end - start) / 2);
    if(arr[m] === v){
        return m;
    }
    if(v < arr[m]){
        return binarySearch(arr, v, 0, m-1);
    }
    else{
        return binarySearch(arr, v, m+1, end);
    }
}
var arr = [-34, 1, 3, 4, 5, 8, 34, 45, 65, 87];
document.write(binarySearch(arr, 5));

//有序数组二分查找