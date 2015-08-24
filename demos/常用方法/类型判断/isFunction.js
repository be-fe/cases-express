function isFunction(value) {
    return toString.call(value) === '[object Function]' || typeof value === 'function';
};