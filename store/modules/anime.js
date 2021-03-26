const state = {
  animes: [],
  anime: {},
};

const getters = {
  getAnimesMainInformation: state => {
    
  },
  getAnimes: state => {
    return state.animes.map(anime => ({
      id: anime.id,
      countEpisodes: anime.count_episodes,
      currentEpisodes: anime.current_episodes,
      name: anime.name,
      type: anime.type,
      posterUrl: process.env.APP_URL + anime.poster_url
    })).reduce((acc, curr) => acc.concat([curr, curr, curr, curr, curr, curr, curr, curr, curr, curr]), []); //TODO: remove increasing array by clones 
  },
  getAnimeById: state => id => {
    console.log('hello')
    return state.animes.find(anime => anime.id === id)
  },
  getAnime: state => {
    console.log(state.anime)

    const {
      name,
      name_origin: nameOrigin,
      country,
      count_episodes: countEpisodes,
      current_episodes: currentEpisodes,
      episodes,
      genres,
      type,
      studio,
      translators,
      voicers
    } = state.anime

    return {
      name,
      nameOrigin,
      country,
      countEpisodes,
      currentEpisodes,
      episodes: episodes.map(item => {
        const {
          episode,
          iframe,
          iframe2,
          iframe3,
          name
        } = item

        return {
          episode,
          iframe,
          iframe2,
          iframe3,
          name
        }
      }),
      genres: genres.map(item => ({id: item.id, name: item.name})),
      type,
      studio,
      translators: translators.map(item => ({id: item.id, name: item.name})),
      voicers: voicers.map(item => ({id: item.id, name: item.name}))
    }
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

  loadById: async(context, id) => {
    await context.rootGetters.axios().get(`anime/${id}`).then(response => {
      context.commit('loadAnime', response.data.data)
    })
  }
}

const mutations = {
  load(state, animes) {
    state.animes = animes
  },
  loadAnime(state, anime) {
    state.anime = anime
  }
}

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}
