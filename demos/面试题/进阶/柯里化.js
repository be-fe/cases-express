function curry(fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
        var innerArgs = [].slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(null, finalArgs);
    };
}

function test(a, b, c) {
    return [a, b, c];
}

var newtest = curry(test);

newtest(2)