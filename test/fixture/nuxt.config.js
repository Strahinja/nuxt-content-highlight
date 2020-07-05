const { resolve } = require('path')
const contentHighlightModule = require('../..')

module.exports = {
    rootDir: resolve(__dirname, '../..'),
    buildDir: resolve(__dirname, '.nuxt'),
    srcDir: __dirname,
    modules: [
        '@nuxt/content',
        contentHighlightModule
    ],
    build: {
        transpile: [
            /nuxt-content-highlight/,
            /@nuxt\/content/,
        ],
    },
}

