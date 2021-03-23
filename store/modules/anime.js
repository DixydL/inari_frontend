const state = {
  animes: {},
  anime: {},
};

const getters = {
  getAnimes: state => {
    return state.animes;
  },
  getAnime: state => {
    return state.anime;
  }
}

const actions = {
  add: async (context, data) => {
    return context.rootGetters.axios()
      .post("anime", data)
      .then(response => {
        return response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  },

  update: async (context, data) => {
    return context.rootGetters.axios()
      .put("anime/" + data.anime_id, data.form)
      .then(response => {
        return response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  },

  load: async (context, data) => {
    await context.rootGetters.axios()
      .get("anime", { params: data })
      .then(response => {
        context.commit('load', response.data.data)
      })
      .catch(error => {
        console.log(error);
      });
  },
}

const mutations = {
  load(state, animes) {
    state.animes = animes
  },
}

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}
