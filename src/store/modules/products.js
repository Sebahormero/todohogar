import axios from 'axios';

const state = {
  products: []
};

const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  addProduct(state, product) {
    state.products.push(product);
  },
  updateProduct(state, updatedProduct) {
    const index = state.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      Vue.set(state.products, index, updatedProduct);
    }
  },
  deleteProduct(state, productId) {
    state.products = state.products.filter(p => p.id !== productId);
  }
};

const actions = {
  async fetchProducts({ commit }) {
    const response = await axios.get('/api/productos.json');
    commit('setProducts', response.data);
  },
  createProduct({ commit }, product) {
    commit('addProduct', product);
  },
  editProduct({ commit }, product) {
    commit('updateProduct', product);
  },
  removeProduct({ commit }, productId) {
    commit('deleteProduct', productId);
  }
};

const getters = {
  allProducts: state => state.products
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

