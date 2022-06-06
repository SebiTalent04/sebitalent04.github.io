<template>
    <a :href="href" target="_blank">
        <div class="card shadow-md hover:shadow-xl max-w-xs max-h-max">
            ​
            <slot></slot>
            ​
        </div>
    </a>
</template>

<style scoped>
a:link {
    text-decoration: none;
}
</style>

<script>
export default {
    props: {
        href: {
            type: String,
            required: false
        }
    }
}
</script>
