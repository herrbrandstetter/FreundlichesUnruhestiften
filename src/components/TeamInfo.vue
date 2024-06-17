<script setup>
    import { teamInfo } from '../data'
</script>

<template>
    <ul class="flex flex-col gap-7 lg:max-w-[36rem]">
        <li v-for="person in teamInfo" class="p-4 rounded bg-darksage">
            <h2 class="text-xl font-bold drop-shadow-heading">{{ person.general }}</h2>
            <p class="mt-3 drop-shadow-text">{{ person.text }}</p>
        </li>
    </ul>
</template>