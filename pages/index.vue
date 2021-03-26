<template>
  <v-row class="wrap-row" no-gutters>
    <h2>Оновлені</h2>
    <anime-card-slider v-if="!loading" :animes="animes" uniqueClass="recentlyUpdated" />
    <slider-button v-if="!loading" text="Показати всі" to="/search" />

    <h2>Топ по переглядах</h2>
    <anime-card-slider v-if="!loading" :cardHeight="2" :animes="animes" uniqueClass="topWatched" />
    <slider-button v-if="!loading" text="Показати всі" to="/search" />
  </v-row>
</template>

<script>
import AnimeCard from '~/components/AnimeCard.vue'
import AnimeCardSlider from '~/components/AnimeCardSlider.vue'
import SliderButton from '~/components/SliderButton.vue'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      loading: true,
    }
  },
  components: {
    AnimeCard,
    AnimeCardSlider,
    SliderButton
  },
  computed: {
    ...mapGetters({
      animes: 'anime/getAnimes'
    })
  },
  async created() {
    await this.$store.dispatch('anime/load')
    this.loading = false
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
