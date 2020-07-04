<template>
    <nuxt-content-highlight-dev
        :document="document"
    />
</template>

<script>
import NuxtContentHighlight from './nuxt-content-highlight'

export default {
    name: 'NuxtContentHighlight',
    components: {
        NuxtContentHighlightDev: NuxtContentHighlight
    },
    props: NuxtContentHighlight.props,
}
</script>
