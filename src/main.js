import { createApp } from 'vue'
import App from './App.vue'

import {db} from './firebase';
console.log(db);

createApp(App).mount('#app')
