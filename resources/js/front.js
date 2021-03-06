/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import App from "./views/App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/',
            name: 'home',
            component: Home
        },
        {
            path:'/about',
            name: 'about',
            component: About
        },
        {
            path:'/contact',
            name: 'contact',
            component: Contact
        }
    ]
});


const app = new Vue({
    el: '#app',
    render: h => h(App),
    router
});
