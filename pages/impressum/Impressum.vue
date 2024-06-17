<script setup>
    import Header from '/src/components/Header.vue'
    import Footer from '/src/components/Footer.vue'
</script>

<template>
    <Header></Header>
    <div class="p-5 m-5 space-y-4 rounded bg-darkgray selection:bg-sage">
        <h1 class="text-3xl font-bold">Impressum</h1>
        <h2 class="text-2xl font-bold">Angaben gemäß § 5 TMG</h2>
        <div class="flex flex-col gap-7 lg:flex-row">
            <div class="space-y-4">
                <!-- <h3 class="text-xl font-bold">Neopol</h3>
                <p>
                    Neopol, c/o Daniel Rahaus<br>
                    Ein Projekt der IB-Stiftung<br>
                    z.H. Ronny Geißler<br>
                    Valentin-Senger-Straße 5<br>
                    60389 Frankfurt am Main
                </p>
                <p>
                    Telefon: <a href="tel:+496994545118" class="underline hover:no-underline">069 9 45 45 118</a><br>
                    E-Mail: <a href="mailto:kontakt@ib-stiftung.de" class="underline hover:no-underline">kontakt@ib-stiftung.de</a><br>
                    Webseite: <a href="https://neopol.org/" target="_blank" class="underline hover:no-underline">www.neopol.org</a>
                </p>
                <p>
                    Die IB-Stiftung ist eine rechtsfähige Stiftung bürgerlichen Rechts mit Sitz in Frankfurt am Main.<br>
                    Zuständige Aufsichtsbehörde: Stiftungsaufsicht, Stadtverwaltung (Amt 30), 60275 Frankfurt am Main
                </p> -->
                <p>
                    Beatris Uhlig<br>
                    Diplom Psychologin – uhlig*partner<br>
                    Schillerstr. 3c<br>
                    14163 Berlin
                </p>
                <p>
                    E-Mail: <a href="mailto:uhlig@uhligpartner.de" class="underline hover:no-underline">uhlig@uhligpartner.de</a><br>
                    Telefon: <a href="tel:+491732170291" class="underline hover:no-underline">+49 173 217 02 91</a><br>
                    Webseite: <a href="https://www.uhligpartner.de" target="_blank" class="underline hover:no-underline">www.uhligpartner.de</a>
                </p>
                <p>
                    Steuernummer: 25/566/00750<br>
                    Plattform der EU-Kommission zur <a href="https://ec.europa.eu/consumers/odr" class="underline hover:no-underline">Online-Streitbeilegung</a><br>
                    Ich bin zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
                </p>
            </div>
            <div class="space-y-4">
                <!-- <h3 class="text-xl font-bold">Inhalte</h3> -->
                
                <p>
                    Dr. Sven Werchan<br>
                    Webseite: <a href="https://www.integrale-ernaehrung.de/" target="_blank" class="underline hover:no-underline">www.integrale-ernaehrung.de</a>
                </p>
                <h3 class="text-xl font-bold">Fotos</h3>
                <p>
                    Beatris Uhlig und <a href="https://unsplash.com/" target="_blank" class="underline hover:no-underline">unsplash.com</a><br>
                    Wir danken <a href="http://www.haas-images.de/" target="_blank" class="underline hover:no-underline">Haas Images</a> für die Bereitstellung unserer wunderschönen Sticker.
                </p>
            </div>
            <img src="/img/sticker.jpg" alt="Abstrakt illustrierter Sticker mit Naturthema" srcset="/img/sticker.webp" class="p-5 w-full max-w-96 self-center">
        </div>
    </div>
    <Footer></Footer>
</template>