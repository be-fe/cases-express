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
result1();

nAdd();
result1();

nAdd();
result1();

//考察点：闭包对变量的保存作用