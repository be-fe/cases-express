/*
 * 判断对象为空
 */

function isObject(value) {
    var type = typeof value;
    return type === 'function' || type === 'object' && !!value;
};

function isArguments(value) {    // fallback check is for IE
    return is.not.null(value) && (toString.call(value) === '[object Arguments]' || (typeof value === 'object' && 'callee' in value));
};

function isArray(value) {
    return toString.call(value) === '[object Array]';
}

function emptyObject(value) {
    if(isObject(value)){
        var num = Object.getOwnPropertyNames(value).length;
        if(num === 0 || (num === 1 && isArray(value)) || (num === 2 && isArguments(value))){
            return true;
        }
        return false;
    } else {
        return value === '';
    }
};
