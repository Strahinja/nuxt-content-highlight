const { resolve } = require('path')
const nuxtContentHighlightModule = require('..')

//console.log('demo: nuxtContentHighlightModule = ',
    //nuxtContentHighlightModule);

module.exports = {
    rootDir: resolve(__dirname, '..'),
    buildDir: resolve(__dirname, '.nuxt'),
    srcDir: __dirname,
    components: true,
    modules: [
        '@nuxt/content',
        nuxtContentHighlightModule,
    ],
    build: {
        transpile: [
            'nuxt-content-highlight',
            '@nuxt',
        ],
    },
    nuxtContentHighlight: {
        highlightClassName: 'highlighted-text',
    }
};

