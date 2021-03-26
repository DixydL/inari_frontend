import Vue from 'vue'
import Vuex from 'vuex'
import anime from './modules/anime';
import Axios from 'axios';

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    axiosAuth: null,
  },
  actions: {
    async nuxtServerInit({ dispatch }, { app, store }) {
    },
  },
  getters: {
    axios: state => () => {
      // if (state.user.user.token) {
      //   return Axios.create({ headers: { 'Authorization': 'Bearer ' + state.user.user.token, } });
     // } else {
        return Axios.create({baseURL: process.env.APP_URL + '/api/'});
      //}
    },
    getAuth: state => () => {
      return state.user.user.auth;
    },
  },
  mutations: {
  },
  modules: {
    anime,
  }
})

export default store
