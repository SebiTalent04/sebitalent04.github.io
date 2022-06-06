<template>
    <div class="contact">
        <div class="md:flex md:mt-24">
            <section class="md:w-full md:max-h-screen mb-4">
                <heading class="mb-2"> Get in touch </heading>
                <subheading class="mb-6"> Just in case you want to know all the random things I do! </subheading>
                <ContactMethods class="mb-6" />
                <heading class="sm:mt-10 md:mt-4"> Need something? </heading>
                <Click2Copy :text="discordName.toString()" />
            </section>
        </div>
    </div>
</template>

<script>
import ContactMethods from '@/components/ContactMethods.vue'
import Click2Copy from '@/components/Click2Copy.vue'
import Heading from '@/components/Heading.vue'
import axios from 'axios'

export default {
    components: {
        ContactMethods,
        Click2Copy,
        Heading
    },
    data() {
        return {
            discordUsername: {},
            discordDiscriminator: {},
            discordName: ''
        }
    },
    async mounted() {
        await axios({
            url: 'https://site-api.sebitalent04.workers.dev/',
            method: 'get'
        }).then(response => {
            ;(this.discordUsername = response.data.discord.username),
                (this.discordDiscriminator = response.data.discord.discriminator),
                (this.discordName = `${this.discordUsername}#${this.discordDiscriminator}`)
        })
    }
}
</script>
