const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssSorter = require('css-declaration-sorter');
const mmq = require('gulp-merge-media-queries');

const srcPath = {
    sass : 'src/sass/**/*.scss',
    html : 'src/index.html',
    js : 'src/js/script.js',
}

const destPath = {
    css : 'dist/css',
    js: 'dist/js'
}
const sassBuild = () => {
return src(srcPath.sass)
    .pipe(sass({ outputStyle: 'expanded'}))
    .pipe(dest(destPath.css))
    .pipe(postcss([autoprefixer(),cssSorter({order:'smacss'})]))
    .pipe(mmq())
}

const jsBuild = () => {
return src(srcPath.js)
.pipe(dest(destPath.js))
}

const watchSass = () =>{
    watch(srcPath.sass, sassBuild)
    watch(srcPath.js, jsBuild)
}

exports.default = series(sassBuild, watchSass, jsBuild);
exports.build = sassBuild;
exports.build = jsBuild;


