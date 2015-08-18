//call 和 apply 都是为了改变某个函数运行时的 context 而存在的，换句话说，就是为了改变函数体内部 this 的指向.
//对象A使用对象B的方法，避免重复定义。
//apply需要将参数放在数组中
ObjA = {
    value: 'ObjA',
    test: function (a) {
        document.write(a + this.value + '<br>');
    }
}

ObjB = {
    value: 'ObjB',
}

ObjA.test.call(ObjB, 'hehe~');
ObjA.test.apply(ObjB, ['hehe~']);