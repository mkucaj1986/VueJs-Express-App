/* jshint esversion: 6 */
import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        qty: 0
    },
    mutations: {
        increment(state) {
            state.qty++;
        },
        decrement(state) {
            state.qty++;
        },
    }
});
export default function() {
    return new Vuex.Store(store);
}
