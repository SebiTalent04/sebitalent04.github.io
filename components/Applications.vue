<template>
    <Frame>
        <ul>
            <li v-for="method in this.methods" :key="[method]">
                <Application :method="method" />
            </li>
        </ul>
    </Frame>
</template>

<script>
import Frame from '@/components/Frame.vue'
import Application from '@/components/Application.vue'
import applications from '@/static/applications.js'

export default {
    data() {
        return {
            methods: applications
        }
    },
    components: {
        Frame,
        Application
    }
}
</script>
