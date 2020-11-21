import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // = data
    products: []
  },
  getters: {
    // = computed properties

    /// ...
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0);
    }
  },
  actions: {
    // = methods
    fetchProducts() {
      // ...
    }
  },
  mutations: {
    // this is something new and it is for setting and updating of the state
    setProducts(state, products) {
      // update Products
      state.products = products;
    }
  }
});
