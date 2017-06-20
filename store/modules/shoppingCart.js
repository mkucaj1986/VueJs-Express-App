/* jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
import shoppingCart from '../../api/shoppingCart';

const state = shoppingCart;

const mutations = {
    'ADDTOCART' (state, product) {
        state.push(product);
    }
};

const actions = {
    addToCart: ({ commit }, product) => {
        commit('ADDTOCART', product);
    }
};

const getters = {
    getShoppingCart: state => {
        return state;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
