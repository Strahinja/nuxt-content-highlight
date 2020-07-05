<template>
    <div>
        <h1>{{ page.title }}</h1>
        <nuxt-content-highlight :document="page"
            highlight-text="article" />
    </div>
</template>

<script>
export default {
    async asyncData({ $content })
    {
        const page = await $content('home').fetch();

        return {
            page,
        };
    }
}
</script>

