import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/custom.css';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

// BootstrapのCSSをインポート
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App).use(router).use(store).mount('#app');
