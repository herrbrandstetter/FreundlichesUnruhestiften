<script setup>
    import { ref, computed, inject } from 'vue'
    import { episodeData } from '../data'
    
    const selected = ref(document.cookie.split(/; |=/)[3] || 0)
    const selectedEp = computed(() => episodeData[selected.value])
    const cookieConsent = inject("consent")

    function selectEpisode(index) {
        selected.value = index

        document.getElementById('podcast-player').scrollIntoView({behavior: 'smooth'})

        cookieConsent.value && saveSelected(index)
    }

    function saveSelected(index) {
        const expDate = new Date()
        expDate.setTime(expDate.getTime() + (30*24*3600*1000))
        document.cookie = `selectedEp=${index}; Expires=${expDate.toUTCString()}; Path=/; SameSite=None; Secure`
    }
</script>

<template>
    <div class="px-5 py-8 mx-auto max-w-192 space-y-7">
        <h1 id="podcast-folgen" class="text-center text-3xl font-bold drop-shadow-heading scroll-margin">Podcastfolgen</h1>
        <div id="podcast-player" class="p-4 rounded bg-sage space-y-4 flex flex-col items-center scroll-m-[7.25rem]">
            <img :src="`/img/${selectedEp.image}.webp`" :alt="selectedEp.imgAlt" class="w-1/2 max-w-72 rounded">
            <h2 class="text-xl text-center font-bold drop-shadow-text">{{ selectedEp.title }}</h2>
            <p class="text-center drop-shadow-text">{{ selectedEp.description }}</p>
            <iframe v-if="cookieConsent" :src="`https://redcircle.com/embedded-player/sh/freundlichesunruhestiften/ep/${selectedEp.link}`" class="w-full max-w-[570px] rounded" title="Freundliches Unruhestiften Podcast player"></iframe>
            <a v-else :href="`https://redcircle.com/shows/freundlichesunruhestiften/ep/${selectedEp.link}`" target="_blank" class="p-3 rounded flex items-center gap-3 bg-darkgray hover:outline outline-2">
                <img src="../assets/images/logo.webp" alt="Abstrakt illustriertes Logo mit Naturthema" width="60px">
                <span>Auf RedCircle anhören</span>
            </a>
        </div>
        <ul class="space-y-7">
            <li v-for="(episode, index) in episodeData" class="rounded bg-sage hover:outline outline-2">
                <button @click="selectEpisode(index)" class="w-full p-4 flex items-center justify-between">
                    <div class="flex flex-col items-start">
                        <span class="uppercase tracking-wide drop-shadow-text">Folge {{ index + 1 }}</span>
                        <p class="text-left font-bold drop-shadow-text">{{ episode.title }}</p>
                    </div>
                    <img src="../assets/images/play.svg" alt="Folge abspielen" class="w-14 max-h-14 p-2">
                </button>
            </li>
        </ul>
    </div>
</template>