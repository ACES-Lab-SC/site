import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ajax from './config/ajax'
import './style/common'
// import './config/rem'

import ElementUI from 'element-ui'

// import { Table } from 'element-ui';

Vue.use( ElementUI);


Vue.use(VueRouter)


const router = new VueRouter({
	routes
})

new Vue({
	router,
	store,
}).$mount('#app')