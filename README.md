# Important note

*I considered this project "finished" since around v0.1.3 and merely updated the
dependencies. Since I'm not interested in programming in JavaScript anymore, I
won't update the dependencies and will turn off dependabot for this package as
I find that tiresome and superfluous. Feel free to fork it if you find this
package useful and want to update it regularly and/or have anything to
add/improve.*

# nuxt-content-highlight

Text highlighting wrapper for `@nuxt/content`.

![][1] ![][2] ![][3]

- [Installation](#installation)
- [Demo](#demo)
- [Example usage](#example-usage)
- [Props](#props)
- [CSS](#css)

![Animated screenshot of a demo](/../screenshot-gif/nuxt-content-highlight.gif?raw=true)

# Installation

```bash
$ yarn add -D nuxt-content-highlight
```

or

```bash
$ npm install -D nuxt-content-highlight
```

# Demo

Clone this repository, then:

```bash
$ yarn dev
```

or

```bash
$ npm run dev
```

and navigate to `http://localhost:3000`.

# Example usage

Add the following lines to `nuxt.config.js`, if not already present:

```javascript
    modules: [
        '@nuxt/content',
        'nuxt-content-highlight',
    ],

    build: {
        transpile: [
            'nuxt-content-highlight',
            '@nuxt',
        ],
    },
```

Inside of the (page's) `<script>`:
```javascript
{
    data()
    {
        return {
            document: {},
        };
    },

    async asyncData({ $content })
    {
        const document = await $content('example').fetch();
        return {
            document,
        };
    },
}
```

Part of the template:
```html
<nuxt-content-highlight :document="document" highlight-text="some text">
</nuxt-content-highlight>
```

Contents of `content/example.md` file:
```markdown
# Example document

This is a document containing some text.  But not just any text.  Some text is
different.
```

Output:

```html
<h1>Example document</h1>
<p>This is a document containing <span style="highlight">some text</span>. But
not just any text. <span style="highlight">Some text</span> is different.</p>
```

# Props

## caseSensitive

Type: `Boolean`  
Default: `false`  

Should the search for the text to be highlighted be case-sensitive or not.

## document

Type: `Object`  
Required: `true`  

_@nuxt/content_ object obtained by `$content(...).fetch()` and passed on to
`<nuxt-content>` component

## highlightText

Type: `String`  
Default: `""`  

Text to be highlighted

## highlightClassName

Type: `String`  
Default: `"highlight"`  

CSS class to be added to the highlight `<span>`

# CSS

To style the highlights, you should customize the CSS of the
`[highlightClassName]` class (default: `highlight`). Example:

```css
.highlight
{
    background-color: #ff9
}
```

[1]: https://img.shields.io/github/stars/Strahinja/nuxt-content-highlight?label=%E2%AD%90&logo=github
[2]: https://img.shields.io/github/license/Strahinja/nuxt-content-highlight
[3]: https://img.shields.io/npm/v/nuxt-content-highlight/latest

<!-- [3]: https://img.shields.io/github/downloads/Strahinja/nuxt-content-highlight/total?logo=github -->

