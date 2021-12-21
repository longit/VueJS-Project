import Vue from 'vue'
import VueRouter from 'vue-router'  
import DashboardComponent from '../views/Dashboard/DashboardComponent'
Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '', component: DashboardComponent },  
    ]
})