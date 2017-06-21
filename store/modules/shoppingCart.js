/* jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
import shoppingCart from '../../api/shoppingCart';
let price = null;
const state = {
    shoppingCart:shoppingCart,
    totalPrice:0
};

const mutations = {
    'ADDTOCART' (state, product) {
        state.shoppingCart.push(product);
        price = product.qty * product.price
        state.totalPrice += price;
    },
    'DELETEITEM' (state, item) {
        const index = item.index;
        if (index > -1) {
            state.shoppingCart.splice(index, 1);
        }
        price = item.product.qty * item.product.price
        state.totalPrice -= price;
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
