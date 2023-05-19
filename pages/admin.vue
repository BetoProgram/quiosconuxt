<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'
definePageMeta({
    layout: "admin"
})

const { data, error, refresh } = await useFetch('/api/get-all-ordenes',{ server: false })

useIntervalFn(() => {
    refresh()
}, 100)

</script>

<template>
    <h1 class="text-4xl font-black">Panel de Administacion</h1>
    <p class="text-2xl my-10">Administra las ordenes</p>

    <Orden v-if="data && data.length > 0" 
        v-for="orden in data" :key="orden.id" :orden="orden" />
    <p v-else>No hay Ordenes</p>
</template>

<style scoped>

</style>