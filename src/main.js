import './base.css'

import { createApp } from 'vue'
import Home from './Home.vue'

const home = createApp(Home)

home.mount('#home')

window.onload = () => setTimeout(() => {
    const cookieDialog = document.getElementById("cookie-dialog")
    
    if (!document.cookie.includes("redCircleConsent")) {
        cookieDialog.classList.add("flex")
        cookieDialog.showModal()
    }
}, 200)