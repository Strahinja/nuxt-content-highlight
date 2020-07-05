const { join } = require('path')
module.exports = function(moduleOptions)
{
    const isSSG = this.options.dev === false 
        && (this.options.target === 'static' 
            || this.options._generate || this.options.mode === 'spa')

    this.addPlugin({
        fileName: 'nuxt-content-highlight/plugin.server.js',
        src: join(__dirname, 'templates/plugin.server.js')
    })

    if (isSSG) {
        this.addTemplate({
            fileName: 'nuxt-content-highlight/plugin.client.lazy.js',
            src: join(__dirname, 'templates/plugin.js')
        })

        this.addPlugin({
            fileName: 'nuxt-content-highlight/plugin.client.js',
            src: join(__dirname, 'templates/plugin.js')
        })
    }
    else {
        this.addPlugin({
            fileName: 'nuxt-content-highlight/plugin.client.js',
            src: join(__dirname, 'templates/plugin.js')
        })
    }

    this.addTemplate({
        fileName: 'nuxt-content-highlight/nuxt-content-highlight.js',
        src: join(__dirname, 'templates/nuxt-content-highlight.js')
    })
}

module.exports.meta = require('../package.json')
