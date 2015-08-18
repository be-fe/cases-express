function test(a) {
    var a;
    return a;
}

function test1(a) {
    function inner(){
        var a;
        return a;
    }
    return inner();
}

function test2(a, b) {
    function inner(){
        var a = b || a;
        return a;
    }
    return inner();
}

function test3(a, b) {
    function inner(){
        a = b || a;
        return a;
    }
    return inner();
}

document.write(test('测试') + '<br>');

document.write(test1('测试') + '<br>');

document.write(test2('测试') + '<br>');

document.write(test3('测试') + '<br>');

//考察点：var定义时会引用同名参数，但不会向上引用。