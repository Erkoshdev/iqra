import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue';
import router from './router';
import Api from './services/api.service';
import http from "./services/interceptor";
import VGlModal from './components/VGlModal';
import mitt from 'mitt';
import { VueMaskDirective } from 'v-mask';
import Notifications from '@kyvg/vue3-notification';

import './assets/styles/app.scss'

const vMaskV2 = VueMaskDirective;
const vMaskV3 = {
  beforeMount: vMaskV2.bind,
  updated: vMaskV2.componentUpdated,
  unmounted: vMaskV2.unbind
};

const eventBus = mitt()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VGlModal)
app.use(Notifications)
app.directive('mask', vMaskV3)

app.config.globalProperties.http = http;
app.config.globalProperties.API = Api;
app.config.globalProperties.eventBus = eventBus;


app.mount('#app')
