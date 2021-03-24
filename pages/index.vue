<template>
  <v-row class="wrap-row" no-gutters>
    <h2>Нещодавно оновлені</h2>
    <anime-card/>
  </v-row>
</template>

<script lang="ts">
import AnimeCard from '~/components/AnimeCard.vue'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
,
    AnimeCard
<style lang="scss" scoped>
  .wrap-row {
    flex-direction: column;
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }
</style>
