//深度clone对象
function clone(obj) {
    var tem = {};
    for (i in obj) {
        if (toString.call(obj[i]) === "[object Object]") {
           tem[i] = clone(obj[i]);
        }
        else {
            tem[i] = obj[i];
        }
    }
    return tem;
}

//深度数组对象