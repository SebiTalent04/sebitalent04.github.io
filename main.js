import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Heading from '@/components/Heading.vue'
import Subheading from '@/components/Subheading.vue'
import '@/assets/index.css'
import '@/assets/theming.css'
import 'roboto-mono-webfont'
import 'a17t'
//
import Unicon from 'vue-unicons'
import { uniSun, uniMoon, uniBars, uniMultiply, uniCheckCircleMonochrome } from 'vue-unicons/dist/icons'

Unicon.add([uniSun, uniMoon, uniBars, uniMultiply, uniCheckCircleMonochrome])

createApp(App)
    .component('heading', Heading)
    .component('subheading', Subheading)
    .use(router)
    .use(Unicon)
    .mount('#app')
