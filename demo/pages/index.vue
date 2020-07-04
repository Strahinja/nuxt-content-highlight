<template>
    <div>
        <p>
            <code>@nuxt/content</code> highlight test.
        </p>
        <p>
            Try editing this input:
            <input type="text" v-model="highlightText" />
        </p>
        <p>
            <label for="case-sensitive">
                <input type="checkbox"
                       id="case-sensitive"
                       v-model="caseSensitive" />
                       Case sensitive 
            </label>
        </p>
        <nuxt-content-highlight :document="document"
            highlight-class-name="custom-highlight"
            :case-sensitive="isCaseSensitive"
            :highlight-text="highlightText" />
    </div>
</template>

<script>

export default {
    data() {
        return {
            caseSensitive: 0,
            highlightText: 'some text',
            document: {},
        };
    },
    async asyncData({ $content })
    {
        const document = await $content('test-doc').fetch();
        return {
            document,
        };
    },
    computed: {
        isCaseSensitive()
        {
            return this.caseSensitive==1;
        },
    },
};
</script>

<style>
html, body
{
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 12pt
}

.nuxt-content
{
    background-color: #f0f0f0;
    border-radius: 15px;
    padding: 1rem;
    margin: 1rem;
}

.custom-highlight
{
    background-color: #ff9;
    border: 1px solid #550;
    border-radius: 5px;
    padding: .3rem 0;
}
</style>

