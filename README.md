# nuxt-content-highlight

Text highlighting wrapper for `@nuxt/content`.

# Installation

```bash
$ yarn add -D nuxt-content-highlight
```

or

```bash
$ npm install -D nuxt-content-highlight
```

# Example usage


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
<nuxt-content-highlight :document="document" highlightText="some text">
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
<h1> Example document</h1>
<p>This is a document containing <span style="highlight">some text</span>. But
not just any text. <span style="highlight">Some text</span> is different.</p>
```

# Props

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

