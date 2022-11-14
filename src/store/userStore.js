export default {
  state: {
    user: {},
    isLoggedIn: false,
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.user = payload;
    },
    SET_CONNECTED: (state) => {
      state.isLoggedIn = true;
    },
    SET_DISCONNECTED: (state) => {
      state.isLoggedIn = false;
    },
  },
  actions: {
    setUser: (store, data) => {
      store.commit("SET_USER", data);
    },
    setConnected: (store) => {
      store.commit("SET_CONNECTED");
    },
    setDisconnected: (store) => {
      store.commit("SET_DISCONNECTED");
    },
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    me: (state) => state.user,
  },
  namespaced: true,
  modules: {},
};
