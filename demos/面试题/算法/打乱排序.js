var arr=[];
for(var i=0;i<100;i++){
        arr[i]=i;
    }
arr.sort(function(){ return 0.5 - Math.random() })

var str = arr.join();
alert(str);

//最简便方法，利用sort函数的特性，随机交换两个数的位置