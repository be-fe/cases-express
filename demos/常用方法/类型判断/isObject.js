function isObject(value) {
    var type = typeof value;
    return type === 'function' || type === 'object' && !!value;
};