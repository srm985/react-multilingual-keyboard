const gulp = require('gulp');
const log = require('fancy-log');
const openBrowser = require('open');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const {
    port,
    tasks: {
        serve
    },
    webpackConfig
} = require('../gulp.config.js')();

gulp.task(serve, () => {
    const webpackConfigObject = require(webpackConfig)(); // eslint-disable-line global-require
    const compiler = webpack(webpackConfigObject);

    new WebpackDevServer(compiler, webpackConfigObject.devServer)
        .listen(port, 'localhost', (err) => {
            if (err) {
                throw log('webpack-dev-server', err);
            }

            log('[webpack-dev-server]', `http://localhost:${port}/index.html`);
            log('[server]', `http://localhost:${port}/webpack-dev-server/index.html`);

            openBrowser(`http://localhost:${port}/webpack-dev-server/index.html`);
        });
});
