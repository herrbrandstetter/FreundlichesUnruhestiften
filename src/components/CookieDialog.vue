<script setup></script>

<template>
    <dialog @cancel.prevent id="cookie-dialog" aria-labelledby="privatsphäre" class="p-7 mx-5 max-w-[48rem] rounded border-2 flex-col items-center gap-7 bg-darkgray text-white selection:bg-sage sm:p-12 md:mx-auto">
        <h1 id="privatsphäre" class="text-2xl text-center font-bold drop-shadow-heading sm:text-3xl">Privatsphäre-Einstellungen</h1>
        <p class="text-center drop-shadow-text">
            Cookies können zwar nicht die Welt verändern, aber hier erlauben sie es dir, die Podcastfolgen direkt auf der Webseite zu hören.
            Dafür werden bestimmte Daten an unseren Hosting-Anbieter RedCircle gesendet. Mit einem Click auf "Einverstanden" stimmst du dieser Datenverarbeitung zu
            und kannst unsere Seite optimal nutzen. 
        </p>
        <a href="/pages/datenschutz/" class="underline hover:no-underline">Mehr erfahren</a>
        <div class="flex flex-col items-center gap-5 sm:flex-row">
            <button type="button" @click="$emit('consent', true)" class="p-3 w-36 rounded bg-sage hover:outline outline-2">Einverstanden</button>
            <button type="button" @click="$emit('consent', false)" class="p-3 w-36 rounded bg-sage hover:outline outline-2">Ablehnen</button>
        </div>
        <div class="flex flex-col items-center gap-3">
            <a href="/pages/datenschutz/" class="uppercase tracking-wide hover:underline">Datenschutzbestimmungen</a>
            <a href="/pages/impressum/" class="uppercase tracking-wide hover:underline">Impressum</a>
        </div>
    </dialog>
</template>