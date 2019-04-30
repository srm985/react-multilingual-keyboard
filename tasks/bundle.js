const gulp = require('gulp');
const log = require('fancy-log');
const webpack = require('webpack');

const {
    tasks: {
        bundle
    },
    webpackConfig
} = require('../gulp.config.js')();

gulp.task(bundle, (callback) => {
    const webpackConfigObject = require(webpackConfig)(); // eslint-disable-line global-require

    webpack(webpackConfigObject, (err) => {
        if (err) {
            throw log('webpack', err);
        }

        log('Webpack: Bundled');
        callback();
    });
});
