import Vue from 'vue'
import Vuex from 'vuex'

import Public from './store/public'
import msg from './store/msg'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Public,
        msg
    }
})
