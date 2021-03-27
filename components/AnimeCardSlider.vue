<template>
    <div class="anime-card-slider-wrap">
        <div :class="'swiper-container ' + uniqueClass">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div
                    v-for="(anime, index) in animes" 
                    :key="index"
                    class="swiper-slide">
                <anime-card
                        :id="anime.id"
                        :name="anime.name"
                        :type="anime.type"
                        :posterUrl="anime.posterUrl"
                        :currentEpisodes="anime.currentEpisodes | 0"
                        :countEpisodes="anime.countEpisodes | 0"
                    />
                </div>
            </div>

            <!-- If we need navigation buttons -->
        </div>

        <div class="nav-buttons">
            <div class="swiper-button prev" @click="onPrevBtnClick">
                <v-icon large>mdi-apple-keyboard-control</v-icon>
            </div>
            <div class="swiper-button next" @click="onNextBtnClick">
                <v-icon large>mdi-apple-keyboard-control</v-icon>
            </div>
        </div>
    </div>
        

</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import AnimeCard, {AnimeCardProps} from '~/components/AnimeCard.vue'
import Swiper from 'swiper'


import 'swiper/swiper-bundle.min.css'

export default Vue.extend({
    props: {
        uniqueClass: {
            type: String,
            required: true
        },
        cardHeight: {
            type: Number,
            default: () => 1,
        },
        animes: {
            type: Array,
            required: true
        }
    },
    components: {
        AnimeCard,
        
    },
    mounted() {

        this.swiper = new Swiper('.' + this.uniqueClass, {
            slidesPerView: 'auto',
            slidesPerColumn: this.cardHeight,
            slidesPerColumnFill: 'row',
            spaceBetween: 16
        })
    },
    methods: {
        onPrevBtnClick() {
            this.swiper.slidePrev()
        },
        onNextBtnClick() {
            this.swiper.slideNext()
        }
    },
    data() {
        return {
            swiper: null as any,
        }
    }
})
</script>

<style lang="scss">

.anime-card-slider-wrap {
    position: relative;
    width: 100%;
}

.swiper-container {
    position: relative;
}

.swiper-slide {
    width: 200px !important;
}

.nav-buttons {
    position: absolute;
    right: 0;
    top: -50px;
    display: flex;
    
    .swiper-button {
        cursor: pointer;
    }

    .swiper-button i {
        color: #fff;
        opacity: .7;
        transition: opacity .5s ease;
    }

    .swiper-button:hover i {
        opacity: 1;
    }

    .swiper-button.prev {
        transform: rotate(-90deg);
    }

    .swiper-button.next {
        transform: rotate(90deg);
        margin-left: -10px;
    }
}

</style>

 