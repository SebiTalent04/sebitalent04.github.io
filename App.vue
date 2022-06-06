<template>
    <div id="app" class="max-w-screen-lg mx-auto px-6 py-4 md:px-4 md:py-10">
        <div class="relative mb-8" id="nav">
            <header class="flex items-center flex-wrap justify-evenly">
                <div class="mr-6">
                    <h3 class="text-2xl">
                        <a class="flex items-center logo">
                            <span class="rainbow"
                                ><router-link to="/"><Name /></router-link
                            ></span>
                        </a>
                    </h3>
                </div>
                <div class="block sm:hidden">
                    <button
                        class="flex items-center px-3 py-3 text-gray-700 hover:text-gray-900"
                        title="Menu"
                        onclick="document.querySelector('#navButtons').classList.toggle('hidden')"
                    >
                        <Unicon width="20" height="20" name="bars" fill="#d8dee9" />
                    </button>
                </div>
                <ul
                    id="navButtons"
                    class="align-baseline sm:block flex-wrap md:flex md:items-center flex-grow py-4 px-2 md:p-0 hidden md:bg-transparent"
                >
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About Me</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                </ul>
            </header>
        </div>
        <router-view />
        <Footer />
    </div>
</template>

<style scoped>
.logo {
    user-select: none;
}

#nav {
    position: sticky;
    top: 0;
    backdrop-filter: blur(5px);
    z-index: 5;
}

#nav a:link {
    text-decoration: none;
}

#nav li {
    display: inline-flex;
}
</style>

<script>
document.addEventListener('contextmenu', event => event.preventDefault())

import Footer from './components/Footer.vue'
import Name from './components/Name.vue'

export default {
    components: {
        Footer,
        Name
    }
}
</script>

<style>
@import '@/assets/theming.css';

#app {
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

#nav li {
    padding-right: 15px;
}

#nav a {
    font-weight: bold;
    padding: 5px;
}
</style>
