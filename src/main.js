import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'

import LoginComponent from './pages/Login/LoginComponent' 
import HomeComponent from './pages/Home/HomeComponent'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'  
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(VueRouter)


const routes = [
    {path: '/',  name: 'login', component: LoginComponent},
    {path: '/home',name: 'home', component: HomeComponent},
]

const router = new VueRouter ({
    routes
})

new Vue({ 
    router,
    render: h => h(App),
}).$mount('#app')