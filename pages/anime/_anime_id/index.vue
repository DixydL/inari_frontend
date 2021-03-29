<template>
  <v-container fill-height class="wrap" fluid>
    <v-row v-if="!loading">
      <v-col cols="3">
        <v-img :src="anime.posterUrl" :style="{ borderRadius: '10px' }" />
      </v-col>

      <v-col cols="9" style="display:flex; flex-direction: column;">
        <h2>{{ anime.name }}</h2>
        <h3>{{ anime.nameOrigin }}</h3>
        <div class="genres">
          <div
            class="genre red darken"
            v-for="genre in anime.genres"
            :key="genre.id"
          >
            {{ genre.name }}
          </div>
        </div>
        <p style="padding: 16px; background-color: #272727; border-radius: 10px; flex: 1;">{{ anime.description }}</p>
      </v-col>
    </v-row>

    <v-row v-if="!loading" style="align-items: stretch;">
      <v-col cols="3">
        <div class="anime-info">
          <div class="info-title">Студія</div>
          <div class="info-content">{{ anime.studio }}</div>
          <div class="info-title">Формат</div>
          <div class="info-content">{{ anime.type }}</div>
          <div class="info-title">Рік</div>
          <div class="info-content">{{ anime.releaseDate }}</div>
          <div class="info-title">Серій</div>
          <div class="info-content">
            {{ anime.currentEpisodes + " з " + anime.countEpisodes }}
          </div>
          <div class="info-title">Ролі озвучували</div>
          <div class="info-content">
            {{ anime.voicers.map(({ name }) => name).join(", ") }}
          </div>
        </div>
      </v-col>

      <v-col cols="9">
        <anime-player style="border-radius: 10px; background-color: #272727; padding: 16px" :episodes="anime.episodes" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AnimePlayer from "~/components/AnimePlayer.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    AnimePlayer,
  },
  computed: {
    ...mapGetters({
      anime: "anime/getAnime",
    }),
  },
  async created() {
    await this.$store.dispatch("anime/loadById", this.$route.params.anime_id);
    this.loading = false;
  },
  data() {
    return {
      loading: true,
    };
  },
};
</script>

<style lang="scss" scoped>
h2,
h3,
p {
  font-family: "Montserrat", sans-serif;
}

h2 {
  letter-spacing: 0.2rem;
  font-size: 2rem;
}

h3 {
  opacity: 0.7;
}

p {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0;
}

.genres {
  display: flex;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-size: 0.95rem;
  margin: 20px 0;

  .genre {
    border-radius: 10px;
    padding: 8px 10px;
    margin-right: 10px;
  }
}

.anime-info {
  font-family: "Montserrat", sans-serif;
  background-color: #272727;
  border-radius: 10px;
  padding: 16px;
  height: 100%;

  .info-title {
    font-weight: 500;
  }

  .info-content {
    margin-bottom: 16px;
  }
}
</style>
