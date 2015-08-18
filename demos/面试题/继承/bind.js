//ES5出现的属性，可以改变上下文，但是不必立即执行
ObjA = {
    value: 'ObjA',
    test: function (a) {
        document.write(a + this.value + '<br>');
    }
}

ObjB = {
    value: 'ObjB',
}

ObjB.test = ObjA.test.bind(ObjB);

ObjB.test('hehe');



//方法模拟
Function.prototype.bind = function(context){
  self = this;  //保存this，即调用bind方法的目标函数
  return function(){
      return self.call(context,arguments);
  };
};
//
if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== "function") {
        // closest thing possible to the ECMAScript 5 internal IsCallable function      
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }
  
        var aArgs = Array.prototype.slice.call(arguments, 1), 
            fToBind = this, 
            fNOP = function () {},
            fBound = function () {
                return fToBind.apply(this instanceof fNOP && oThis ? this : oThis || window,
                  aArgs.concat(Array.prototype.slice.call(arguments)));
            };
  
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();
  
        return fBound;
    };
}