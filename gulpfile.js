import gulp from 'gulp';

import { path } from './gulp/config/path.js';
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { plugins } from './gulp/config/plugins.js';
import { scss } from './gulp/tasks/scss.js';
import { images } from './gulp/tasks/images.js';
import { js } from './gulp/tasks/js.js';
import { zip } from './gulp/tasks/zip.js';

import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
global.app = {
    isBuild: process.argv.includes("--build"),
    isDev: !process.argv.includes("--build"),
    path: path,
    gulp: gulp,
    plugins: plugins
}


function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.js, js);
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);

export { dev };
export { build };
export { deployZIP };

gulp.task('default', dev);