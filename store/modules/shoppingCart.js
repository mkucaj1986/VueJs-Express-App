/* jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
import shoppingCart from '../../api/shoppingCart';

const state = shoppingCart;

const mutations = {
    'ADDTOCART' (state, product) {
        state.push(product);
    },
    'DELETEITEM' (state, item) {
        const index = item.index;
        if (index > -1) {
            state.splice(index, 1);
        }
    }
};

const actions = {
    addToCart: ({ commit }, product) => {
        commit('ADDTOCART', product);
    },
    deleteItem: ({ commit }, item) => {
        commit('DELETEITEM', item);
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
