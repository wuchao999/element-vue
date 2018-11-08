import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import './mock'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/index.less'

Vue.use(ElementUI)
Vue.config.productionTip = false

router.beforeEach((from, to, next) => {
    store.commit('Public/updateLoading', true)
    setTimeout(next, 400)
})

router.afterEach(() => {
    store.commit('Public/updateLoading', false)
})

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
