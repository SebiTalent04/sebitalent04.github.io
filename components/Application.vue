<template>
    <a :href="method.url" target="_blank">
        <div class="inline-block align-middle pr-2">
            <svg role="img" class="h-5 w-5" viewBox="0 0 24 24" :fill="method.hex" xmlns="http://www.w3.org/2000/svg">
                <path :d="icon.path" />
            </svg>
        </div>
        <span class="subheading text-lg mb-5 font-bold align-middle">{{ method.name }}</span>
    </a>
</template>

<style scoped>
a:link {
    text-decoration: none;
}
</style>

<script>
import icons from 'simple-icons'

export default {
    props: {
        method: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            icon: icons.Get(this.method.icon)
        }
    }
}
</script>
