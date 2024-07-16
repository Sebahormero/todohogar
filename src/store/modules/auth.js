const state = {
  user: JSON.parse(localStorage.getItem('user')) || null
};

const mutations = {
  setUser(state, user) {
    state.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  },
  logout(state) {
    state.user = null;
    localStorage.removeItem('user');
  }
};

const actions = {
  login({ commit }, user) {
    commit('setUser', user);
  },
  logout({ commit }) {
    commit('logout');
  }
};

const getters = {
  isAuthenticated: state => !!state.user,
  user: state => state.user
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
