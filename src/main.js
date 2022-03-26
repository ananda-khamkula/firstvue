import { createApp } from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies';
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(VueCookies);
createApp(App).config.productionTip = false;

window.$cookies.set('theme','default');
window.$cookies.set('hover-time','1s');

createApp(App).mount('#app');
