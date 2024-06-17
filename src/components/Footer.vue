<script setup>
    const cookieDialog = document.getElementById("cookie-dialog")

    function openCookieDialog() {
        cookieDialog.classList.add("flex")
        cookieDialog.showModal()
    }
</script>

<template>
    <footer class="p-5 flex flex-col items-center bg-darkgray selection:bg-sage ">
        <div class="flex items-center gap-3">
            <a href ="/">
                <img src="../assets/images/logo.webp" alt="Abstrakt illustriertes Logo mit Naturthema" width="60px">
            </a>
            <span class="text-lg">Freundliches Unruhestiften © {{ new Date().getFullYear() }}</span>
        </div>
        <ul class="mt-5 text-center flex flex-col gap-5 sm:flex-row">
            <li>
                <a href="/pages/impressum/" class="uppercase hover:underline">Impressum</a>
            </li>
            <li>
                <a href="/pages/datenschutz/" class="uppercase hover:underline">Datenschutz</a>
            </li>
            <li>
                <button type="button" @click="openCookieDialog" class="uppercase hover:underline">Cookie-Einstellungen</button>
            </li>
        </ul>
    </footer>
</template>