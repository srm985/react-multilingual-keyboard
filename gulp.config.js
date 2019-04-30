module.exports = () => ({
    buildTypes: {
        development: 'DEVELOPMENT',
        production: 'PRODUCTION'
    },
    bundleName: 'keyboard',
    configFiles: {
        sassConfig: './.sasslintrc'
    },
    directories: {
        distDirectory: './dist',
        rootDirectory: './',
        srcDirectory: './src',
        tasksDirectory: './tasks'
    },
    environmentalVariables: {
        buildEnvironment: 'BUILD_ENVIRONMENT'
    },
    packageJSON: './package.json',
    port: 3000,
    tasks: {
        buildProduction: 'build-prod',
        bumpVersion: 'bump-version',
        bundle: 'bundle',
        cleanDist: 'clean',
        develop: 'develop',
        lint: 'lint',
        lintCSS: 'lint-css',
        lintJS: 'lint-js',
        serve: 'serve',
        watch: 'watch'
    },
    webpackConfig: '../webpack.config.js'
});
