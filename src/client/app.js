/**
 * Created by wb-wj270693 on 2017/9/22.
 */
/*
import Dog from '../shared/dog';

const browserWj = new Dog('Browser wj');
document.querySelector('.app').innerHTML = browserWj.bark();*/

import Vue from 'vue';
import vueRouter from 'vue-router'

import test from './vuespace/test.vue';

new Vue({
    el:'#app',
    data:{
        name:'wj',
        age:18
    },
    components:{
        test,
    }
});