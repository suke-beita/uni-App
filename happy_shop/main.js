import App from './App'
import {myRequest} from './util/api.js'
import Vue from 'vue'

Vue.prototype.$myRequest=myRequest

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()