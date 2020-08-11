const { createBrowser } = require('tib')
const { setup, loadConfig, url } = require('@nuxtjs/module-test-utils')

describe('component', () => {
    let nuxt, browser, page

    beforeAll(async () => {
        ({ nuxt } = (await setup(loadConfig(__dirname))))
        browser = await createBrowser('puppeteer')
    }, 60000)

    afterAll(async () => {
        await nuxt.close()
        await browser.close()
    })

    test('nuxt-content-highlight creates highlight spans in generated html', async () => {
        page = await browser.page(url('/'))
        const html = await page.getHtml()

        expect(html).toMatch(new RegExp(/<div class="nuxt-content"><h1 id="first-article"><a aria-hidden="true" href="#first-article" tabindex="-1"><span class="icon icon-link"><\/span><\/a>First <span class="highlight">article<\/span><\/h1>\s*<p>This <span class="highlight">article<\/span> contains sample text.<\/p><\/div>/))
    })
})

