<template>
    <div class="home">
        <div class="md:flex md:mt-16 mb-8 items-center justify-between">
            <section class="md:w-full">
                <a class="content-center">
                    <img :src="profilePicture" title="" alt="" class="rounded-full content-center mx-auto h-48 w-48" />
                </a>
            </section>
        </div>
        <div class="md:flex md:mt-8 mb-24 items-center justify-between">
            <section class="md:w-full">
                <heading>
                    Hi, I'm <span class="rainbow"><Name /></span>.
                </heading>
                <subheading class="mb-0">
                    Welcome to my home on the internet.<br />
                    If you're new here, try the<br />
                    <router-link to="/about">About</router-link> page ;)
                </subheading>
            </section>
        </div>
    </div>
</template>

<script>
import Name from '@/components/Name.vue'
import axios from 'axios'

export default {
    name: 'Home',
    components: {
        Name
    },
    data() {
        return {
            profilePicture: {}
        }
    },
    mounted() {
        axios.get('https://site-api.sebitalent04.workers.dev/').then(response => {
            this.profilePicture = `https://cdn.discordapp.com/avatars/${response.data.discord.id}/${response.data.discord.avatar}`
        })
    }
}
</script>
