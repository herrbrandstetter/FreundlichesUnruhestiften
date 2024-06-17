<script setup>
    import { ref } from 'vue'

    const open = ref(false)

    function toggle() {
        open.value = !open.value

        !open.value && document.getElementById('story').scrollIntoView({behavior: 'smooth'})
    }

    function scrollContact() {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'})

        open.value = !open.value
    }
</script>

<template>
    <div v-show="open" class="space-y-7">
        <p class="drop-shadow-text">
            Alles begann eigentlich damit, dass Bea einen Kurs entwickelte für Studierende an Hochschulen und Unis, um das Zusammenspiel von Erde, Mensch und unseren Systemen besser zu verstehen.
            Das Ergebnis war <cite>Paradigmenwechsel für eine regenerative Welt</cite>. Dieser Kurs läuft nun seit drei Jahren an der Hochschule für angewandte Wissenschaft und Kunst (HAWK) an all ihren Standorten und erfreut sich großer Nachfrage. 
        </p>
        <p class="drop-shadow-text">
            Diesen Kurs hat sie in unserem großen Freundeskreis allen Youngstern zur Verfügung gestellt, die gerade an der Schwelle stehen, ihr Leben in die eigenen Hände zu nehmen.
            Das hat zu einer echten Welle geführt und viel mit uns gemacht – uns erschüttert, bewegt, aber vor allem so sehr inspiriert und unsere Horizonte schlagartig weit und groß gemacht.
            Uns, als genau dieser Youngster-Generation, war so schnell klar, dass dieses Wissen viel breiter und schneller in die Welt hinaus muss. So hatten wir die Podcast-Idee und mussten Bea nicht lange bitten.
            Und als wir dann noch die Idee hatten, ihr einen ihrer ältesten Freunde dafür an die Seite zu stellen, war alles rund.
        </p>
        <p class="drop-shadow-text">
            Seit unserem Release ist viel passiert und wir sind neugierig, wie unsere Geschichte weiter geht, aber auch was du zu erzählen und zu sagen hast. Wir laden dich ausdrücklich ein, mit uns im Gespräch zu sein. 
            <button type="button" class="underline hover:no-underline" @click="scrollContact">Hier geht's lang</button>
        </p>
    </div>
    <button type="button" class="w-full flex items-center justify-center" @click="toggle" :class="open && 'mt-7'">
        <div class="w-[10%] h-[2px] rounded-sm shadow-main bg-white"></div>
        <span class="min-w-48 drop-shadow-text">{{ open ? '▲ Weniger anzeigen' : '▼ Die ganze Story' }}</span>
        <div class="w-[10%] h-[2px] rounded-sm shadow-main bg-white"></div>
    </button>
</template>