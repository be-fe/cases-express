function getUnixTime(dateStr) {
    var newstr = dateStr.replace(/-/g,'/');
    newstr = newstr.replace(/[A-Za-z]|[\u4E00-\u9FA5]+/g, ' ');
    newstr = newstr.replace(/\.\d+$/g, '');  //iOS下可能会有小数点
    var date =  new Date(newstr); 
    var time_str = date.getTime().toString();
    return parseInt(time_str.substr(0, 10), 10);
}

//html5 input标签的datetime类型默认提交的是字符串
//各个浏览器下格式有区别，需要统一转换为时间戳