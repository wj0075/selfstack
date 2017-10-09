/* eslint-disable import/no-extraneous-dependencies */
/**
 * Created by wb-wj270693 on 2017/9/22.
 */
// const gulp = require('gulp');
import gulp from 'gulp'
// const babel = require('gulp-babel');
import babel from 'gulp-babel'
// const del = require('del');
import del from 'del'
import eslint from 'gulp-eslint';

import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.babel';


// import {exec} from 'child_process';
// const exec = require('child_process').exec;


const paths = {
    allScript: 'src/**/*.js?(x)',
    serverSrcJs:'src/server/**/*.js?(x)',
    sharedSrcJs:'src/shared/**/*.js?(x)',
    clientEntryPoint:'src/client/app.js',
    gulpFile: 'gulpfile.babel.js',
    webpackFile:'webpack.config.babel.js',
    clientBundle:'dist/client-bundle.js?(.map)',
    libDir:'lib',
    disDir:'dist',
    toDir:'lib/server/index'
};

gulp.task('lint',() =>
        gulp.src([
            paths.allScript,
            paths.gulpFile,
            paths.webpackFile
    ])
        .pipe(eslint())
        .pipe(eslint.format())
            // .pipe(eslint.failAfterError()
);

gulp.task('clean', () =>
    del([
        paths.libDir,
        paths.clientBundle,
    ])
);

gulp.task('build',['lint','clean'],() =>
    gulp.src(paths.allScript)
        .pipe(babel())
        .pipe(gulp.dest(paths.libDir))
);
/*gulp.task('main',['build'],(cb) => {
   exec(`node ${paths.toDir}`,(error,stdout) => {
       console.log(stdout);
       return cb(error)
   });
});*/

gulp.task('main',['lint','clean'],() =>
    gulp.src(paths.clientEntryPoint)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(paths.disDir))
);

gulp.task('watch', () => {
   gulp.watch(paths.allScript,['main']);
});

gulp.task('default',['watch','main']);
