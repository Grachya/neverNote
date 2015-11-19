var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	rename = require("gulp-rename"),
	sass = require('gulp-sass'),
	minifyCss = require('gulp-minify-css');

//соединяем все css файлы (в консоле gulp bundle)
gulp.task('bundle', function () {
  return gulp.src('1.0.0/build/css/*.css')
    .pipe(concatCss('bundle.css'))
    .pipe(gulp.dest('1.0.0/build/css/'));
});

//минифицируем файл css (в одну строчку)
gulp.task('minify',function(){
	return gulp.src('1.0.0/build/css/bundle.css')
	.pipe(minifyCss())
	.pipe(rename('bundle.min.css'))
	.pipe(gulp.dest('1.0.0/build/css/'));
});

//компилируем scss в css
gulp.task('sass', function(){
	return  gulp.src('1.0.0/sourse/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('1.0.0/build/css/'));
})

//для проверки
gulp.task('test',function(){
	console.log("newTest");
});

