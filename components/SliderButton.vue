<template>
    <v-container fluid class="slider-button-wrap">
        <v-row>
        <v-spacer>
            <div class="spacer-line" />
        </v-spacer>
        <v-btn
            class="slider-button red darken-1"
            draggable="false"
            :to="to"
            large
            rounded
            nuxt
        >
            {{ text }}
        </v-btn>
        <v-spacer>
            <div class="spacer-line" />
        </v-spacer>
        </v-row>    
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        text: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        }
    }
})
</script>

<style lang="scss" scoped>
.slider-button-wrap {
    margin: 16px 0;

    & .slider-button {
    text-transform: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 400;
    margin: 0 10px;
    }

    & .spacer {
        display: flex;
        align-items: center;

        .spacer-line {
            width: 100%;
            border-top: 1px solid rgba($color: #fff, $alpha: .5);
        }
    }

    
}





</style>