var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();
var router = express.Router();
var config = require('./config');
var bodyHandle = require('./bodyHandle');

app.use(express.static('public'));

var fileList = [];

//
function walk(path){    
    var dirList = fs.readdirSync(path);

    dirList.forEach(function(item){
        if (!item.match(/^\./)) {  //过滤隐藏文件
            if(fs.statSync(path + '/' + item).isDirectory()){
                    walk(path + '/' + item, path);
            }
            fileList.push({ id: path + '/' + item, path: path + '/' + item, fileName: item, pid: path });
        }
    });
}

walk(config.root);

app.get('/', function (req, res) {
    var data = fs.readFileSync('index.html', {encoding: 'utf-8'});
    res.send(data);
});

app.get('/fileList', function (req, res) {
    res.send(fileList);
});

for (i = 0; i < fileList.length; i++) {
    var path = fileList[i].path.replace(/^\./, '');
    path = encodeURI(path);
    app.get(path, function (req, res) {
        var file = '.' + decodeURI(req.path);
        try {
            if(!fs.statSync(file).isDirectory()){
                var data = fs.readFileSync(file, {encoding: 'utf-8'});
                var query = req.query;
                if (query.source_code && file.match(/.js$/)) {
                    data = bodyHandle.addHighlight(data, 'js');
                    data = bodyHandle.insertPrism(data);
                    res.send(data);
                }
                else if (query.source_code && file.match(/.html$/)) {
                    data = bodyHandle.addHighlight(data, 'html');
                    data = bodyHandle.insertPrism(data);
                    res.send(data);
                }
                else if (query.result && file.match(/.js$/)) {
                    try {
                        data = bodyHandle.addScript(data);
                        res.send(data);
                    }
                    catch(e) {
                        res.send(e);
                    }
                }
                else if (query.result && file.match(/.md$/)) {
                    try {
                        data = bodyHandle.transMarkDown(data);
                        res.send(data);
                    }
                    catch(e) {
                        res.send(e);
                    }
                }
                else {
                    res.send(data);
                }
            }
            else {
                res.send('');
            }
        }
        catch(e) {}
    });
}


app.listen(config.port);