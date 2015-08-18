function count(sum) {
    if (sum == 1) {
        return 1;
    }
    else if (sum == 2) {
        return 2;
    }
    else if (sum > 2) {
        return count(sum - 1) + count(sum - 2)
    }
}

document.write(count(10));

//sum为楼梯高度
//1、2为步长
//考察排列组合和递归