<template>
  <v-row v-if="!loading" justify="center" align="center">
    {{ anime }}
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  computed: {  
    ...mapGetters({
      anime: 'anime/getAnime'
    })
  },
  async created() {
    await this.$store.dispatch('anime/loadById', this.$route.params.anime_id)
    this.loading = false
  },
  data() {
    return {
    loading: true,
    id: this.$route.params.id
    }
  }
}
</script>
