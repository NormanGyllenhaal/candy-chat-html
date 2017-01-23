//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    connect = require('gulp-connect');


gulp.task('connect', function() {
    connect.server({
        port: 8888,
        root: 'src',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./src/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./src/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
