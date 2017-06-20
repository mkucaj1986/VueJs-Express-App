/* jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
import increment from './modules/increment';
import shoppingCart from './modules/shoppingCart';

const store = new Vuex.Store({
    modules: {
        increment,
        shoppingCart
    }
});

export default function() {
    return store;
}

