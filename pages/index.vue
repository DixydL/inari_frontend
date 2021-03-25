<template>
  <v-row class="wrap-row" no-gutters>
    <h2>Оновлені</h2>

    <anime-card-slider :animes="recentlyUpdatedAnimes"/>
    <slider-button text="Показати всі" to="/search"/>
  </v-row>
</template>

<script>
import AnimeCard from '~/components/AnimeCard.vue'
import AnimeCardSlider from '~/components/AnimeCardSlider.vue'
import SliderButton from '~/components/SliderButton.vue'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  data() {
    return {
      animes: this.$store.state.anime.animes.map(anime => ({
        id: anime.id,
        countEpisodes: anime.count_episodes,
        currentEpisodes: anime.current_episodes,
        name: anime.name,
        type: anime.type,
        posterUrl: process.env.APP_URL + anime.poster_url
      })).reduce((acc, curr) => acc.concat([curr, curr, curr, curr, curr, curr, curr, curr, curr, curr]), [])
    }
  },
  components: {
    AnimeCard,
    AnimeCardSlider,
    SliderButton
  },
  computed: {
    recentlyUpdatedAnimes () {
      return this.animes
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap-row {
    flex-direction: column;
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    margin-bottom: 16px;
  }
</style>
