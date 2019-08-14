
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalculator, faSortDown, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {store} from '@/store'
 
Vue.use(VueAxios, axios)
Vue.use(Vuex);

library.add(faCalculator, faSortDown, faPlus)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

  
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
