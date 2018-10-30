import Vue from 'vue';
import Vuex from 'vuex';
import Logger from 'vuex/dist/logger';

import index from './modules/index';

Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        index
    },
    plugins:[Logger()]
})