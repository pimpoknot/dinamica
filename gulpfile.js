const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const php = require('gulp-connect-php');

function sassCompiler(){
  return gulp
  .src('./src/public/sass/*.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('./src/public/'))
  .pipe(browserSync.stream());
}

gulp.task('sass', sassCompiler);

// function browser(){
//   browserSync.init({
//     server: {
//         baseDir:"./src/"
//     }
//   })
// }

// gulp.task('browser-sync', browser);

function watch(){
  gulp.watch('./src/public/sass/*.scss', sassCompiler);
}

gulp.task('dev', function() {
  browserSync.init({
      proxy:"localhost:3000",
      baseDir: "./src/",
      open:true,
      notify:false
  });
  php.server({base:'./src/', port:3000, keepalive:true});
  gulp.watch(['./src/*.php','./src/*.html']).on('change', browserSync.reload);
});

gulp.task('watch', watch)

gulp.task('default', gulp.parallel('watch', 'dev')); 