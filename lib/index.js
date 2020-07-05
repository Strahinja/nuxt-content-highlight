const { join } = require('path')
module.exports = function()
{
    this.addPlugin({
        fileName: 'nuxt-content-highlight/plugin.js',
        src: join(__dirname, 'templates/plugin.js')
    })

    this.addTemplate({
        fileName: 'nuxt-content-highlight/nuxt-content-highlight.js',
        src: join(__dirname, 'templates/nuxt-content-highlight.js')
    })
}

module.exports.meta = require('../package.json')
