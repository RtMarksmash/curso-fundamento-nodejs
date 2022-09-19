const gulp = require('gulp');
const server = require('gulp-server-livereload')

gulp.task('build', (cb)=>{
    console.log('construyendo el sitio')
    setTimeout(cb,1200)
});


gulp.task('server', (cb) =>{
    gulp.src('wwww')
    .pipe(server({
        livereload:true,
        open: true
    }))
})

gulp.task('default', gulp.series('build', 'liveserver'));