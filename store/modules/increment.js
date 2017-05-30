/* jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
import products from '../../api/products';

const state = products;

const mutations = {
    'INCREMENT' (state, product) {
        state[product].qty++;
    },
    'DECREMENT' (state, product) {
        if (state[product].qty > 0) {
            state[product].qty--;
        }
    }
};

const actions = {
    increment: ({ commit }, product) => {
        commit('INCREMENT', product);
    },
    decrement: ({ commit }, product) => {
        commit('DECREMENT', product);
    }
};

const getters = {
    getProducts: state => {
        return state;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
