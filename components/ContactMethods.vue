<template>
    <span class="md:flex flex-row items-center justify-center space-x-3">
        <span v-for="(method, idx) in this.methods" :key="idx">
            <ContactMethod :method="method" />
        </span>
    </span>
</template>

<script>
import ContactMethod from '@/components/ContactMethod.vue'
import contacts from '@/static/contacts.js'

export default {
    data() {
        return {
            methods: contacts
        }
    },
    components: {
        ContactMethod
    }
}
</script>
