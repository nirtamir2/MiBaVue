import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'

Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
