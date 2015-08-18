var gulp = require('gulp');                         //引入gulp

var through = require('through2');
var fs = require('fs');
var path = require('path');                         //用于在gulpfile内自定义gulp处理函数

var riot = require('gulp-riot');                    //riot编译
var concat = require('gulp-concat');                //连接文件
var minifyCSS = require('gulp-minify-css');         //最小化CSS
var uglify = require('gulp-uglify');                //最小化JS
var clean = require('gulp-clean');                  //清空文件夹
var rev = require('gulp-rev-hash');                 //添加MD5版本号
var inlinesource = require('gulp-inline-source')    //将所有资源打成一个文件

gulp.task('riot', function () {
    return gulp.src(['tags/*.tag', 'tags/*/*.tag'])
    .pipe(riot())
    .pipe(gulp.dest('js'));
});

gulp.task('build', function () {
    gulp.src(['js/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));

    gulp.src('css/*.css')
    .pipe(minifyCSS({'noAdvanced': true}))
    .pipe(gulp.dest('build/css'));

    gulp.src(['images/*.png', 'images/*.jpg', 'images/*.gif'])
    .pipe(gulp.dest('build/images'));

    gulp.src(['data/*.json'])
    .pipe(gulp.dest('build/data'));

    gulp.src(['index.html'])
    .pipe(rev({assetsDir: ''}))
    .pipe(gulp.dest('build'));

    gulp.src(['trans.html'])
    .pipe(inlinesource())
    .pipe(toBase64())
    .pipe(gulp.dest('build'));
 
});

gulp.task('default', ['riot', 'build'], function () {
    gulp.watch(['css/*.css', 'tags/*.tag', 'js/common.js', 'images/*.png'], ['riot', 'build']);
});

/*
 * 自定义处理函数例子
 */
function toBase64(options) {
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            this.push(file);
            return cb();
        }

        if (file.isStream()) {
            this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
            return cb();
        }
        /*
         * start
         */
        var content = file.contents.toString();  //Buffer转String，下面开始处理string
        var cssimages = content.match(/url\([^\)]+\)/g);
        var jsimages = content.match(/images\/[\w|\-]+.png/g);
        var currentPath = 'build';
        cssimages.forEach(function(item) {
            var imageURL = item.slice(4, -1);
            imageURL = imageURL.replace(/\'/g, '');
            var filepath = fs.realpathSync(path.join(currentPath, imageURL));
            var extname = path.extname(imageURL).slice(1);
            var imageContent = new Buffer(fs.readFileSync(filepath)).toString('base64');
            content = content.replace(item, 'url(\'data:image/' + extname.toLowerCase() + ';base64,' + imageContent + '\')');
        });

        jsimages.forEach(function(item) {
            imageURL = item.replace(/\'/g, '');
            var filepath = fs.realpathSync(path.join(currentPath, imageURL));
            var extname = path.extname(imageURL).slice(1);
            var imageContent = new Buffer(fs.readFileSync(filepath)).toString('base64');
            content = content.replace(item, 'data:image/' + extname.toLowerCase() + ';base64,' + imageContent);
        });

        file.contents = new Buffer(content); //处理后的String转Buffer
        this.push(file);
        /*
         * end
         */

        cb();
    })
}
