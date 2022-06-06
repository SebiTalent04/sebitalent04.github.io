<template>
    <div class="about">
        <div class="md:flex md:mt-24 mb-12 md:pl-6">
            <section class="md:w-full">
                <heading>
                    Hi, I'm <span class="rainbow"><Name /></span>.
                </heading>
                <subheading class="mb-7"> I'm a big nerd who does things on the internet. </subheading>
                <div class="grid grid-flow-row justify-center items-center md:grid-flow-col gap-5">
                    <Card href="https://github.com/SebiTalent04">
                        <subheading class="font-bold">​ GitHub Repos ​</subheading>
                        <subheading v-if="!populated">...</subheading>
                        <heading v-else>{{ repos }}</heading>
                    </Card>
                    <Card href="https://last.fm/user/SebiTalent04">
                        <subheading class="font-bold">​ Most Played Track ​</subheading>
                        <subheading v-if="!populated">...</subheading>
                        <subheading v-else>"{{ topTrack.name }}" <br />by {{ topTrack.artist }}</subheading>
                    </Card>
                    <Card href="https://last.fm/user/SebiTalent04">
                        <subheading class="font-bold" v-if="!populated">​ Last Played Track ​</subheading>
                        <subheading class="font-bold" v-else-if="recentTrack.nowPlaying === 'true'"
                            >​ Current Track ​</subheading
                        >
                        <subheading class="font-bold" v-else>​ Last Played Track ​</subheading>
                        <subheading v-if="!populated">...</subheading>
                        <subheading v-else>"{{ recentTrack.name }}" <br />by {{ recentTrack.artist }}</subheading>
                    </Card>
                    <Card href="https://github.com/SebiTalent04/sebitalent04.github.io">
                        <subheading class="font-bold">​ Latest Commit ​</subheading>
                        <subheading v-if="!populated">...</subheading>
                        <subheading v-else
                            >{{ commit.comment }} <br />
                            {{ commit.date }}</subheading
                        >
                    </Card>
                </div>
            </section>
        </div>
        <div class="md:flex mb-24 items-center justify-between">
            <section class="md:w-5/12">
                <heading>Who am I?</heading>
            </section>
            <section class="md:w-7/12">
                <Frame>
                    <heading class="pb-2">I'm a geek from Romania</heading>
                    <hr />
                    <p class="pt-2 px-2">
                        To expand on this, I like programming, transcribing lyrics, video games, online privacy stuff
                        and computers in general.
                        <br />Anyway, I have a lot of places I like to spend my time, whether that'd be hammering out a
                        new function in this very website or just playing a couple games alone (I have little to no
                        friends lmao). <br />PS: I work for free, hit me up on my Discord from the
                        <router-link to="/contact">Contact</router-link> page.
                    </p>
                </Frame>
            </section>
        </div>
        <div class="md:flex mb-24 items-center justify-between">
            <section class="md:w-6/12 items-center content-center">
                <heading>I code in these languages &#8594;</heading>
                <a class="text-sm" href="https://codestats.net/users/SebiTalent04" target="_blank"
                    >(Here's where the data comes from)</a
                >
            </section>
            <section class="md:w-6/12 mt-6 align-baseline">
                <CodeStats />
            </section>
        </div>
        <div class="md:flex mb-24 items-center justify-between">
            <section class="md:w-6/12 items-center content-center">
                <heading>I use these apps &#8594;</heading>
                <span class="text-sm">(I'm not affiliated with any of these apps)</span>
            </section>
            <section class="md:w-6/12 mt-6 align-baseline">
                <Applications />
            </section>
        </div>
    </div>
</template>

<script>
import CodeStats from '@/components/CodeStats.vue'
import Applications from '@/components/Applications.vue'
import Card from '@/components/Card.vue'
import Frame from '@/components/Frame.vue'
import Name from '@/components/Name.vue'
import moment from 'moment'
import axios from 'axios'

export default {
    components: {
        CodeStats,
        Applications,
        Card,
        Frame,
        Name
    },
    data() {
        return {
            populated: false,
            repos: {},
            commit: {
                comment: {},
                date: {}
            },
            topTrack: {
                name: {},
                artist: {}
            },
            recentTrack: {
                name: {},
                artist: {},
                nowPlaying: {}
            }
        }
    },
    mounted() {
        axios.get('https://site-api.sebitalent04.workers.dev/').then(response => {
            this.repos = response.data.repos
            this.commit.comment = response.data.commit.message
            this.commit.date = moment(response.data.commit.date).format('DD/MM/YYYY h:mm A')
            this.topTrack.name = response.data.lastfm.topTrack.name
            this.topTrack.artist = response.data.lastfm.topTrack.artist
            this.recentTrack.name = response.data.lastfm.recentTrack.name
            this.recentTrack.artist = response.data.lastfm.recentTrack.artist
            this.recentTrack.nowPlaying = response.data.lastfm.recentTrack.nowPlaying
            this.populated = true
        })
    }
}
</script>
