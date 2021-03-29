<template>
    <div class="anime-player-wrap">
        <div class="anime-player-episodes-numbers">
            <div
                v-for="episode in episodes"
                :class="{active: episode.episode === activeEpisodeNumber}"
                :key="episode.episode"
                @click="onEpisodeChange(episode.episode)"
            >
                {{ episode.episode }}
            </div>
        </div>

        <div class="player" v-html="episodes[activeEpisodeNumber-1].iframe"> </div>
    </div>    
</template>

<script>
export default {
    props: {
        episodes: {
            type: Array,
            required: true
        }
    },
    methods: {
        onEpisodeChange(episodeNumber) {
            this.activeEpisodeNumber = episodeNumber
        }
    },
    data() {
        return {
            activeEpisodeNumber: 1
        }
    }
}
</script>

<style lang="scss">
    .anime-player-wrap {
        

        .anime-player-episodes-numbers {
            display: flex;
            font-family: 'Montserrat', sans-serif;
            font-size: 1.4rem;
            margin-bottom: 16px;

            div {
                width: 45px;
                height: 45px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 10px;  
                background-color: #FF0000;
                border-radius: 10px;
                cursor: pointer;  
                transition: .5s all ease;            
            }

            div:hover {
                background-color: #a80505;
            }

            div:last-child {
                margin-right: 0;
            }

            div.active {
                background-color: #fff;
                color: #a80505;
            }

            div.active:hover {
                background-color: rgb(177, 177, 177);
            }
        }

        .player {
            height: calc(80vw / 2.5);

            iframe {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>