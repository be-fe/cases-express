function A() {
    this.a = 'a';
}

A.prototype.methodA = function() {
    document.write('methodA<br>');
};

A.prototype.methodB = function() {
    document.write('methodB<br>');
};

var a = new A();

function B() {}

B.prototype = a;

var b = new B();

b.methodA();
document.write(b.a);

//主要考察JavaScript的继承