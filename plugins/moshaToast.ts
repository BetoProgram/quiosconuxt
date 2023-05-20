import moshaToast from 'mosha-vue-toastify'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(moshaToast)
})