function f1(){
    var n=999;
    nAdd=function(){
        n+=1
    };
    function f2(){
        document.write(n + '<br>');
    }
    return f2;
}
var result1=f1();
var result2=f1();
result1();
result2();

nAdd();
result1();
result2();

nAdd();
result1();
result2();

//考察点：
//1、无var为全局变量覆盖， 
//2、变量覆盖result2的引用覆盖了result1的，nAdd只对result2生效