var pathStr = '/Users/xieyu/desktop/../demo/./test.c';

function pathHandle(str) {
    if (str.match(/^\/\S+/)) {
        var pathArr = str.match(/\/[\w|.]+/g);
        for (var i = 0; i < pathArr.length; i++) {
            if (pathArr[i] === '/..') {
                if (i > 0) {
                    pathArr[i - 1] = '';
                }
                pathArr[i] = '';
            }
            else if (pathArr[i] === '/.') {
                pathArr[i] = '';
            }
        }
        return pathArr.join('');
    }
    else {
        throw new Error('路径不合法');
    }
}

pathHandle(pathStr)