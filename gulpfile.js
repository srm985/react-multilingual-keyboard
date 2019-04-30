const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const requireDir = require('require-dir');

const {
    buildTypes: {
        development,
        production
    },
    directories: {
        tasksDirectory
    },
    environmentalVariables: {
        buildEnvironment
    },
    tasks: {
        buildProduction,
        bundle,
        cleanDist,
        develop,
        lint,
        lintCSS,
        lintJS,
        serve,
        watch
    }
} = require('./gulp.config.js')();

requireDir(tasksDirectory);

gulp.task(develop, () => {
    process.env[buildEnvironment] = development;

    return gulpSequence(
        [
            cleanDist
        ],
        [
            lintJS,
            lintCSS
        ],
        [
            serve,
            watch
        ]
    )();
});

gulp.task(buildProduction, () => {
    process.env[buildEnvironment] = production;

    return gulpSequence(
        [
            cleanDist
        ],
        [
            lintJS,
            lintCSS
        ],
        [
            bundle
        ]
    )();
});

gulp.task(lint, [lintCSS, lintJS]);
