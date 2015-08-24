//试除法
var arr = []
for(i = 1; i <= 100; i++) {
    for(j = 2; j <= i; j++) {
        if(i%j == 0) {
            break;
        }
    }

    if(i <= j && i !=1){
      arr.push(i);
    }
}        
document.write(arr.join(',') + '<br>');

//筛选法

Array.prototype.filterMultiple = function(n) {
    for (i = 0; i <= this.length; i++) {
        if (this[i]/n !==1 && this[i]%n === 0 || this[i] === 1) {
            this.splice(i, 1);
        }
    }
    return this;
}

var arr = []
for (i = 1; i <=100; i++) {
    arr.push(i);
}

document.write(arr.filterMultiple(2).filterMultiple(3).filterMultiple(5).filterMultiple(7).join(','));