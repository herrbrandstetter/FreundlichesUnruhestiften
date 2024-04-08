<script setup>
    import { computed, onMounted, ref } from 'vue'
    import { navItems } from '../data'

    const showNav = ref(false)
    const width = ref(window.innerWidth)
    const mobileNav = computed(() => width.value < 768 )
    const props = defineProps({ navigation: Boolean })

    function toggle() {
        showNav.value = !showNav.value
    }

    function scrollPage(id, toggleNav) {
        toggleNav && toggle()

        if (id)
            document.getElementById(id).scrollIntoView({behavior: 'smooth'})
        else window.scrollTo({top: 0, behavior: 'smooth'})
    }

    onMounted(() =>
        window.addEventListener("resize", () => width.value = window.innerWidth)
    )
</script>

<template>
    <header class="bg-darkgray sticky top-0 z-[999] shadow-main selection:bg-sage">
        <div class="h-24 p-4 flex items-center justify-between gap-8">
            <a href="/" class="flex gap-3 items-center">
                <img src="../assets/images/logo.webp" alt="Abstrakt illustriertes Logo mit Naturthema" width="60px">
                <span class="text-xl drop-shadow-heading">Freundliches Unruhestiften</span>
            </a>
            <button type="button" @click="toggle" v-if="navigation && mobileNav" class="min-h-6 relative flex flex-col justify-between gap-[5px]">
                <div id="bar1" class="w-8 h-1 rounded bg-white transition-all duration-200" :class="showNav && '-rotate-45 translate-y-[10px]'"></div>
                <div id="bar2" class="w-8 h-1 rounded bg-white transition-all duration-200" :class="showNav && 'opacity-0'"></div>
                <div id="bar3" class="w-8 h-1 rounded bg-white transition-all duration-200" :class="showNav && 'rotate-45 -translate-y-[10px]'"></div>
            </button>
            <ul v-if="navigation && !mobileNav" class="p-4 w-2/3 text-lg bg-darkgray flex items-center justify-between gap-5">
                <li v-for="item in navItems">
                    <button type="button" @click="scrollPage(item.id, false)" class="drop-shadow-text hover:underline">
                        {{ item.name }}
                    </button>
                </li>
            </ul>
        </div>
        <ul v-if="navigation && showNav" class="p-4 w-full text-lg bg-darkgray absolute flex flex-col items-center gap-3 transition-all duration-200">
            <li v-for="item in navItems">
                <button type="button" @click="scrollPage(item.id, true)" class="drop-shadow-text hover:underline">
                    {{ item.name }}
                </button>
            </li>
        </ul>
    </header>
</template>