/* jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
// const quantity = 0;
const state = {
  count: 0
};

const mutations = {
  'INCREMENT' (state, payload) {
    state.count += payload;
  },
  'DECREMENT' (state, payload) {
    state.count -= payload;
  }
};

const actions = {
  increment: ({commit}, payload) => {
    commit('INCREMENT', payload);
  },
  decrement: ({commit}, payload) => {
    commit('DECREMENT', payload);
  }
};

const getters = {
  getCount: state => {
    return state.count;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
