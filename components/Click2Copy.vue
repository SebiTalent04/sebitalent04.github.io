<template>
    <div class="mb-2">
        <input
            :id="text"
            class="rainbow text-4xl pain w-full md:w-auto"
            type="text"
            @click="copy"
            :value="text"
            readonly
        />
        <br />
        <small :id="text + '2'">Click to copy!</small>
    </div>
</template>

<style scoped>
.pain {
    background-color: transparent;
    text-align: center;
    cursor: pointer;
}
</style>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    },
    methods: {
        copy: function () {
            const the = document.getElementById(this.text)
            const p = document.getElementById(this.text + '2')
            the.select()
            the.setSelectionRange(0, this.text.length)
            document.execCommand('copy')
            p.innerHTML = 'Copied!'
            setTimeout(function () {
                p.innerHTML = 'Click to copy!'
                the.select()
                the.setSelectionRange(0, 0)
                the.blur()
            }, 1500)
        }
    }
}
</script>
