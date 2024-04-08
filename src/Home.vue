<script setup>
    import CookieDialog from '@/components/CookieDialog.vue'
    import Header from '@/components/Header.vue'
    import PodcastPlayer from '@/components/PodcastPlayer.vue'
    import FullStory from '@/components/FullStory.vue'
    import TeamInfo from '@/components/TeamInfo.vue'
    import Footer from '@/components/Footer.vue'
    import { ref, provide } from 'vue'

    const cookieConsent = ref(document.cookie.split(/; |=/)[1] === "true")

    function setCookie(consent) {
        const expDate = new Date()
        expDate.setTime(expDate.getTime() + (30*24*3600*1000))
        document.cookie = `redCircleConsent=${consent}; Expires=${expDate.toUTCString()}; Path=/; SameSite=None; Secure`

        const cookieDialog = document.getElementById("cookie-dialog")
        cookieDialog.classList.remove("flex")
        cookieDialog.close()

        window.scrollTo({top: 0})

        cookieConsent.value = consent
    }

    provide("consent", cookieConsent)
</script>

<template>
    <CookieDialog @consent="setCookie" />
    <Header navigation></Header>
    <main>
        <section aria-labelledby="start" class="pt-96 bg-fixed bg-[url('/img/eichhörnchen_lg.jpg')] bg-center bg-no-repeat bg-cover xl:pt-[26rem]">
            <div class="bg-gradient-to-b from-darkgray/20 to-darkgray/80 selection:bg-sage">
                <div class="px-5 py-8 flex flex-col justify-evenly gap-7 md:flex-row">
                    <div class="max-w-[36rem] flex flex-col gap-7">
                        <h1 id="start" class="text-4xl font-bold drop-shadow-heading lg:text-5xl lg:leading-tight">Freundliches Unruhestiften</h1>
                        <!-- <div class="w-[15%] h-[2px] rounded-sm shadow-main bg-white"></div> -->
                        <h2 class="text-2xl font-bold drop-shadow-heading lg:text-3xl lg:leading-tight">Der etwas andere Nachhaltigkeits&shy;podcast</h2>
                    </div>
                    <div class="max-w-[36rem] flex flex-col gap-7 md:pt-28">
                        <h2 class="text-3xl drop-shadow-heading">Regenerativ statt degenerativ!</h2>
                        <p class="drop-shadow-text">
                            Das ist unser Thema. Dazu wollen wir freundlich Unruhe stiften in den Köpfen und Herzen. Immer wieder die Blickwinkel wechseln auf die gleiche Frage:
                            <i>Was ist eigentlich eine regenerative Welt, und was würde es brauchen, um sie zu gestalten?</i>
                            Denn wir lieben das Leben, die frische Luft und dieses komische Wesen Mensch. Wir glauben, dass die Welt voller Lösungen ist, und Leben leben will. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section aria-labelledby="spenden" id="donate" class="px-5 py-8 mx-auto max-w-192 scroll-margin">
            <div class="mb-7 max-w-[42rem] relative scroll-margin">
                <img 
                    src="./assets/images/biene-full.jpg" 
                    alt="Biene sammelt Nektar an rosa-gelber Blüte"
                    loading="lazy"
                    class="w-4/5 min-w-64 max-w-128 mx-auto rounded"
                    sizes="(max-width: 32rem) 75vw, 50vw"
                    srcset="./assets/images/biene-400.jpg 400w, ./assets/images/biene-800.jpg 800w, ./assets/images/biene-1200.jpg 1200w, ./assets/images/biene-full.jpg 1600w"
                >
                <a class="size-24 mx-auto absolute -bottom-1 right-[5%] rounded-full flex items-center justify-center bg-pink shadow-main hover:outline outline-2 sm:size-32" href="https://altruja.de/neopol-nachhaltigkeitspodcast/" target="_blank">
                    <span class="text-lg font-bold tracking-wide uppercase drop-shadow-text sm:text-xl">Spenden</span>
                </a>
            </div>
            <div class="space-y-7">
                <h1 id="spenden" class="text-3xl text-center font-bold drop-shadow-heading">Du kannst uns unterstützen!</h1>
                <p class="drop-shadow-text">
                    Deine Spende hilft uns bei der Entwicklung der zweiten Staffel, auf die wir große Lust haben, und bei der Finanzierung von Equipment, Hosting,
                    Marketingmaterial oder Gastvorträgen. Dein Geld geht auf ein Spendenkonto der <a href="https://ib-stiftung.de/" class="underline hover:no-underline">IB-Stiftung</a> bei der SozialBank. 
                    Wir werden euch hier regelmäßig über die Spendenentwicklung berichten.
                </p>
            </div>
        </section>
        <section aria-labelledby="podcast-folgen" id="podcast" class="bg-darksage scroll-margin">
            <PodcastPlayer />
            <h2 class="pt-8 text-center bg-sage">
                <span class="text-3xl font-bold drop-shadow-heading">Bock mehr zu wissen?</span>
            </h2>
            <div class="px-5 py-8 flex flex-col items-center justify-center gap-7 bg-sage lg:flex-row lg:gap-24">
                    <img
                        src="./assets/images/affe-full.jpg"
                        alt="Affe macht erstauntes Gesicht, verschwommener Wald im Hintergrund"
                        loading="lazy"
                        class="w-5/6 min-w-64 max-w-128 rounded"
                        sizes="(max-width: 32rem) 75vw, 50vw"
                        srcset="./assets/images/affe-400.jpg 400w, ./assets/images/affe-800.jpg 800w, ./assets/images/affe-1200.jpg 1200w, ./assets/images/affe-full.jpg 1600w"
                    >
                <div class="max-w-[36rem] space-y-7">
                    <p class="drop-shadow-text">
                        <cite>Paradigmenwechsel für eine regenerative Welt</cite> ist der Kurs, der sich an die Komplexität des Themas traut und die Lösungsräume groß macht. Schau dir mehr an auf der Seite von uhlig*partner.
                    </p>
                    <a href="https://www.uhligpartner.de/#Angebote" target="_blank" class="size-36 mx-auto text-lg text-center rounded-full flex items-center justify-center bg-darkgray selection:bg-sage shadow-main hover:outline outline-2">Hier geht's<br> zum Kurs!</a>
                </div>
            </div>
        </section>
        <section aria-labelledby="unsere-story" id="story" class="px-5 py-8 flex flex-col space-y-7 scroll-margin">
            <h1 id="unsere-story" class="text-3xl text-center font-bold drop-shadow-heading">Unsere Story</h1>
            <div class="flex flex-col items-center justify-center gap-7 lg:flex-row-reverse lg:gap-24">
                <img
                    src="./assets/images/kreis-full.jpg"
                    alt="Gruppe sitzt im Kreis auf einer Wiese mit Blick nach oben, Vogelperspektive"
                    loading="lazy"
                    class="w-3/4 min-w-64 max-w-80 rounded-full"
                    sizes="(max-width: 32rem) 75vw, 50vw"
                    srcset="./assets/images/kreis-400.jpg 400w, ./assets/images/kreis-800.jpg 800w, ./assets/images/kreis-1200.jpg 1200w, ./assets/images/kreis-full.jpg 1600w"
                >
                <div class="space-y-7 max-w-[36rem]">
                    <p class="drop-shadow-text">
                        Wir sind ein echtes Cross-Generation-Projekt zwischen zwei Oldie-Naturwissenschaftlern und acht Youngstern zwischen achtzehn und Mitte zwanzig. Irgendwie ein wilder Haufen, der ständig einen Grund findet, Spaß zu haben.
                    </p>
                    <FullStory />
                </div>
            </div>
        </section>
        <section aria-labelledby="unser-team" id="team" class="scroll-margin bg-darksage">
            <div class="px-5 py-8 mx-auto space-y-7 max-w-[90rem]">
                <h1 id="unser-team" class="text-3xl text-center font-bold drop-shadow-heading">Das Team</h1>
                <div class="flex flex-col-reverse justify-evenly gap-7 lg:flex-row">
                    <div class="space-y-7 lg:max-w-[36rem] lg:mb-14">
                        <article class="p-4 space-y-3 rounded bg-sage">
                            <h2 class="text-2xl font-bold drop-shadow-heading">Beatris Uhlig</h2>
                            <h3 class="text-xl font-bold drop-shadow-heading">Dipl. Psych., Dozentin, Autorin</h3>
                            <p class="drop-shadow-text">
                                In meinem Beruf als Organisationsentwicklerin bin ich vor allem verbunden mit den Systemen unseres Wirtschaftens. Immer wieder geriet dieses Wirken in Kollision mit meinem naturwissenschaftlichen Herz und meiner Liebe zum Lebendigen und der Natur.
                                Und so treibt mich seit vielen Jahren die Frage um, wie wir drei Dinge in optimale Übereinstimmung bringen können: unsere Bedürfnisse als Menschen und Menschheit, die Systeme die wir entwickeln und das, was dieser großartige Planet braucht,
                                um in Fülle für uns alle zu pulsieren. Die Entwicklung des Kurses war eine logische Folge davon – um zu inspirieren, zu zeigen wie groß die Lösungsräume sind und um in die Tiefe vorzudringen, die es braucht für echten Wandel. 
                            </p>
                        </article>
                        <article class="p-4 space-y-3 rounded bg-sage">
                            <h2 class="text-2xl font-bold drop-shadow-heading">Dr. Sven Werchan</h2>
                            <h3 class="text-xl font-bold drop-shadow-heading">Arzt, Coach, Therapeut</h3>
                            <p class="drop-shadow-text">
                                Seit meiner Jugend treibt mich die Liebe zum Lebendigen um und nach neuen Wegen zu suchen – in der Medizin und im Umgang miteinander. Angeregt durch den Kurs von Beatris nun auch in unserem Wirtschaften. 
                                <cite>Paradigmenwechsel für eine regenerative Welt</cite> ist ein Juwel, das gleichermaßen erschüttert und Hoffnung gibt. Die Tiefe und Fundiertheit des Kurses hat nicht nur mich berührt. Auch unsere eigenen Kinder, 
                                inzwischen junge Erwachsene waren nach dem Hören zutiefst aufgerüttelt und inspiriert. Sie forderten von uns, zusammen, gemeinsam mit ihnen die Inhalte als Podcast in die Welt zu bringen. 
                                "Das sollte jeder hören", war ihr gemeinsames Credo. Dieser Einladung bin ich gern gefolgt. 
                            </p>
                        </article>
                    </div>
                    <img 
                        src="./assets/images/bea_sven-full.jpg" 
                        alt="Mann und Frau sitzen an einen Baum gelehnt und schauen lächelnd in die Kamera"
                        loading="lazy"    
                        class="w-5/6 min-w-64 max-w-128 rounded self-center lg:self-start lg:sticky lg:top-[7rem] lg:mb-36 lg:min-w-80"
                        sizes="(max-width: 32rem) 75vw, 50vw"
                        srcset="./assets/images/bea_sven-500.jpg 500w, ./assets/images/bea_sven-full.jpg 1000w"
                    >
                </div>
                <div class="flex flex-col justify-evenly gap-7 lg:flex-row">
                    <img 
                        src="./assets/images/gruppe-full.jpeg" 
                        alt="Gruppe um einen Baum schaut lächelnd in die Kamera"
                        loading="lazy"    
                        class="w-5/6 min-w-64 max-w-128 rounded self-center lg:self-start lg:sticky lg:top-[7rem] lg:mb-36 lg:min-w-80"
                        sizes="(max-width: 32rem) 75vw, 50vw"
                        srcset="./assets/images/gruppe-500.jpg 500w, ./assets/images/gruppe-full.jpeg 1000w"
                    >
                    <TeamInfo />
                </div>
            </div>
        </section>
        <section aria-labelledby="kontakt" id="contact" class="px-5 py-8 mx-auto max-w-192 space-y-7">
            <h1 id="kontakt" class="text-3xl text-center font-bold drop-shadow-heading">Kontaktiere uns</h1>
            <p class="text-center drop-shadow-heading">Wir freuen uns auf deine Nachrichten und laden dich ein, mit uns im Gespräch zu sein.</p>
            <div class="flex items-center justify-evenly gap-5">
                <a href="https://www.instagram.com/freundliches_unruhestiften/" target="_blank" class="flex flex-col items-center gap-5 hover:underline">
                    <img src="./assets/images/instagram.jpg" alt="Weißes Instagram-Logo auf farbigem Hintergrund" loading="lazy" class="size-24 rounded-xl">
                    <span class="text-center drop-shadow-text">Folge uns auf Instagram!</span>
                </a>
                <a href="mailto:hallo@freundliches-unruhestiften.de" class="flex flex-col items-center gap-5 hover:underline">
                    <img src="./assets/images/mail.jpg" alt="Weißes Briefsymbol auf schwarzem Hintergrund" loading="lazy" class="size-24 rounded-xl">
                    <span class="text-center drop-shadow-text">Schreib uns eine Mail!</span>
                </a>
            </div>
        </section>
    </main>
    <Footer></Footer>
</template>