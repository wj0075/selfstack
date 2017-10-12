/**
 * Created by wb-wj270693 on 2017/9/22.
 */


import Vue from 'vue';
import VueRouter from 'vue-router';
// import App from  './App.vue';
import routes from './routers/router.js'
import './style/reset.scss';
/*var routes = [
    {
        path:'/',component:App,name:'App',
        children:[
            {
                path:'/home',component:resolve => require(['./pages/home'], resolve),name:'home'
            }
        ]
    }
];*/

const router = new VueRouter({
        routes
});
Vue.use(VueRouter);
const app = new Vue({
    router
}).$mount('#app');