/* jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
import increment from './modules/increment';

const store = new Vuex.Store({
    modules: {
        increment
    }
});

export default function() {
    return store;
}

