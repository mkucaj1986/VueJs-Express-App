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
    },
    'TOTALPRICE' (state, product) {
        if(state[product].qty < 0){
            state[product].qty = 0;
        }
        state[product].totalPrice = state[product].qty * state[product].price;
    },
    'CHECKSTORE' (state, product) {
        const outOfStock = parseInt(state[product].qty) >= parseInt(state[product].inventory);
        if(state[product].qty < 0){
            state[product].qty = 0;
        }
        if(outOfStock){
            state[product].outOfStock = true;
            state[product].qty = state[product].inventory;
        }else{
            state[product].outOfStock = false;
        }
    }
};

const actions = {
    increment: ({ commit }, product) => {
        commit('INCREMENT', product);
    },
    decrement: ({ commit }, product) => {
        commit('DECREMENT', product);
    },
    totalPrice: ({ commit }, product) => {
        commit('TOTALPRICE', product);
    },
    checkStore: ({ commit }, product) => {
        commit('CHECKSTORE', product);
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
