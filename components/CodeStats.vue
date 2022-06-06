<template>
    <Frame>
        <h2 class="subheading text-lg md:text-xl">Sorted in order of usage:</h2>
        <b v-if="loadingStats">Loading stats, give me a moment</b>
        <ul>
            <li v-for="languages in stats" :key="[languages[1].xps, languages[0]]">
                <span class="subheading text-lg mb-5 font-bold">{{ languages[0] }}</span>
                <span class="pb-4"> - {{ humanize(languages[1].xps) }} characters</span>
                <br />
            </li>
        </ul>
    </Frame>
</template>

<script>
import Frame from '@/components/Frame.vue'
import axios from 'axios'

export default {
    components: {
        Frame
    },
    data() {
        return {
            stats: null,
            loadingStats: true
        }
    },
    computed() {
        this.humanize()
    },
    methods: {
        humanize: function (number) {
            return number.toLocaleString()
        }
    },
    mounted() {
        axios
            .get('https://codestats.net/api/users/SebiTalent04')
            .then(response => {
                this.stats = Object.entries(response.data.languages).sort((a, b) => b[1].xps - a[1].xps)
            })
            .finally(() => (this.loadingStats = false))
    }
}
</script>
