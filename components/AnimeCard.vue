<template>
    <nuxt-link class="anime-card-wrap" tag="div" :to="'/anime/' + id">
        <div class="anime-card-poster-wrap">
            <div class="anime-card-poster" :style="{backgroundImage: `url(${posterUrl})`}"></div>
            <div
                v-if="!!currentEpisodes && !!countEpisodes" 
                class="anime-card-episods-counter"
            >{{ currentEpisodes }} / {{ countEpisodes }}</div>
        </div>
        <div class="anime-card-title">{{ name }}</div>
        <div class="anime-card-kind">{{ type }}</div>
    </nuxt-link>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export interface AnimeCardProps {
    id: number,
    posterUrl: string,
    name: string,
    type: string,
    currentEpisodes?: number,
    countEpisodes?: number
}

export default Vue.extend({
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        posterUrl: {
            type: String,
            required: true
        },
        currentEpisodes: Number,
        countEpisodes: Number
    }
})
</script>

<style lang="scss">

    .anime-card-wrap {
        width: 190px !important;
        cursor: pointer;     
    
    .anime-card-poster-wrap {
        position: relative;

        .anime-card-episods-counter {
            position: absolute;
            bottom: 0;
            right: 0;
            padding: 5px 10px;
            border-radius: 10px 0;
            background-color: #d32f2f;
            font-family: 'Montserrat', sans-serif;
            font-size: 16px;
            font-weight: 500;
        }

        .anime-card-poster {
        position: relative;
        width: inherit;
        height: 300px; 
        background-size: 100% 100%;
        border-radius: 10px;
    
        &::before,
        &::after {
            content: '';
            position: absolute;
            opacity: 0;
            transition: opacity .5s ease;
        }

        &::before {
            border-radius: 10px;
            background-color: rgba($color: #000000, $alpha: .8);
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }  

        &::after {
            top: calc(50% - 50px);
            left: calc(50% - 40px);
            width: 0;
            height: 0;
            border-left: 80px solid #D32F2F;
            border-top: 50px solid transparent;
            border-bottom: 50px solid transparent;
        }
    }
    }

    &:hover .anime-card-poster::before,
    &:hover .anime-card-poster::after {
        opacity: 1;
    }

    .anime-card-title,
    .anime-card-kind {
        width: inherit;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    .anime-card-title {        
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 18px;
    }

    .anime-card-kind {
        font-size: 14px;
    }
    
    }
</style>